require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name recipe night minor hidden end army gauge'; 
let testAccounts = [
"0xc2655fc1a1280d38fd802aa20c5bfa12baaf48f7b7d05dda39c8ff8838c89f63",
"0xd57001726cb05b33593bb8a0b893e12f11115c34bce52939ce44c72c0d8f5875",
"0x42d22ea3f4360823317cb03ddd7d824894d412f5caf28383dc086f2d72323b0a",
"0x7fb59283dfaed7a1d89f2acaf38691c9d386a88c8a55dc85da5552822aec934a",
"0xaa94f30aae8ff235b43e3b07d311d26a4166248ca40a810d3bf03dc907808087",
"0x067e86e819a2b0a6352d2070f3afda470b34277433aef2673d05b8d3c73b709e",
"0xae077f463da8c660a576fc6c06f7ba0cd2a15a4420cac8d86c30b05971cb9f22",
"0xc0bc41f323933b9c200fd170a5c1f3ce473545508fa4873d0c749983e954ddb1",
"0xc6b4ef8c058a55b7ce50a7123bb6258d5b97c765a901303db87eb3f20aa82de1",
"0x446b7881d3be2e40787449c3d3e3e218cf05f3c1db995a6aa215f210b2e03bf7"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
