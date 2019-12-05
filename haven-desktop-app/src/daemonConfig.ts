import {APP_DATA_PATH, isMainnet} from "./env";
import * as fs  from 'fs';
import * as path from "path";

const MAINNET_WALLET_PATH = '/wallet/main';
const TESTNET_WALLET_PATH = '/wallet/test';
const PLATFORM = process.platform;

console.log(PLATFORM);

const WALLET_PATH_TESTNET: string = path.join( APP_DATA_PATH , TESTNET_WALLET_PATH);
const WALLET_PATH_MAINNET: string = path.join( APP_DATA_PATH , MAINNET_WALLET_PATH);

const HAVEND_PATH_TESTNET: string = path.resolve(__dirname,`../haven-node/${PLATFORM}/testnet/havend`);
const HAVEND_PATH_MAINNET: string = path.resolve(__dirname,`../haven-node/${PLATFORM}/mainnet/havend`);

const WALLET_RPC_PATH_TESTNET: string = path.resolve(__dirname,`../haven-node/${PLATFORM}/testnet/haven-wallet-rpc`);
const WALLET_RPC_PATH_MAINNET: string = path.resolve(__dirname,`../haven-node/${PLATFORM}/mainnet/haven-wallet-rpc`);



export const  checkAndCreateWalletDir = () => {

    console.log(WALLET_PATH_TESTNET);
    if (isMainnet) {

        if (!fs.existsSync(WALLET_PATH_MAINNET)) {
            fs.mkdirSync(WALLET_PATH_MAINNET, {recursive:true});
        }
    } else {

        if (!fs.existsSync(WALLET_PATH_TESTNET)) {

            fs.mkdirSync(WALLET_PATH_TESTNET, {recursive:true});
        }
    }

};






const daemonConfigMainnet = {

    havend: {
        path:HAVEND_PATH_MAINNET,
        port:17750,
        args:{
            'mainnet':'',
            'rpc-bind-port': 17750,
        }
    },
    wallet: {
        path: WALLET_RPC_PATH_MAINNET,
        port:12345,
        args: {

            'mainnet':'',
            'rpc-bind-port': 12345,
            'disable-rpc-login': '',
            'wallet-dir': WALLET_PATH_MAINNET,
        }
    }

};

const daemonConfigTestnet = {

    havend: {
        path:HAVEND_PATH_TESTNET,
        port:27750,
        args:{
            'testnet':'',
            'rpc-bind-port': 27750,
        }
    },
    wallet: {
        path:WALLET_RPC_PATH_TESTNET,
        port:12345,
        args: {

            'testnet':'',
            'rpc-bind-port': 12345,
            'disable-rpc-login': '',
            'wallet-dir': WALLET_PATH_TESTNET,
        }

    },

};

export interface IDaemonConfig {
        path:string;
        port:number;
        args:{ [key: string]: string | number };
}

export const daemonConfig:{havend: IDaemonConfig, wallet:IDaemonConfig} = isMainnet? daemonConfigMainnet : daemonConfigTestnet;














