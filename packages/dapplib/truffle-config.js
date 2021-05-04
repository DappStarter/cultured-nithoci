require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember snake inner drop sugar spoon'; 
let testAccounts = [
"0xd939351b9208d2a9e931fd560d63eef7e976ced6b27ee6c71ed88b891c640f35",
"0x2925e966e25ec9d8062e1e37cdd00308647d6c3d8b45b9b233d84754a0a4365c",
"0x740e6b6a199b365019e6befe69dc39785edfcc9c4ab721e21a39f9ffa4446828",
"0x396a5ea855e81b9649d5026129695d08a01997791a466c09c77ba98f66908f94",
"0x2d7123f53939a6d3ed65a3c940d926ca5ea732f3fa75e2563e78effe0a4cd965",
"0x1d7c16bfa998b3330f29aa7036ed5c0a6981137f8834d4c8f0f1518c0445de31",
"0x7bc7be3d4fcde89ebebd5a331f13378b916b0ff91f17e6699fdbc792f70c80a6",
"0x8d2d70c9a2ff3de1c55daa83e6b1ea8809b9a78f1d75bf2710f87133dc88bd5f",
"0x9092199741c44a54b2125ce94d4f33133a9661f8eb6d93c6c343359438edd3e9",
"0x67ece99bdfc812bfad35270e4dcc7e6e382e7df153875141429c17c016b0e9c6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
