const Web3 = require('web3')
const rpcURL = 'https://ropsten.infura.io/v3/844f6a66a00049ed92fc80bd433495e4' 
// const rpcURL = 'wss://HTTP://127.0.0.1:7545'
const web3 = new Web3(rpcURL)
const abi=[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "value",
				"type": "string"
			}
		],
		"name": "emitEvent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "value",
				"type": "string"
			}
		],
		"name": "MyEvent",
		"type": "event"
	}
]
async function init(){
    const address = '0x350411A2Dfc243e35fCF71a702136b4B2B35D22b'
    // const addresses = web3.eth.getAccounts();
    // console.log("🚀 ~ file: 8_events.js ~ line 46 ~ addresses", addresses)
    const contract = new web3.eth.Contract(abi, address)
    
    const eventOptions = { filter: {}, fromBlock: 1253010, toBlock: 'latest' };
const events = await contract.getPastEvents('MyEvent', eventOptions);

contract.events.MyEvent(async function (error, result) {
    console.log(result,error)
});
    // const receipt = contract.methods.emitEvent('hey').send({
    //     from:'0x80e411e422607d4373bB05dF1606353D255e70d5'
    // });
    // console.log("🚀 ~ file: 8_events.js ~ line 53 ~ receipt ~ receipt", receipt)
    
    // const results = await contract.getPastEvents('MyEvent',{})
    // console.log("🚀 ~ file: 8_events.js ~ line 54 ~ results", results)
    // console.log(receipt.events)
    
    // contract.events.MyEvent({}).on('data',event=>console.log(event))
    // contract.events.MyEvent({
    
    // }, function(error, event){ console.log(event,error); })
    // .on('data', function(event){
    //     console.log(event); // same results as the optional callback above
    // })
}

init()