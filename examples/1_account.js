const  Web3  = require("web3");
// import Web3 from "web3";
const rpcURL = 'https://ropsten.infura.io/v3/844f6a66a00049ed92fc80bd433495e4'
const web3 = new Web3(rpcURL)
const address = '0x80e411e422607d4373bB05dF1606353D255e70d5' 
web3.eth.getBalance(address, (err, wei) => {
  balance = web3.utils.fromWei(wei, 'ether')
  console.log("🚀 ~ file: 1_account.js ~ line 8 ~ web3.eth.getBalance ~ balance", balance)
}) 

