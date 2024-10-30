const { TopologyDescription } = require('mongodb');

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb uri";

const client = new MongoClient(uri, {useNewUrlParser: true})

async function main(){
    try{
        await client.connect();
        console.log("MongoDB 접속 성공");
        const collection = client.db('test').collection('person');
        await collection.insertOne({name: 'pjs', age:30}),
        console.log('문서추가 완료');

        const documents = await collection.find({name: 'pjs'}).toArray();
        console.log('찾은문서 : ', documents);

        await collection.updateOne({name: 'pjs'},{$set:{age:31}});
        console.log('문서업데이트');
        
        const updatedDocuments = await collection.find({name:'pjs'}).toArray();
        console.log('갱신된문서:', updatedDocuments);

        await client.close();
    }catch(err){
        console.error(err)
    }
}
main();