// [11] JS Data
// (a) string
//     - "", ''은 선택해서 사용,리터럴 방식
        const string = "hello"
        const string2 = 'hello'
//     - ``은 문자열안에 데이터를 채워넣음, 탬플릿 리터럴 방식
    const string3 = `hello ${string2} ?!`
    console.log(string3)

// (b) number
        const number = .14
        const pi = 3.14
//     - number+undefined는 NaN(not a number, 숫잔데 숫자가아님)
        console.log(number, -number, number+1)
        console.log( pi, pi+1, pi+undefined)
        console.log(typeof(pi), typeof(pi+undefined))
//     - 결과가 3.2800000000000002 끝의 2는 왜 발생하는가? 부동소수점오류
        console.log(number+pi)
//     - toFixed(): 정해진 소수점자리로 출력, 3.3, string형식으로 반환
        console.log((number+pi).toFixed(1))
        console.log(typeof((number+pi).toFixed(1)))
//     - Number로 형변환
        console.log(typeof Number((number+pi).toFixed(1)), Number(number+pi).toFixed(1));

// (c) boolean
//     - 논리 데이터로 true는 긍정 false는 부정, 분기처리로 자주 사용
        const a = true
        const b = false
        if(a){ console.log('hello') }
//     - 참 거짓: 대부분의 데이터는 참임, 거짓은 false, 0, -0, 0n, null, undefined, NaN, ''가 잇음
        if (123){ console.log('참') }
        if (0 && false && null && undefined && NaN && -0 && 0n){console.log('참')}

// (d) null
//     - let이여서 재할당가능함, null을 사용하면 아직 존재하지 않는 값을 의미, 명시적으로 값을 정의
        let age = null
        console.log(age)
        setTimeout(function () { age = 85, console.log(age)}, 1)

// (e) undefined
//     - 변수에 값이 할당되지 않았을때 암시적으로 값을 존재하게함
        let age2
        console.log(age2)
        setTimeout(function () { age2 = 85, console.log(age2)}, 1)

// (d) 객체
//     - 값을 정의하지 않은 속성을 출력했을때, undefined가 뜸
        const user = { name: 'pjs', age: 85 }
        console.log(user, user.name, user.age, user.email)

// (e) Array
//     - const fruits= new Array('apple', 'banana', 'cherry')
//     - 배열 리터럴 방식
        const fruits = ['apple', 'banana', 'cherry']
//     - 배열 길이확인, 아이템(요소)에 대한 인덱싱, 대괄호 표기법
        console.log(fruits, fruits.length, fruits[0], fruits[fruits.length - 1])

// (f) Object
//     - Object키워드를 통해 객체를 생성, key-value
        const user1 = new Object({name: 'pjs', age: 85})
        console.log(user1)
//     - 함수에서 객체를 만드는방법
        function User2() {
            this.name = 'pjs'
            this.age = 85
        }
        const user2 = new User2()
        console.log(user2)
//     - 중괄호 리터럴 방식, 각각의 키는 고유하고 순서가 따로 존재하지않음
        const user3 = {
            name: 'pjs',
            age: 85,
            age: 22
        }
        const key = 'age'
//     - 점괄호 표기법, 대괄호 표기법, 키속성으로 값불러오기
        console.log(user3, user3.name, user3['name'], user3[key])
//     - 객체 안에 객체
        const parent = {
            name: 'abc',
            age: 50
        }
        const child = {
            name: 'pjs',
            age: 22,
            parent: parent,
        }
        console.log(child, child.parent, child.parent.name, child['parent']['name'])
//     - 배열 안에 객체 넣기
        const users = [parent, child]
        console.log(users, users[0], users[0].name, users[0]['name']);

// (g) Function
//     - 함수는 하나의 자바스크립트 데이터
        function getNumber(){ return 123 }
        console.log(typeof(getNumber), typeof(getNumber()), getNumber, getNumber())
        const getNumber1 = function(){ return 123 } // 익명함수
        console.log(typeof(getNumber1), typeof(getNumber1()), getNumber1, getNumber1())
//     - 매개변수 사용법, 매개변수는 함수를 받을수있음,
        const a = function(){ console.log('A') }
        const b = function(c){ 
            console.log(c)
            c()
        }
        b(a)

// (h) 형 변환, 데이터 타입확인
        const a =  1 // Nubmer
        const b = '1' // Stirng
//     - 일치 연산자, 동등 연산자(형변환이 일어남)
        console.log(a === b, a == b) 
        const c = 0 // Number
        const d = false // Boolean
        console.log(c === d, c == d)
//     - 데이터 타입 확인
        console.log(typeof 'hello' === 'string')
        console.log(typeof 123 === 'number')
        console.log(typeof true === 'boolean')
        console.log(typeof undefined === 'undefined')
        console.log(typeof function(){} === 'function')
//     - null의 타입 확인하는법
        // console.log(typeof null === 'object')
        // console.log(null.constructor === Object)
        console.log(Object.prototype.toString.call(null).slice(8, -1) === 'Null')
//     - 배열의 타입 확인하는법
        // console.log(typeof [] === 'object')
        console.log([].constructor === Array)
//     - 객체의 타입 확인하는법
        // console.log(typeof {} === 'object')
        console.log({}.constructor === Object)
//     - 타입체크함수, 기억하기
        function checkType(obj) {return Object.prototype.toString.call(obj).slice(8, -1)}
        console.log(checkType(null), checkType([]), checkType({}))
        console.log(checkType('string'),checkType(123), checkType(true), checkType(undefined), checkType(function(){}))
