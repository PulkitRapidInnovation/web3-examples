var Tx     = require('ethereumjs-tx')
const Web3 = require('web3')
const rpcURL = 'https://ropsten.infura.io/v3/844f6a66a00049ed92fc80bd433495e4' // Your RCP URL goes here
const web3 = new Web3(rpcURL)
require('dotenv').config()
const account1 = '0x80e411e422607d4373bB05dF1606353D255e70d5' // Your account address 1
const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')

// Deploy the contract
web3.eth.getTransactionCount(account1, (err, txCount) => {
  const data = '0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061085e806100606000396000f3fe60806040526004361061004e5760003560e01c806312065fe0146100d157806333a99e04146100fc57806335c1d34914610113578063481c6a75146101505780635ec01e4d1461017b576100cc565b366100cc57670de0b6b3a7640000341461006757600080fd5b6001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550005b600080fd5b3480156100dd57600080fd5b506100e66101a6565b6040516100f39190610649565b60405180910390f35b34801561010857600080fd5b50610111610207565b005b34801561011f57600080fd5b5061013a600480360381019061013591906104dd565b610388565b604051610147919061062e565b60405180910390f35b34801561015c57600080fd5b506101656103c7565b6040516101729190610613565b60405180910390f35b34801561018757600080fd5b506101906103eb565b60405161019d9190610649565b60405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461020157600080fd5b47905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461025f57600080fd5b6003600180549050101561027257600080fd5b600061027c6103eb565b905060008060018054905083610292919061072e565b9050600181815481106102a8576102a761078e565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691508173ffffffffffffffffffffffffffffffffffffffff166108fc6102f76101a6565b9081150290604051600060405180830381858888f19350505050158015610322573d6000803e3d6000fd5b50600067ffffffffffffffff81111561033e5761033d6107bd565b5b60405190808252806020026020018201604052801561036c5781602001602082028036833780820191505090505b5060019080519060200190610382929190610421565b50505050565b6001818154811061039857600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600044426001604051602001610403939291906105da565b6040516020818303038152906040528051906020012060001c905090565b82805482825590600052602060002090810192821561049a579160200282015b828111156104995782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610441565b5b5090506104a791906104ab565b5090565b5b808211156104c45760008160009055506001016104ac565b5090565b6000813590506104d781610811565b92915050565b6000602082840312156104f3576104f26107ff565b5b6000610501848285016104c8565b91505092915050565b60006105168383610531565b60208301905092915050565b61052b816106ce565b82525050565b61053a816106ce565b82525050565b610549816106bc565b82525050565b600061055a82610679565b6105648185610691565b935061056f83610664565b8060005b838110156105a757610584826107ec565b61058e888261050a565b975061059983610684565b925050600181019050610573565b5085935050505092915050565b6105bd81610700565b82525050565b6105d46105cf82610700565b610724565b82525050565b60006105e682866105c3565b6020820191506105f682856105c3565b602082019150610606828461054f565b9150819050949350505050565b60006020820190506106286000830184610540565b92915050565b60006020820190506106436000830184610522565b92915050565b600060208201905061065e60008301846105b4565b92915050565b60008190508160005260206000209050919050565b600081549050919050565b6000600182019050919050565b600081905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106c7826106e0565b9050919050565b60006106d9826106e0565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061071d61071883610804565b61069c565b9050919050565b6000819050919050565b600061073982610700565b915061074483610700565b9250826107545761075361075f565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006107f8825461070a565b9050919050565b600080fd5b60008160001c9050919050565b61081a81610700565b811461082557600080fd5b5056fea2646970667358221220b21641555c616fcaed0d2d3a696d1ed5cc51a7d4847a7e93787a6213548bb7f264736f6c63430008070033'

  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(1000000), // Raise the gas limit to a much higher amount
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    data: data
  }

const tx = new Tx(txObject, { chain: 'ropsten' });
  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('err:', err, 'txHash:', txHash)
    // Use this txHash to find the contract on Etherscan!
  })
})



// Read the deployed contract - get the addresss from Etherscan for checking the deploying smart contract    




const abi=[
	{
		"inputs": [],
		"name": "selectWinner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "manager",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "participants",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "random",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const address = '0xac7aabd8b5f9a8a75760e6cc227daa497d6dc5a9'

const contract = new web3.eth.Contract(abi, address)

contract.methods.manager().call((err, name) => {
  console.log('manager:', name)
})