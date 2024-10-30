// [10] asynchronous
// (a) 비동기
//     - 자바스크립트는 싱글스레드여서 한번에 하나의 일만 가능한데 하나의 일이 오래걸리면 다른 작업들은 하나의 일이 끝날때 까지 기다려야 됨
//     - 이러한 문제점을 해결하기 위해 비동기로 일을 수행하게 됨 병렬 작업이 가능함
//     - 만약 비동기 요청이 여러개 있을시 하나의 요청이 다른 요청의 결과에 의존한다면?
//     - 해결방법: Callback함수, Promise(es6), async/await (es7)

// (b) Callback함수
//     - 콜백 함수는 특정 함수에 매개변수로 전달된 함수를 의미, 그리고 콜백함수는 함수를 전달받은 함수 안에서 호출
//     - 소스코드의 가독성이 떨어지고, 모든 콜백에서 에러 핸들링처리를 해야됨
function stepOne(callback) {
    setTimeout(function() {
        console.log("Step 1 완료");
        callback();
    }, 1000);
}
function stepTwo(callback) {
    setTimeout(function() {
        console.log("Step 2 완료");
        callback();
    }, 1500);
}
function stepThree(callback) {
    setTimeout(function() {
        console.log("Step 3 완료");
        callback();
    }, 1200);
}
function startProcess() {
    console.log("프로세스 시작");   
    stepOne(function() {
        stepTwo(function() {
            stepThree(function() {
                console.log("모든 단계 완료");
            });
        });
    });
}
// startProcess(); // (b)를 테스트하고싶을때 시작

// (c) Promise(es6)
//    - Promise 객체는 new 키워드와 생성자를 사용해 만듬, 생성자는 매개변수로 실행함수를 받음
//      이 실행 함수는 매개 변수로 두가지 함수를 받는데,
//      첫번째 함수(resolve)는 비동기 작업을 성공적으로 완료시 값을 반환할때 호출
//      두번째 함수는(reject)는 작업이 실패해 오류를 반환할 때 호출, 오류 객체를 받음
//    - Promise는 세가지 상태를 가짐
//      대기(pending): 비동기 처리 로직이 아직 완료되지 않은 상태
//      이행(fulfilled): 비동기 처리가 완료되어 Promise 결과 값을 반환해준 상태
//      거부(rejected): 비동기 처리가 실패하거나 오류가 발생한 상태
//    - 함수가 Promise를 지원하지 않는경우 new Promise를 사용
        function fetchData() {
            return new Promise((resolve, reject) => { // 비동기 요청
                const success = false;
                if(success) {resolve('성공')}
                else {reject(new Error('실패'));}
            })
        }
        fetchData()
        .then( (response) => console.log(response)) // -> resolve
        .catch(error => console.log(error)) // -> reject
//    - 내장 함수로 Promise를 지원하기에 new Promise를 사용하지 않아도됨, 비동기 요청으로 json데이터를 가져옴
        fetch("http://jsonplaceholder.typicode.com/todos/1")
        .then(response1 => response1.json())
        .then(json1 => console.log(json1))
        .then(() => fetch('http://jsonplaceholder.typicode.com/todos/2')) // 일부러 오류를 생성해보기
        .then(response2 => response2.json())
        .then(json2 => console.log(json2))
        .catch(error => console.log(error))
        .finally(() => console.log('작업끝'));
//    - Promise.all() 메서드는 여러 개의 프로미스를 동시에 실행, 모든 프로미스가 이행된 경우, 이행된 결과들을 배열로 묶어 반환
//      하나라도 거부된 경우, 첫 번째로 거부된 프로미스의 이유를 사용해 자신도 거부하는 프로미스를 반환
        const p1 = Promise.resolve(3);
        const p2 = 42;
        const p3 = new Promise((resolve, reject) => {setTimeout(resolve, 100, 'foo');});
        Promise.all([p1, p2, p3]).then((values) => {console.log(values);});
//    - Promise.race() 메서드는 Promise 개체를 반환, iterable 안에 있는 프로미스 중에 가장 먼저 완료된 것의 결과값으로 그대로 이행하거나 거부
        const p4 = new Promise((resolve, reject) => {setTimeout(resolve, 500, 'one');});
        const p5 = new Promise((resolve, reject) => {setTimeout(resolve, 100, 'two');});  
        Promise.race([p4, p5]).then((value) => {console.log(value);}); // 둘다 resolve를 반환하지만 p2가 더 빨라, p2출력
//   - 참조: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise


// (d) async/await (es7)
//     - Promise then메서드를 체인형식으로 호출하는 것보다 가독성이 좋음, 비동기코드를 동기코드처럼 보이게 함
//     - await은 async 내부 함수에서만 사용 가능, 동기식 코드에서 쓰는 try catch문을 async/await 구조에서 사용 가능
//     - (c)의 예제를 async-await으로 변경해봄
        async function makeReq() {
            try{
                const response1 = await fetch("http://jsonplaceholder.typicode.com/todos/1");
                const json = await response1.json();
                console.log(json);
                const response2 = await fetch("http://jsonplaceholder.typicode.com/todos/2");
                const json2 = await response2.json();
                console.log(json2);
            } catch (error) {
                console.log(error);
            } finally {
                console.log('작업끝');
            };
        }
        makeReq();