// [1] var, let, const
// (a) var
//     - 중복 선언 O 재할당 O, 마지막에 할당된 값이 변수에 저장, 왠만하면 사용하지말자
        var v1_1a = 1
        console.log(v1_1a);
        var v1_1a = 2
        console.log(v1_1a);
        v1_1a = 3
        console.log(v1_1a);
//     - 변수의 참조 범위: function level scope
        function f1_1a() { // function level
            if (true) { // block level
                var v2_1a = 1;
                console.log(v2_1a);
            }
            console.log(v2_1a);
        }
        // console.log(v2_1a); -> err, undefined
        f1_1a();

// (b) let, const
//     - let: 중복 선언 X, 재할당은 O
        let l1_1b = 1;
        console.log(l1_1b);
        // let l1_1b = 2; -> err, 중복선언 X
        l1_1b = 2;
        console.log(l1_1b);
//     - const: 중복선언 X, 재할당 X
        const c1_1b = 1;
        console.log(c1_1b);
        // const c1_1b = 2; -> err, 중복선언 X
        // console.log(c1_1b = 2); -> err, 재할당 X
//     - 변수의 참조 범위: 둘다 block level scope
        function f1_1b() {  // func level
            if(true){ // block level
                let l2_1b = 1;
                const c2_1b = 1;
                console.log(l2_1b);
                console.log(c2_1b);
            }
            // console.log(l2_1b); -> err, undefined
            // console.log(c2_1b); -> err, undefined
        }
        f1_1b();

// (c) hoisting
//     - javascript 인터프리터는 변수 생성의 선언 단계 및 할당 단계를 분할
//     - 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미
//     - var: 실제 할당값이 아닌 undefined를 할당
        console.log(v1_1c); // _ -> undefined
        var v1_1c = 1; 
//     - let, const: 선언은 되나 초기에 초기화 되지 않음 할당전 콘솔로 출력하면 TDZ로 인해 비활성화
        // console.log(l1_1c, c1_1c);
        // let l1_1c = 1; // err -> 초기화 전 접근 불가
        // const c1_1c = 1; // err -> 초기화 전 접근 불가
//     - function: 호이스팅 잘됨
        f1_1c();
        function f1_1c() {
            console.log('hosting test');
        }