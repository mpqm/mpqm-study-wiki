const { MongoClient } = require('mongodb'); 

// MongoDB 클러스터 연결 URI
const uri = "mongodb://root:qwer1234@localhost:27017/mydatabase?authSource=admin";

// MongoDB 클라이언트 객체 생성
const client = new MongoClient(uri);

// 콜백 함수를 인자로 받아 MongoDB에 연결하는 함수, 결과를 콜백으로 반환
module.exports = function(callback) {return MongoClient.connect(uri, callback);}