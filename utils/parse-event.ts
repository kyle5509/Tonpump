import { ExternalOut } from "@ton/sandbox";
import { Address, Cell } from "ton-core";
import { HttpClient, Api } from 'tonapi-sdk-js';
export function parseEvent(body: ExternalOut[], i: number): string {
  const emits: ExternalOut[] = body;
  let slice = emits[i].body.beginParse();
  let emmitedAddress = slice.loadStringTail();

  return emmitedAddress;
}

export async function Par(address:string) {
  console.log("here")
const TOKEN="AHT2PXBEJVG5OKAAAAAI7B7V4CCP6A5CGPBD7DFLLEKGGLQYE2D7CIH5XSE2EJ5S6CXTZ6Q";
// Configure the HTTP client with your host and token
const httpClient = new HttpClient({
  baseUrl: 'https://tonapi.io',
  baseApiParams: {
      headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-type': 'application/json'
      }
  }
});

// Initialize the API client
const client = new Api(httpClient);

const index=0;
  try {
    const tx = await client.blockchain.getBlockchainAccountTransactions("EQAtbg3j37DvZkH24wkL-GVonZ9qTb3nyuMBbIRPEo_78-sR");
    console.log(tx.transactions)
    for (let i = 0; i < tx.transactions[index].out_msgs.length; i++) {
        if (tx.transactions[index].out_msgs[i].msg_type === 'ext_out_msg' && tx.transactions[index].out_msgs[i].op_code === '0x2eec4b61' ) {
            let rawBody = tx.transactions[index].out_msgs[i].raw_body??"";
            console.log(rawBody)
            return ""
        }
    }
} catch (error) {
    console.error("Error fetching data from TON API:", error);
}
  
}




