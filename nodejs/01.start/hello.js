

const http = require("http");
let count = 0
const server = http.createServer((req, res) => {
    log(count)
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.write("hello\n")
    setTimeout(() => {res.end("Node.js")}, 2000); // 이벤트루프
})

function log(count) {console.log((count += 1))}

server.listen(8000);


// "hello_test.js" : k6를 통해 테스트 100명이 10초동안 http://localhost 8000에 동시에 계속해서 get 요청을 보냄 
// 싱글 스레드 동기식 코드라면 10*10*20 = 2000초가 걸려야 하는데 이벤트루프를 통해 비동기로 처리됨 -> 2초동안 요청 100개를 동시에 처리 가능

