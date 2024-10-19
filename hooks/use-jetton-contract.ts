import useAsyncInitialize from "./use-async-initialize";
import useTonClient from "./use-ton-client";
import { OpenedContract, toNano } from "@ton/core";
import {
  Address as TonCoreAddress,
  beginCell,
  SenderArguments,
} from "@ton/core";
import useTonConnect from "./use-ton-connect";
import { buildOnchainMetadata } from "../utils/build-onchain-metadata";

import { builder, TokenCreate } from "../services/api";
import useMobile from "./use-is-mobile";
import { useDisclosure } from "@mantine/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { errorMessageHandler } from "../utils/error-handler";
import { useState } from "react";
import { Address, TonClient } from "ton";
import { TonkPumpDefaultWallet } from "@/wrappers/TonkPumpWallet";
import {
  DeployContractAndAMM,
  loadContractDeployed,
  TonkPumpFactory,
} from "@/wrappers/TonkPumpFactory";
import { TonkPumpAMM } from "@/wrappers/TonkPumpAMM";
import { bigIntValue } from "../utils/hex_16";
import TonProvider from "../components/shared/providers/ton-provider";
import { SendTransactionRequest, useTonConnectUI } from "@tonconnect/ui-react";
import { usePortal } from "@ibnlanre/portal";
import { userAtom } from "../store/atoms";

interface JettonParams {
  name: string;
  description: string;
  symbol: string;
  image: string;
}
const v = bigIntValue;
console.log(v);
const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

function useJettonContract(tokenId?: number) {
  const { client } = useTonClient();
  const { sender, wallet, tonConnectU } = useTonConnect();

  const jettonContract = useAsyncInitialize(async () => {
    if (!client) return;

    const contract = TonkPumpFactory.fromAddress(
      Address.parse(process.env.NEXT_PUBLIC_TOKEN_FACTORY_ADDRESS!)
    );
    return client.open(contract as any) as OpenedContract<TonkPumpFactory>;
  }, [client]);

  const tonkPumpWallet = async (address: string) => {
    if (!client) return;

    const contract = TonkPumpDefaultWallet.fromAddress(
      Address.parse(address.toString())
    );

    const openedContract = (await client.open(
      contract as any
    )) as OpenedContract<TonkPumpDefaultWallet>;
    return openedContract;
  };

  const tonkPumpJettonAMM = async (address: string) => {
    if (!client) return;

    const contract = TonkPumpAMM.fromAddress(Address.parse("EQBMFgIIVOf_PUHLpxLqfAJcQfOwHEdJE5tCenhWQrV_sE3M"));

    const openedContract = (await client.open(
      contract as any
    )) as OpenedContract<TonkPumpAMM>;
    return openedContract;
  };

  const isMobile = useMobile();
  const [opened, { open, close }] = useDisclosure(false);
  const [modalOpened, { open: openModal, close: closeModal }] =
    useDisclosure(false);

  async function waitForNewOutgoingTransaction(
    client: TonClient,
    senderAddress: Address
  ): Promise<boolean> {
    const maxAttempts = 20;
    const delayBetweenAttempts = 3000; // 3 seconds

    // Get the initial last transaction time
    const initialTransactions = await client.getTransactions(senderAddress, {
      limit: 1,
    });

    const initialLastTime = initialTransactions[0]?.now ?? 0;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      await new Promise((resolve) => setTimeout(resolve, delayBetweenAttempts));

      const transactions: any = await client.getTransactions(senderAddress, {
        limit: 1,
      });
      //  client.isContractDeployed() - We can use thids to validate that the contract is deployed

      let rawSlice = transactions[0].outMessages.get[0];
      let emittedAddress = loadContractDeployed(rawSlice!);
      console.log(emittedAddress);
      if (
        transactions.length > 0 &&
        transactions[0].now > initialLastTime &&
        transactions[0].outMessagesCount > 0
      ) {
        return true; // New outgoing transaction found
      }
    }

    return false; // No new outgoing transaction found after all attempts
  }

  async function getNewJettonAddress(tokenId: bigint): Promise<Address | null> {
    const maxAttempts = 10;
    const delayBetweenAttempts = 2000; // 2 seconds

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        // @ts-ignore
        const address = await jettonFactory?.getJettonAddress(tokenId);
        if (address) {
          return address;
        }
      } catch (error) {
        console.log(`Attempt ${attempt + 1} failed, retrying...`);
      }

      await new Promise((resolve) => setTimeout(resolve, delayBetweenAttempts));
    }

    return null; // If we couldn't find the jetton after all attempts
  }

  const { mutate, isPending } = useMutation({
    mutationFn: builder.use().tokens.create,
    onSuccess() {
      isMobile ? open() : openModal();
    },
    onError(error) {
      errorMessageHandler(error);
    },
  });
  const queryClient = useQueryClient();
  const [user] = usePortal.atom(userAtom);

  const { mutate: updateToken, isPending: updateLoading } = useMutation({
    mutationFn: builder.use().tokens.update,
    onSuccess() {
      // succcessNotification("Mint successfull");
      queryClient.invalidateQueries({
        queryKey: builder.tokens.details.use(
          tokenId as number,
          user?.id as number
        ),
      });
    },
    onError(error) {
      errorMessageHandler(error);
    },
  });

  async function getTonToUsdRate(): Promise<number> {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=the-open-network&vs_currencies=usd"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data["the-open-network"] || !data["the-open-network"].usd) {
        throw new Error("Unexpected response format");
      }

      return data["the-open-network"].usd;
    } catch (error) {
      console.error("Error fetching TON to USD rate:", error);
      throw error;
    }
  }

  async function verifyTokenCreation(
    newTokenId: bigint
  ): Promise<Address | null> {
    const maxAttempts = 20;
    const delayBetweenAttempts = 3000; // 3 seconds

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      await new Promise((resolve) => setTimeout(resolve, delayBetweenAttempts));

      try {
        // Get the address of the token contract
        // @ts-ignore
        const tokenAddress = await jettonFactory?.getJettonAddress(newTokenId);

        if (tokenAddress) {
          return tokenAddress;
        }
      } catch (error) {
        console.log(error);
        console.log(`Attempt ${attempt + 1} failed, retrying...`);
      }
    }

    return null;
  }

  const [mintLoading, setMintLoading] = useState(false);

  return {
    close,
    closeModal,
    opened,
    modalOpened,
    async deployContract(
      metaData: JettonParams,
      payload: Omit<
        Omit<Omit<TokenCreate, "token_address">, "token_amm_address">,
        "token_hex"
      >
    ) {
      console.log(v);

      let content = buildOnchainMetadata(metaData);
      const message: DeployContractAndAMM = {
        $$type: "DeployContractAndAMM",
        // devAddress: sender.address as Address,
        content,
        v: v,
        ticker: `${metaData?.symbol}/TON`,
      };

      try {
        // Send the transaction
        // @ts-ignore
        await jettonContract?.send(
          sender,
          {
            value: toNano("0.6"),
          },
          message
        );

        // await sleep(20000);

        //   @ts-ignore
        const value = await jettonContract?.getAllContracts();
        //   @ts-ignore
        const fee = await jettonContract?.getDeployFee();
        console.log(fee);
        console.log(value?.toString());
        let valueNumber: number = Number(value);
        let myNumber = BigInt(valueNumber);
        await sleep(40000);
        // await Par(process.env.NEXT_PUBLIC_TOKEN_FACTORY_ADDRESS!);
        const token = await jettonContract
          //   @ts-ignore
          ?.getJettonAddress(value);
        console.log(token);
        while (true) {
          const isDeployed = await client!.isContractDeployed(token!);
          console.log(isDeployed);
          if (isDeployed) {
            console.log("Contract deployed successfully!");
            // @ts-ignore
            console.log("CREATED TOKEN", token?.toString());
            console.log("SENDER'S ADDRESS", sender.address?.toString());
            console.log(
              "CONTRACT ADDRESS:",
              process.env.NEXT_PUBLIC_TOKEN_FACTORY_ADDRESS
            );
            const amm: Address | null | undefined = await jettonContract
              //   @ts-ignore
              ?.getAmmContractAddress(value);
            console.log("AMM CONTRACT ADDRESS:", amm?.toString());
            const pumpJettonAMM: any = await tonkPumpJettonAMM(
              amm?.toString() as string
            );
            //   @ts-ignore
            let jettonAddressFromAMM = await pumpJettonAMM.getJettonAddress();
            console.log(
              "Jetton CONTRACT ADDRESS FROM AMM:",
              jettonAddressFromAMM?.toString()
            );
            mutate({
              ...payload,
              token_address: token?.toString()!,
              token_amm_address: amm?.toString() as string,
              token_hex: v.toString(),
            });
            break;
          }
          await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second before checking again
        }
      } catch (error) {
        console.error("Error deploying contract:", error);
      }
    },
    mintLoading,

    async mintToken(tokenAmmAddress: string, v: bigint) {
      setMintLoading(true);
      try {
        console.log("SENDER", sender?.address?.toString());
        const tonkPumpJettonAmm = await tonkPumpJettonAMM(tokenAmmAddress);
        // @ts-ignore
        await tonkPumpJettonAmm?.send(
          sender,
          {
            value: toNano("0.6"),
          },
          {
            $$type: "DevMint",
            yciycWallet: TonCoreAddress.parse(
              "0QCCokksiQXpQjI5EkgXQ_1njLm5iTfp0CWGXWTwmI3yumyP"
            ),
            exchangeWallet: TonCoreAddress.parse(
              "0QCCokksiQXpQjI5EkgXQ_1njLm5iTfp0CWGXWTwmI3yumyP"
            ),
            marketMakerWallet: TonCoreAddress.parse(
              "0QCCokksiQXpQjI5EkgXQ_1njLm5iTfp0CWGXWTwmI3yumyP"
            ),
          }
        );
      } catch (error) {
        console.log(error);
      }
      updateToken({ data: { is_minted: 1 }, id: tokenId as number });
      setMintLoading(false);
    },

    async buyJetton(tonAmount: number, ammAddress: string) {
      try {
        const tonToUsdRate = await getTonToUsdRate();

        const usdAmount = tonAmount * tonToUsdRate;

        console.log({ usdAmount, tonToUsdRate, tonAmount });

        const tonkPumpJettonAmm = await tonkPumpJettonAMM(ammAddress);

        // @ts-ignore
        await tonkPumpJettonAmm?.send(
          sender,
          {
            value: toNano("0.1"),
          },
          { $$type: "Buy", tonInDollars: toNano(usdAmount), v:63366505962487083963279954475415854395916460097725287398767744625055547165192n }
        );
      } catch (error) {
        console.error("Error in buyJetton:", error);
      }
    },
    async sellJetton(params: {
      amount: number;
      tokenAddress: string;
      ammAddress: string;
    }) {
      const userJettonWallet = await TonkPumpDefaultWallet.fromInit(
        TonCoreAddress.parse(params.tokenAddress),
        TonCoreAddress.parse(sender.address?.toString()!)
      );
      const tx: SendTransactionRequest = {
        validUntil: Date.now() + 5 * 60 * 1000,
        messages: [
          {
            address: userJettonWallet.address.toString(),
            amount: toNano(params.amount).toString(),
            stateInit: undefined,
            payload: transfer(
              TonCoreAddress.parse(params.ammAddress),
              TonCoreAddress.parse(sender.address?.toString()!)
            )
              .toBoc()
              .toString("base64"),
          },
        ],
      };
      tonConnectU.sendTransaction(tx);
    },
  };
}

export default useJettonContract;

export function transfer(to: Address, from: Address) {
  return beginCell()
    .storeUint(OPS.Transfer, 32)
    .storeUint(1, 64)
    .storeCoins(1000000n)
    .storeAddress(to)
    .storeAddress(from)
    .storeBit(false)
    .storeCoins(toNano(0.001))
    .storeBit(true) // forward_payload in this slice, not separate cell
    .endCell();
}

enum OPS {
  Transfer = 0xf8a7ea5,
  
}
