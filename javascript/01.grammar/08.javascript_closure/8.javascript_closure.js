// [8] Closure
// (a) Closure란?
//     - 다른 함수 내부에 정의된 함수가 있는 경우 외부 함수가 실행을 완료후 해당 변수가 외부에서 접근할수 없는경우
//       Closure를 통해 해당 내부 함수는 외부 함수의 변수 및 범위에 접근 가능
//     - outerF('outside')는 변수 newF에 할당 즉시 호출
//       호출후 outerF는 변수 newF를 outerF(outerV)대신 innerF(innerV)를 반환
//       그런 다음 변수를 newF('inside')로 호출해 innerF('inside')를 호출
//       Closure는 innerF가 원래 outerF('outside')로 설정한 outerV 매개변수를 기억하고 접근 가능하다는것
//       따라서 newF('inside')로 호출되었어도 outside와 inside를 반환할수 있음
//     - 간단하게 말하자면 내부함수가 외부함수의 변수 및 범위에 접근할수 있는 기능
        function outerF(outerV) {
            return function innerF(innerV) {
                console.log('outerV: ' + outerV, 'innerV:'+ innerV);
            }
        }
        const newF = outerF('outside');
        console.log(newF)
        newF('inside');
//     - easy example
        let a = 1;
        function fa() {
            let b = 2;
            function fb() {
                let c = 3;
                console.log(a, b, c);
            }
            console.log(a, b);
            fb();
        }
        fa();
