import { useEffect, useState } from "react";
import { fromNano, OpenedContract, toNano } from "@ton/core";
import { Address, TonClient } from "ton";

import {
  DeployContractAndAMM,
  loadContractDeployed,
  TonkPumpFactory,
} from "@/wrappers/TonkPumpFactory";

import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";
import { buildOnchainMetadata } from "@/utils/build-onchain-metadata";
import { TonkPumpDefaultWallet } from "@/wrappers/TonkPumpWallet";
import { bigIntValue } from "@/utils/hex_16";
import { Buy, DevMint, TonkPumpAMM } from "@/wrappers/TonkPumpAMM";
// import { TonkPumpAMM } from "@/wrappers/TonkPumpAMM";

const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export function useJettonContract() {
  const { client } = useTonClient();
  const { wallet, sender } = useTonConnect();
  const jettonParams = {
    name: "It will workToken",
    description: "Full of faith; full of the spirit :)",
    symbol: "It will",
    image: "https://i.ibb.co/GthZ88P/b18069c3b2ac.jpg",
  };
  let content = buildOnchainMetadata(jettonParams);
  const jettonContractFactory = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = TonkPumpFactory.fromAddress(
      Address.parse("EQB1R7CzNjVvOxpnG1-yo6IZy7JeYxb3ABs8T_qAzKiIDuh3")
    );
    return client.open(contract as any) as OpenedContract<TonkPumpFactory>;
  }, [client]);
  const jettonContractAMM = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = TonkPumpAMM.fromAddress(
      Address.parse("EQB1R7CzNjVvOxpnG1-yo6IZy7JeYxb3ABs8T_qAzKiIDuh3")
    );
    return client.open(contract as any) as OpenedContract<TonkPumpAMM>;
  }, [client]);

  
  

  return {
    deploy: () => {
      console.log("Button Clicked");
      const message: DeployContractAndAMM = {
        $$type: "DeployContractAndAMM",
        content,
        ticker: "USDC/TON",
        v: bigIntValue,
      };
      jettonContractFactory?.send(
        sender,
        {
          value: toNano("0.6"),
        },
        message
      );
    },
    buy: () => {
      const message: Buy = {
          $$type: "Buy",
          tonInDollars: toNano(0.05),
          v: bigIntValue
      };
      jettonContractAMM?.send(
        sender,
        {
          value: toNano("0.6"),
        },
        message
      );
    },
    devMint: () => {
      const message: DevMint = {
          $$type: "DevMint",
          yciycWallet: Address.parse(''),
          marketMakerWallet:Address.parse(''),
          exchangeWallet:Address.parse('')
      };
      jettonContractAMM?.send(
        sender,
        {
          value: toNano("0.6"),
        },
        message
      );
    },
    sell: () => {
      const message: DevMint = {
          $$type: "DevMint",
          yciycWallet: Address.parse(''),
          marketMakerWallet:Address.parse(''),
          exchangeWallet:Address.parse('')
      };
      jettonContractAMM?.send(
        sender,
        {
          value: toNano("0.6"),
        },
        message
      );
      
    },

  };
}
