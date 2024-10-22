import { useEffect, useState } from "react";
import { Address, fromNano, OpenedContract, toNano } from "@ton/core";
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

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time))

export function useJettonContract() {
    const { client } = useTonClient()
    const { wallet, sender } = useTonConnect()
    const jettonParams = {
        name: 'It will workToken',
        description: 'Full of faith; full of the spirit :)',
        symbol: 'It will',
        image: 'https://i.ibb.co/GthZ88P/b18069c3b2ac.jpg',
    };
    let content = buildOnchainMetadata(jettonParams);
    const jettonContractFactory = useAsyncInitialize(async () => {
        if (!client) return;
        const contract = TonkPumpFactory.fromAddress(Address.parse('EQB1R7CzNjVvOxpnG1-yo6IZy7JeYxb3ABs8T_qAzKiIDuh3'))
        return client.open(contract as any) as OpenedContract<TonkPumpFactory>
    }, [client])
    return {
        deploy: () => {
            console.log('Button Clicked')
            const message: DeployContractAndAMM = {
                $$type: "DeployContractAndAMM",
                content,
                ticker: "USDC/TON",
                v: bigIntValue
            }
            jettonContractFactory?.send(sender, {
                value: toNano("0.05")
            }, message)
        }
    }
}
