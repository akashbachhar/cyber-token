import { TezosToolkit } from '@taquito/taquito';
import { importKey } from '@taquito/signer';
import FAUCET_KEY from './account.js';
import CODE_JSON from './code.js';
import STORAGE_JSON from './storage.js';


const Tezos = new TezosToolkit('https://edonet.smartpy.io');

importKey(
    Tezos,
    FAUCET_KEY.email,
    FAUCET_KEY.password,
    FAUCET_KEY.mnemonic.join(" "),
    FAUCET_KEY.secret
);

Tezos.contract.originate({
    code: CODE_JSON,
    init: STORAGE_JSON
}).then(origination =>{
    console.log("Origination Waiting");
    return origination.contract()
}).then(contract => {
    console.log("Origination Complete"); 
    console.log(contract.address);  
}).catch(err => {console.log(err);});

//KT1B7N9XorSc3dNNPfcFFtv6vQMsg9vvknTJ



