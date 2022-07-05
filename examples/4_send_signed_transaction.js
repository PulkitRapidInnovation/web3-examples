const Tx = require('ethereumjs-tx')
const Web3 = require('web3')
const rpcURL = 'https://ropsten.infura.io/v3/844f6a66a00049ed92fc80bd433495e4' // Your RCP URL goes here
const web3 = new Web3(rpcURL)
require('dotenv').config()
// console.log(web3.eth.accounts.create()) 
    // it generate the new address and private key
    //create account address and private key 
    //or use ganache acc address and private key

const account1 = '0x80e411e422607d4373bB05dF1606353D255e70d5'
const account2 = '0xaE580C3cc26252d00218FCa1493C882ff16CA5Df'
const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1,'hex')
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2 , 'hex')

web3.eth.getTransactionCount(account1,(err,txCount)=>{
    //build the transaction

    const txObject ={
        nonce:web3.utils.toHex(txCount),
        to:account2,
        value:web3.utils.toHex(web3.utils.toWei('0.00000001','ether')),
        gasLimit:web3.utils.toHex(21000),
        gasPrice:web3.utils.toHex(web3.utils.toWei('10','gwei'))
    }
    console.log("🚀 ~ file: send_signed_transaction.js ~ line 26 ~ web3.eth.getTransactionCount ~ txObject", txObject)

    //sign the transaction

 //   var tx = new Tx(txObject)
    const tx = new Tx(txObject, { chain: 'ropsten' });
    tx.sign(privateKey1)

    const serializedTransaction = tx.serialize()
    console.log("🚀 ~ file: send_signed_transaction.js ~ line 35 ~ web3.eth.getTransactionCount ~ serializedTransaction", serializedTransaction)
    const raw = '0x' + serializedTransaction.toString('hex')

    //broadcast the transaction(infura above rpc url)
    web3.eth.sendSignedTransaction(raw,(err,txHash)=>{
        console.log("🚀 ~ file: send_signed_transaction.js ~ line 38 ~ web3.eth.sendSignedTransaction ~ err", err)
        console.log('txHash',txHash)
    })
// tx hash is successfully broadcasted to the ropsten test network
//https://ropsten.etherscan.io/ check and paste the transaction hash generated
})



// create Transaction
// sign Transaction
// broadcast the Transaction