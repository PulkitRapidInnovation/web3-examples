const Web3 = require('web3')
// const rpcURL = 'https://ropsten.infura.io/v3/844f6a66a00049ed92fc80bd433495e4' 
const rpcURL = 'HTTP://127.0.0.1:7545'
const web3 = new Web3(rpcURL)

const address='0x4605dB866b18a401153266D4c13A44c45f999872'
const abi =[
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

const init = async () =>{
	const addresses = await web3.eth.getAccounts();
console.log("🚀 ~ file: 8_events.js ~ line 126 ~ addresses", addresses)
	const contract = await new web3.eth.Contract(abi,address);
    // FIRST WAY--------------------------------------------------------------------- current event 
	// const receipt = await contract.methods.emitEvent('hey').send({
    //     from:addresses[0]
    // });
    //console.log("🚀 ~ file: 8_events.js ~ line 133 ~ receipt ~ receipt", receipt.events)
    
	//END First way --------------------------------------------------------------------------
	





	//Second way -----------------------------------------------------------------------------------
	// await contract.methods.emitEvent('hey').send({
	// 	    from:addresses[0]
	// 	});
    // await contract.methods.emitEvent('hey hey').send({
	// 	    from:addresses[0]
	// 	});
		
	// 	const results = await contract.getPastEvents('MyEvent',{fromBlock:0})
    //     console.log("🚀 ~ file: 8_events.js ~ line 67 ~ init ~ results", results)

	//END Second way -----------------------------------------------------------------------------------




		await contract.methods.emitEvent('hey').send({
		    from:addresses[0]
		});
		await contract.events.MyEvent({}).on('data',event=>console.log(event));

		//await new Promise(resolve => setTimeout(()=>resolve),2000);
		var delayInMilliseconds = 2000; //1 second

setTimeout(function() {
  //your code to be executed after 1 second
}, delayInMilliseconds);
		await contract.methods.emitEvent('hey hey').send({
		    from:addresses[0]
		});
}

init()