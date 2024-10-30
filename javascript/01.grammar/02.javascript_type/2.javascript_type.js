// [2] javascript type
// (*) CallStack, Heap
//     - javascript는 원시 타입에 대한 값을 저장하기 위해 Call Stack 메모리 공간을 사용하나 참조 타입의 경우 Heap이라는 별도의 메모리 공간을 사용
//       이 경우 Call Stack은 개체 및 배열 값이 아닌 Heap 메모리 참조 ID를 값으로 저장
//     - CallStack [Address | Value], Heap [Address | Value]
// (a) 원시타입
//     - 불변성을 가짐, 고정된 크기로 Call Stack 메모리에 저장, 실제 데이터가 변수에 할당
//     - boolean(true | false), string(문자열), nubmer(숫자)
//     - symbol: 변경 불가능한 유일한 값을 생성할 때 사용, 값 자체의 확인이 불가해 외부로 노출 X
//     - null: 하나의 값이며, 값이 없음을 나타내기 위해 사용, object임
//     - undefined: 하나의 값이며, 초기화되지 않은 변수의 기본값
        const c1_2a = 'a'
        const c2_2a = 1;
        const c3_2a = true;
        const c4_2a = null;
        let l1_2a;
        // const c5_2a = Symbol();
        console.log(typeof c1_2a, c1_2a, typeof c2_2a, c2_2a, typeof c3_2a, c3_2a, typeof c4_2a, c4_2a, typeof l1_2a, l1_2a)

// (b) 참조타입
//     - function(함수), array(배열), classes(클래스), object(객체)
//     - 데이터 크기가 가변적이며 Call Stack 메모리에 저장되나, 데이터 값이 heap에 저장되고 CallStack의 value에 heap 메모리의 주소값이 할당
        const a1_2b = ['a', 'b'];
        console.log( typeof a1_2b, Array.isArray(a1_2b), a1_2b ); // Array.isArray(), 배열인지 확인하고싶을때 수행
        const o1_2b = { a: 1, b: 1};
        console.log( typeof o1_2b, o1_2b); 

//  (c) javascript는 동적 타입
//     - javascript는 loosely type의 동적 언어, 변수는 모든 타입의 값으로 할당, 재할당 가능, 타입명시안해도됨
//     - typescript는 type을 줘서 javascript를 정적 언어로서 사용
        let l1_2c = 1;
        console.log(typeof l1_2c);
        l1_2c = 'a';
        console.log(typeof l1_2c);
        l1_2c = true;
        console.log(typeof l1_2c);