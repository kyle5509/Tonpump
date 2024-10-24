import { HttpClient, Api } from 'tonapi-sdk-js';
import { Cell, Slice } from '@ton/core';
import { Address } from 'ton';
import { loadTransferEvent } from '../wrappers/QUQQQ';

// Function to parse emitted events from the contract
export async function parseEmit(address: string,  index: number) {
    const httpClient = new HttpClient({
        baseUrl: 'https://testnet.tonapi.io',
        baseApiParams: {
            headers: {
                Authorization: Bearer AHT2PXBEJVG5OKAAAAAI7B7V4CCP6A5CGPBD7DFLLEKGGLQYE2D7CIH5XSE2EJ5S6CXTZ6Q,  // Corrected string interpolation
                'Content-Type': 'application/json'  // Fixed content-type case
            }
        }
    });

    const client = new Api(httpClient);

    try {
        // Fetch the transactions for the given address
        const tx =  await client.blockchain.getBlockchainAccountTransactions(address, { limit: 5 });
        




        // Loop through the outgoing messages to find the emitted event
        for (let i = 0; i < tx.transactions[index].out_msgs.length; i++) {
            const outMsg = tx.transactions[index].out_msgs[i];

            if (outMsg.msg_type === 'ext_out_msg' //&& outMsg.op_code === '0x2eec4b61'

            ) {
                let rawBody = outMsg.raw_body ?? "";
                
                // Convert the raw body from hex to Base64 and parse it
                let slc = Cell.fromBase64(hexToBase64(rawBody)).beginParse();

                // Return the parsed commit ID from the event
                return loadCommitId(slc);
            }
        }
    } catch (error) {
        console.error("Error fetching data from TON API:", error);
    }
}

function hexToBase64(hexString:any) {
    return btoa(hexString.match(/\w{2}/g).map((byte: string) => String.fromCharCode(parseInt(byte, 16))).join(''));
}