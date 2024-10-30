// [3] Loops
// (a) Loop의 종류
//     - for: 코드 블록을 여러 번 반복, for(루프가 시작되기 전 실행; 루프실행을 위한 조건: 루프 실행된 후마다 실행)
//     - for/in: 객체의 속성을 따라 반복
//     - while: 지정된 조건이 true인 동안 코드 블록을 반복
//     - do/while: while의 변형으로 조건이 true인지 검사전에 코드 블록을 한번 실행하고 조건이 true인 동안 루프 반복
for (let i= 0; i < 5 ; i ++ ){
    if( i===3 ) {
        console.log(`i is ${i}`);
        continue;
    }
    if( i===4 ) {
        console.log(`i is ${i} & stop loop`);
        break;
    }
    console.log('i ' + i);
}

const o1_3a = { a: '1', b: '2', c: '3'}
for (let i in o1_3a) {
    console.log(`${i}: ${o1_3a[i]}`);
}

let l1_3a = 0;
while (l1_3a < 5) {
    console.log('l1_3a ' + l1_3a);
    l1_3a++;
}

let l2_3a = 0; // 100 -> do실행후 종료
do {
    console.log('l2_3a ' + l2_3a);
    l2_3a++;
}while(l2_3a < 5)

// (b) 배열을 루프로 컨트롤
const a1_3b = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < a1_3b.length; i++) {
    console.log(`${i} : ${a1_3b[i]}`);
}

a1_3b.forEach(function(a1_3b, index, array) { // await, break, continue X, for보다 느림
    console.log(`${index} : ${a1_3b}`);
})

a1_3b.map(function (a1_3b, index) { // useful
    console.log(`${index} : ${a1_3b}`);
})