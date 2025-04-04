// [12] 연산자와 구문
// (a) 산술, 할당, 증감 연산자
        console.log(1+2, 1-2, 1*2, 1/2, 1%2, 1<<2, )
//      - 짝수 판별기
        function isEven(num) {return num % 2 === 0;}
        console.log(isEven(10), isEven(3));
//      - 할당연산자, 재할당이 불가능한 const는 x let o
        let a = 3
        a = a +2 
        a += 2
        console.log(a)
//      - 증감 연산자
        console.log(a++, a, ++a, a)
        console.log(a--, a, --a, a)

// (b) 부정, 비교 연산자
        console.log(!true, !false, !0, !!0, !!!0)
        console.log(!null, !undefined, !NaN, !'')
        console.log(!{}, ![], !function(){})
//      - 동등연산자, 부등연산자(형변환), 일치, 불일치
        const a = 1
        const b = 2
        console.log(a == b, a != b)
        console.log(a === b, a !== b)
//      - 큼, 크거나 같음, 작음, 작거나 같음
        console.log(a > b, a >= b, a < b, a <= b )

// (c) 논리 연산자
        const a = true
        const b = false
//      - and 연산자, 가장 먼저 만나는 거짓 데이터가 반환
        if( a && !b) { console.log('모두가 참') }
        console.log(a && 0 && 1) 
//      - or 연산자, 가장 먼저 만나는 참 데이터가 반환
        if( a || b) { console.log('하나 이상이 참') }
        console.log(0 || 1 || a)

// (d) Nullish 병합, 삼항 연산자
//      - or 연산자 사용
        const n = 0 
        const nuum1 = n || 7
        console.log(nuum1)
//      - nullish 병합 연산자 사용, null, undefined외에 값을 반환
        const nuum2 = n ?? 7
        console.log(nuum2)
        console.log(null ?? undefined, null ?? 1 ?? 2)
//      - 삼항 연산자 사용, 조건 ? 참:거짓
        const a = 1 
        if(a<2){ console.log('참') }
        else{ console.log('거짓') }
        console.log(a<2  ? '참' : '거짓')
        
        function alert(msg) { return msg ? msg: '메시지가 존재하지 않음'}
        console.log(alert('안녕'))
        console.log(alert(''))

// (e) 전개 연산자
        const a = [1,2,3] // 불편
        const b = [4,5,6]        
        const c = a.concat(b)
        console.log(c)
        const d = [a,b]; // 전개 연산자로 리팩토링
        console.log(...a, ...b)

        const e = {x:1, y:2} // 불편
        const f = {x:3, z:4}
        const g = Object.assign({}, e, f)
        console.log(g)
        const h = {...e,...f} // 전개 연산자로 리팩토링
        console.log(h)

        function fn (x,y,z) { console.log(x,y,z) }
        const i = [1,2,3]
        fn(a[0], a[1], a[2]) // 불편
        fn(...i) // 전개 연산자로 리팩토링

// (f) 구조 분해 할당
        const arr = [1,2,3]
        // const a = arr[0] // 불편
        // const b = arr[1]
        // const c = arr[2]
//      - 배열구조분해할당 리팩토링, 대괄호 소괄호가 첫문장이면 명령을 끝내는; 사용
        // ;[a,b,c] = arr
        // console.log(a, b, c)
//      - 변수를 비워놓을수도있음
        // ; [,,c] = arr
        // console.log(c)
//      - 전개 연산자 활용   
        // const [a, rest] = arr
        // console.log(a, rest) // rest에 3이 없음
        // const [a, ...rest] = arr
        // console.log(a, rest)
//      - 객체구조분해할당
        const obj = {a: 1, b: 2, c: 3}
        // const a = obj.a // 불편
        // const b = obj.b
        // const c = obj.c
        // console.log(a,b,c)
        const {a, b} = obj
        console.log(a,b)
//      - 배열과 다르게 콤마로 구분안해도됨, =속성 기본값 정의가능 기존값이 있으면 기존값으로, :속성이름 변경가능
        const {d = 10, c: hello, y:yyy=20} = obj
        console.log(d, hello, yyy)
//      - 전개 연산자 활용
        const {c, ...rest} = obj
        console.log(c, rest)

// (g) 선택적 체이닝
        const userA = {
            name: 'John',
            age: 21, 
            addres:{ city: 'Seoul', state: 'South Korea'}
        }
        const userB = { name: 'Jane', age: 22, }
//      - 선택적 체이닝 사용 함수, 예외처리
        function getCity(user) { return user.addres?.city || '주소없음'}
        console.log(getCity(userA))
        console.log(getCity(userB)) // 원래는 오류지만 예외처리메시지가 뜸

// (h) if, switch
//      - if 조건문, 비교식을 사용
        function isPositive(num) {
            if(num > 0) { return '양수' }
            else if (num < 0) { return '음수'}
            else { return '0'}
        }
        console.log(isPositive(1), isPositive(0), isPositive(-1));
//      - switch 조건문, case에선 단순히 값을 비교함, 값이 정확히 떨어질때 유용
        function price(car) {
            switch (car) {
                case 'toyota': return '100'
                case 'ford': return '200'
                default: return '0'
            }
        }
        console.log(price('toyota'), price("ford"), price('kia'))

// (i) for
//      - for 반복문: 초기화; 조건; 증감
        for (let i = 9; i > -1; i-= 1) { 
            // if( i === 4) {break;}
            if ( i % 2 === 0){ continue; }
            console.log(i)
        }
//      - for of 반복문
        const arr = ['a', 'b', 'c', 'd', 'e', 'f']
        // for (let i = 0; i < arr.length; i++) { console.log(arr[i]); } // 불편
        for (const item of arr) {console.log(item); } // 개선
        const users = [{name: 'John', age: 28}, {name: 'Nicolas', age: 29}, {name: 'leans', age: 30}]
        // for(let i = 0; i < users.length; i++) { console.log(users[i].name, users[i].age)} // 불편
        for (const user of users) { console.log(user.name, user.age)} // 개선
//      - for in 반복문: 객체데이터에 대한 반복, 순서를 절대 보장하지 않음, 객체 데이터가 가진 속성만큼 반복
        const user = {
            name: 'John',
            age: 28,
            isKorean: true,
            email: 'john@gmail.com',
        }
        for(const key in user) { console.log(key, user[key]) }

// (j) while, do while 반복문
//      - while: 언제 조건이 거짓이 되는지 넣어야됨
        let n = 0
        while (n < 10) { console.log(n++)}
//      - do while:  do {} while(조건), 선택은 취향
        let m = 0
        do {
            console.log(m)
            m ++
        }while(m < 10)