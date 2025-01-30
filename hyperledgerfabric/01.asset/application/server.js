const express = require('express');
const app = express();
var bodyParser = require('body-parser');

const { FileSystemWallet, Gateway } = require('fabric-network');
const fs = require('fs');
const path = require('path');
const ccpPath = path.resolve(__dirname ,'connection.json');
const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
const ccp = JSON.parse(ccpJSON);

const PORT = 8080;
const HOST = '0.0.0.0';

app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/views/index.html')
})
app.get('/create', (req, res)=>{
    res.sendFile(__dirname+'/views/create.html')
})
app.get('/query', (req, res)=>{
    res.sendFile(__dirname+'/views/query.html')
})
app.get('/transfer', (req, res)=>{
    res.sendFile(__dirname+'/views/transfer.html')
})
app.get('/delete', (req, res)=>{
    res.sendFile(__dirname+'/views/delete.html')
})

app.post('/assetcreate', async (req, res)=>{
    const key = req.body.key;
    const value = req.body.value;

    const walletPath = path.join(process.cwd(), 'wallet');
    const wallet = new FileSystemWallet(walletPath);
    console.log(`Wallet path: ${walletPath}`);
    const userExists = await wallet.exists('user1');

    if (!userExists) {
        console.log('An identity for the user "user1" does not exist in the wallet');
        console.log('Run the registerUser.js application before retrying');
        return;
    }

    const gateway = new Gateway();
    await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });
    const network = await gateway.getNetwork('mychannel');
    const contract = network.getContract('simpleasset')

    const result = await contract.submitTransaction('set', key, value)

    res.status(200).json(`Transaction has been submitted: ${result}`)
})

app.post('/assettransfer', async (req, res)=>{
    const key = req.body.key;
    const dkey = req.body.dkey;
    const value = req.body.value;
    
    const walletPath = path.join(process.cwd(), 'wallet');
    const wallet = new FileSystemWallet(walletPath);
    console.log(`Wallet path: ${walletPath}`);
    const userExists = await wallet.exists('user1');
    if (!userExists) {
        console.log('An identity for the user "user1" does not exist in the wallet');
        console.log('Run the registerUser.js application before retrying');
        return;
    }

    const gateway = new Gateway();
    await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

    const network = await gateway.getNetwork('mychannel');

    const contract = network.getContract('simpleasset')

    const result = await contract.submitTransaction('transfer', dkey, key, value)

    res.status(200).json(`Transaction has been submitted: ${result}`)
})

app.post('/assetdelete', async (req, res)=>{
    const key = req.body.key;

    const walletPath = path.join(process.cwd(), 'wallet');
    const wallet = new FileSystemWallet(walletPath);
    console.log(`Wallet path: ${walletPath}`);
    const userExists = await wallet.exists('user1');
    if (!userExists) {
        console.log('An identity for the user "user1" does not exist in the wallet');
        console.log('Run the registerUser.js application before retrying');
        return;
    }

    const gateway = new Gateway();
    await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

    const network = await gateway.getNetwork('mychannel');

    const contract = network.getContract('simpleasset')

    const result = await contract.submitTransaction('delete', key)

    res.status(200).json(`Transaction has been submitted: ${result}`)
})

app.get('/assetquiry', async (req, res)=>{

    const key = req.query.key;

    const walletPath = path.join(process.cwd(), 'wallet');
    const wallet = new FileSystemWallet(walletPath);
    console.log(`Wallet path: ${walletPath}`);
    const userExists = await wallet.exists('user1');
    if (!userExists) {
        console.log('An identity for the user "user1" does not exist in the wallet');
        console.log('Run the registerUser.js application before retrying');
        return;
    }

    const gateway = new Gateway();
    await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });
    const network = await gateway.getNetwork('mychannel');
    const contract = network.getContract('simpleasset')
    const result = await contract.evaluateTransaction('get', key)

    res.status(200).json(result.toString());
})


app.listen(PORT,HOST);
console.log(`Running on http://${HOST}:${PORT}`)