// [9] javascript Event Loop
// (a) 동기, 비동기
//     - 동기: syncronous, 시간을 맞춤, 이전의 것이 끝나야 다음 것을 할수 있음
//     - 비동기: asyncronous, 시간을 맞추지 않음, 1234의 순서가 있을때, 1번을 하면서 2번을 할수있음
//     - 자바스크립트에선 비동기 코드를 작성하기 위해 window object, global object 등 브라우저 api나 노드 api등 외부의 도움을 받음
console.log('1'); // 동기
setTimeout(() => {console.log('2');}, 3000); // 비동기, setTimeout()은 window object
console.log('3'); // 동기
// (b) 내부에서의 진행
//     - 자바스크립트 엔진, WebAPIs, EventLoop, CallbackQueue
//     - javascirpt code를 실행하기 위해선 javascript engine이 필요하고 engine은 메모리 힙과 호출스택으로 구성되는데,
//       메모리힙은 메모리 할당이 발생하는 곳이며 변수를 정의하면 저장이 되는 저장소의 역할이고,
//       호출스택 즉, 콜스택은 코드가 실행될 때 스택(함수의 실행 문맥)들이 이곳에 쌓이게 된다.
function fb(){
    setTimeout(function() {console.log('B1')}, 1500); // alias st(b1)
}
function fa() {
    console.log('A1...'); // alias a1
    fb();
    console.log('A2'); // alias a2
}
fa();
//     - 콜스택[] 동작을 살펴보자 
//       [fa()] -> [fa(), a1] -> [fa()] -> [fa(), fb()] -> [fa(), fb(), st(b1)]
//       -> [fa(), fb()] -> [fa()] -> [fa(), a2] -> [fa()] -> [fa()] -> [b1]
//     - 5번째 과정에서 st(b1)이 사라졌다 마지막에 b1이 나타남
//       비동기 작업인 setTimeout은 WebAPI가 대신처리해줌, setTimeout의 시간이 지나 완료되면 CallbackQueue로 함수가 들어옴
//       CallbackQueue에는 WebAPI의 콜백 함수들이 대기, 이벤트 루프는 CallStack과 CallbackQueue를 보고있다가
//       CallStack이 비게 되면 먼저 들어온 순서대로 콜백 큐에 있는 함수들을 CallStack에 넣어줌
//     - 재귀호출을 하면 CallStack이 꽉차므로 지양