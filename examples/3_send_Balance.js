const Web3 = require('web3')
const web3 = new Web3('HTTP://127.0.0.1:7545') //ganache

const account1 = '0xfb7edB80a48713FAF7095E5e4D5a5e3DCaDadcdc'
const account2 = '0x8fbCC7fcAF8F305FC5462d11b6bF05856d37CeF1'

web3.eth.getBalance(account1, (err, wei) => {
    balance = web3.utils.fromWei(wei, 'ether')
    console.log("🚀 ~ file: 1_account.js ~ line 8 ~ web3.eth.getBalance ~ balance", balance)
  }) 
  
const a = web3.eth.sendTransaction({
    from:account1,
    to:account2,
    value:web3.utils.toWei('1','ether')
})  
console.log("🚀 ~ file: send_Balance.js ~ line 17 ~ a", a)
