// [13] 함수
// (a) 선언, 표현, 호이스팅
//      - 함수선언문: function키워드 이름 (매개변수), 호이스팅 o
//      - 함수표현식: const 이름 = function키워드(매개변수), 호이스팅 x
//      - 호이스팅: 함수선언문이나 함수표현식이나 호출은 같으나 호이스팅에서 차이
        hello1();
        function hello1(){console.log('Hello');}
        const hello2 = function(){console.log('Hello');};
        hello2();

// (b) 반환, 종료
        // function plus(num){ return num + 1; } // 불편
        // console.log(plus(10), plus()); // plus()에경우 NaN, 잘못된 사용
        function plus(num){
            if(typeof num !== 'number'){
                console.log('숫자를 입력해야함')
                return 0 // 함수의 종료
            }
            return num + 1;
        }
        console.log(plus(10), plus())

// (c) 매개변수패턴
//      - 기본값지정
        function sum (a, b){ return a+b; } // 불편
        console.log(sum(1,2), sum(7)) // sum(7)의 경우 NaN, 잘못된 사용
        function sum (a, b=1){ return a+b; } // 개선
        console.log(sum(1,2), sum(7)) 
//      - 객체구조분해할당
        const user = { name: '홍길동', age: 20, job: '개발자' }
        // function getName(user) { return user.name; }
        // console.log(getName(user))
        function getName({name}) { return name; } // 구조분해할당
        console.log(getName(user))
//      - 복합사용
        function getEmail({email = '이메일이 없습니다.'}) {return email;}
        console.log(getEmail(user))
//      - 배열구조분해할당
        const fruits = ['apple', 'banana', 'cherry'];
        const numbers = [1, 2, 3, 4, 5, 6]
        function getSecondItem([,b,]) { return b; }
        console.log(getSecondItem(fruits), getSecondItem(numbers))
//      - 나머지 매개변수
        function sum(...rest){
            console.log(rest)
            console.log(arguments) // 배열데이터는 아니고 유사배열(객체)임
            return rest.reduce(function(acc, cur){ return acc + cur }, 0) // 0(acc)에 계속 rest배열 요소값 저장
        }
        console.log(sum(1,2,3), sum(1,2,3,4), sum(1,2,3,4,5))

// (d) arrow function
//      - 좋은점: function, retunr 키워드를 안써도됨
        // function sum(){}
        // const sum = function () {}
        // const sum = () => {} // 추천
        function sum1(a, b){return a+b;}
        const sum2 = (a,b) => {return a+b}
        const sum3 = (a,b) => a+b;
        console.log(sum1(1,2), sum2(1,2), sum3(1,2))
//      - 패턴
        const a = () => {}
        const b = x => {} // 매개변수가 한개인경우 괄호 생략가능
        const c = (x,y) => {}
        const d = (x,y,z) => {return x+y+z}
        const e = (x,y,z) => x+y+z; // 함수 본문의 첫줄이 return 키워드면 중괄호와 return키워드를 생략가능
//      - 특이사항      
        const f = () => {return {a:1}} // const f = () => {a:1}은 잘못됬음
        const g = () => ({a:1}) // 데이터표현시 소괄호로 묶기
        const h = () => {return [1,2,3]} 
        const i = () => [1,2,3]

// (e) 즉시실행함수(IIFE)
        const a = 7
        const double = () => {console.log(a * 2)}
        double() // 호출해야만 함수가 실행
//      - 즉시 실행문법 패턴, 화살표함수 사용시, (f)()
        ;(() => {console.log(a * 2)})()
//      - 즉시 실행문법 패턴, 화살표함수를 쓰지않을때
        ;(function (){console.log(a * 2)})() // (f)()
        ;(function (){console.log(a * 2)}()) // ((f))
        ;!function (){console.log(a * 2)}() // !f()
        ;+function (){console.log(a * 2)}() // +f()
//      - 활용: 마지막 소괄호는 매개변수에 값을 전달, 코드의 난독화에 사용
        ;((a,b) => {console.log(a.innerWidth, b.body)})(window,document)

// (f) 콜백
        const a = (callback) => {
            console.log('A')
            callback()
        }
        const b = () => {console.log('B')}
        a(b) // b함수를 데이터로 전달

        const sum = (a, b, c) => {
            setTimeout(()=> {
                c(a+b) 
            }, 1000) // 콜백 
        }
        sum(1,2, (value) => {console.log(value)})
//      - 활용
        const loadImage = (url, cb) => {
            const imgElement = document.createElement('img')
            imgElement.src = url
            imgElement.addEventListener('load', () => { 
                setTimeout(() => {
                    cb(imgElement) // loading 텍스트 보기
                }, 1000);
            })
        }
        const containerElement = document.querySelector('.container')
        loadImage('https://www.computerhope.com/jargon/d/dd.png', (imgElement) => {
            containerElement.innerHTML = ''
            containerElement.append(imgElement)
        })

// (g) 재귀
//      - 재귀함수 사용시 종료 조건을 포함시켜야함
        let i = 0
        const a = () => {
            console.log('A')
            i += 1
            if(i < 4) { a() }
        }
        a()
        const userA = {name: 'a', parent: null}
        const userB = {name: 'b', parent: userA}
        const userC = {name: 'c', parent: userB}
        const userD = {name: 'd', parent: userC}

        const rc = (user) => { 
            if(user.parent) { return rc(user.parent)}
            return user
        }
        console.log(rc(userD))

// (h) 호출 스케줄링
//      - setTimeout()t사용
        const hello = () => {console.log('hello')}
        // const timeout = setTimeout(hello, 2000)
        const timeout = setInterval(hello, 2000)
        const h1Element = document.querySelector('h1')
        h1Element.addEventListener('click', () => {
            console.log('Clear!')
            // clearTimeout(timeout)
            clearInterval(timeout)
        })

// (i) this
//      - 일반 함수의 this는 호출 위치에서 정의
//      - 화살표 함수의 this는 자신이 선언된 함수 범위에서 정의
function user() {
    this.firstName = 'john'
    this.lastName = 'doe'
    return {
        firstName: 'john',
        lastName: 'doe',
        age : 20,
        getFullName : () => { return `${this.firstName} ${this.lastName}` }, // 화살표함수는 추약형이 불가
        getFullName2() {return `${this.firstName} ${this.lastName}`}
    }
}
const user1 = { firstName: 'park', lastName: 'sse', }
const u = user()
console.log(u.getFullName(), u.getFullName2.call(user1)) // u.getFullName()에서 오류

const timer = {
    title: 'TIMER!',
    timeout(){
        console.log(this.title)
        setTimeout(function() {console.log(this.title)}, 1000) // 일반함수의 this는 호출위치에서 정의되므로 undefined
        setTimeout(() => {console.log(this.title)}, 1000) // 화살표함수는 this는 자신이 선언된 함수 범위밖에서 정의 
    }
}

timer.timeout()