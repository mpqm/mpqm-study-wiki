// [16] 타입스크립트
// (a) 타입
//     - 타입 오류
        // let hello: string = 123 // 타입오류
        // hello = 123 // 타입 오류
        let hello: string = "123";
        hello = "hello";
        console.log(hello);
//     - String 타입
        let red: string = "red";
        let green: string = "green";
        let str1: string = `color is ${red}`;
        let str2: string = "color is " + green;
        console.log(red, green, str1, str2);
//     - Number 타입
        let num: number = 123;
        let integer: number = 6;
        let float: number = 3.14;
        let infinity: number = Infinity;
        let nan: number = NaN;
        console.log(num, integer, float, infinity, nan);
//     - Boolean 타입
        let isTrue: boolean = true;
        let isFalse: boolean = false;
        console.log(isTrue, isFalse);
//     - Null, Undefined
        // let nullValue: null; // err: null 변수가 할당되기 전에 사용됨, 초기화 필요
        let nullValue: null = null;
        let undefinedValue: undefined;
        console.log(nullValue, undefinedValue);
//     - Array 타입
        let numberArr: number[] = [1, 2, 3];
        let strArr: string[] = ["a", "b", "c"];
        let union: (string | number)[] = ['a',1,'b',2,'c',3];
        console.log(strArr, numberArr, union);
//     - Object 타입
        const obj: object = {};
        const arr: object = [];
        const func: object = function (){}
        const user: { name: string, age: number, isValid:boolean } = { name: 'a', age:10, isValid:true }; 
        // 만약 똑같은 타입의 객체를 중복선언하려면 interface 타입 사용
        interface User {name: string, age: number, isValid:boolean}
        const user2: User = { name: 'b', age:20, isValid:true };
        const user3: User = { name: 'c', age:30, isValid:true };
        console.log(obj, arr, func, user, user2, user3);
//     - Function 타입
        const add = function (x: number, y: number): number { return x + y; };
        const a: number = add(1,2);
        // const hello2: () => void = function() { console.log("hello") }; // 원래
        const hello2 = function():void { console.log("hello") }; // 축약된 형식
        const b: void = hello2();
        console.log(a, b)
//     - Any 타입: 되도록이면 쓰지않기를 권장
        let hello3: any = "hello"
        hello3 = 123;
        hello3 = null;
        hello3 = {}
//     - Unknown 타입
        const a2: any = 123;
        const u: unknown = 123;
        const any: any = a2 // u 할당 가능
        const bool: boolean = a2; // u 할당 불가
        const num2: number = a2; // u 할당 불가
        const arr2: string[] = a2; // u 할당 불가
        const obj2: {x:string, y:number} = a2 // u 할당 불가
        console.log(a2, u, any, bool, num2, arr2, obj)
//     - Tuple
        const tuple: [string, number, boolean] = ["a", 1, true]; // 순서 주의
        const users: [number, string, boolean] [] = [[1, 'a', true], [2, 'b', false], [3, 'c', true]]
//     - Void: void를 선언안하면 undefined가 반환됨 명시적으로 선언필요
        function hello4(msg: string): void { console.log(msg) }
        const hi: void = hello4("hi");
//     - Never: 직접사용할일은 없고, 에러메시지에서 나옴, 타입지정 확인
        // const nev: [never] = []
        // nev.push(3)
//     - Union: 주어진 타입중 할당이 가능
        let union1: string | number
        union1 = 'hello'
        union1 = 123
        // union1 = false // boolean 타입은 타입지정이안되어서 사용 불가
//     - Intersection
        interface User {name: string, age: number}
        interface Validation {isValid: boolean}
        const user4: User & Validation = { name: 'a', age:10, isValid:true };

// (b) 타입 추론, 단언, 가드, 별칭
//     - 타입추론: 초기화된 변수, 기본값이 설정된 매개 변수, 반환값이 있는 함수의 3가지 방법
        let num3 = 12 // 초기화 된 변수
        // 기본값이 지정된 매개변수 b, 반환 값이 확실한 함수 add2
        function add2(a:number, b=2){ return a+b }
//     - 타입 단언: 단언키워드 as, Non-null 단언 연산자 !, 남발하지말고 단언도 안되면 타입가드 사용
        const el = document.querySelector('body') as HTMLBodyElement // 절대 Null이 아님
        el.textContent = 'hello' // 애매함
        const el2 = document.querySelector('body')
        el2!.textContent = 'hello' // 틀린방법
        const el3 = document.querySelector('body')
        if(el3) { el3.textContent = 'hello' } // 타입가드사용

        function getNumber(x:number | null | undefined) { return Number((x as number).toFixed(2))}
        function getNumber2(x:number | null | undefined) { return x!.toFixed(2)} // 틀린방법
        function getNumber3(x:number | null | undefined) { if(x){return x.toFixed(2)}} // 타입가드사용

        function getValue(x: string | number, isNumber:boolean) {
                if(isNumber){ return Number((x as number).toFixed(2))}
                return (x as string).toUpperCase()
        }
        // 할당 단언, non-null 단언 연산자!와는 다르게 사용, 타입을 할당했으니 오류를 안보여줘도됨?
        let num4!: number
        console.log(num4);
        num = 123
//     - 타입가드
        function logText(el: Element){ console.log(el.textContent) }
        const h1El = document.querySelector('h1')
        if(h1El instanceof HTMLHeadingElement){ logText(h1El) } // 타입가드
        
        function add3(val: string | number | boolean ) {
                let res = 'result = '
                if(typeof val ==='number'){ res += val.toFixed(2) }
                if(typeof val === 'string') { res += val.toUpperCase() }
                console.log(res)
        }
        add3(3.141592)
        add3('hello')
        add3(true)

// (c) 인터페이스
//     - 선택적 속성(?), 읽기 전용 속성(readonly)
        interface User { name: string; readonly age: number; isValid?: boolean; }
        const user1: User = { name: '홍길동', age: 25, isValid: true, }
        // user1.age = 30; // age는 읽기 전용이기 때문에 값을 할당 불가
        const user2: User = { name: '임꺽정', age: 20, }
//     - 함수타입: 소괄호를 통해 호출 시그니처를 정의 가능
        interface GetName { (param: string): string; }
        interface User1{ name: string; age: number; getName: GetName }
        const user3: User1 = { 
        name: '홍길동', 
        age: 25, 
        getName(msg: string) {
                console.log(msg)
                return this.name 
        }
        }
        user3.getName('hello');
//     - 인덱싱 가능 타입: 인덱스 식스니처, [key: type]: unkonwn
        interface Fruits { [item:number]: string}
        const fruits: Fruits = ['apple', 'orange', 'banana']
        console.log(fruits, fruits[0], fruits[1], fruits[2])

        interface User { [key:string]:unknown, name: string; age: number; }
        const user: User = { name: 'abc', age: 25, }
        user['isValid'] = true
        user['emails'] = ['email1@example.com', 'email2@example.com']
        console.log(user)

        interface Payload { [key:string]:unknown}
        function logValues(payload: Payload){for (const key in payload) { console.log(`${key}: ${payload[key]}`) }}
        logValues(user)
//     - 인터페이스 상속(확장)
        interface UserA { name: string; age: number; }
        interface UserB extends UserA{ isValid: boolean;}
        // const userA: UserA = { name: 'abc', age: 25, isValid: true} // 오류
        const userB: UserB = { name: 'abc', age: 25, isValid:true} 
        interface MyName {firstname: string; lastname: string}
        // interface MyName {middlename: string; lastname: boolean} // lastname의 타입을 바꾸면 오류
        interface MyName {middlename: string; lastname: string}
        const myName: MyName = {firstname: 'a', middlename: 'b', lastname: 'c'}
//     - 타입 별칭(Alias)과 인터페이스 차이: 취향차이지만 인터페이스방식을 권장(명확한 이유는 없음)
        type TypeA = string
        type TypeB = string | number | boolean
        type User = { name: string, age: number, isValid: boolean } | [string, number, boolean]
        const userA :User = { name: 'abc', age: 25, isValid:true}
        const userB :User = ['abcd', 35, false]
        function someFunc(param: TypeB): TypeA {
                switch(typeof param){
                        case 'string': return param.toUpperCase()
                        case 'number': return param.toFixed(2)
                        default: return 'Boolean'
                }
        }
        type TypeUser = { name: string, age: number, isValid: boolean } // type + 할당연산자 필요
        interface InterfaceUser { name: string, age: number, isValid: boolean }
        const userT:TypeUser ={ name: 'abc', age:65, isValid:true}
        const userI:InterfaceUser ={ name: 'abc', age:65, isValid:true}
        console.log(userT, userI)

// (d) 함수
//     - 명시적 this: 아래 예제에서 this에 타입이 없어도 동작은 잘되나 암시적으로 any타입 설정, 명시적으로 타입 설정
        interface Cat {name: string, age: number}
        const cat : Cat = {name: 'dog', age: 3}
        function hello(this: Cat, msg: string){ console.log(`Hello ${this.name}, ${msg}`) } // this:Cat은 매개변수는 아님 문법요소
        hello.call(cat, 'world')
//     - 오버로딩
        function add1(a:string, b: string){ return a+b }       
        function add2(a:number, b: number){ return a+b }
        add1('hello', 'world')
        // add1('hello', 2) // 오류임
        add2(1,2)
        // add2('hello', 2) // 오류임
        // 타입이 다른경우의 두개의 함수를 선언해야되지만 아래의 오버로딩으로 쉽게 함수를 관리 가능
        function add(a:string, b:string): string // 타입선언
        function add(a:number, b:number): number // 타입선언
        function add(a:string, b:number): string 
        function add(a:any, b:any): any {return a+b}
        console.log(add('hello', 2))

// (e) 클래스
//     - 접근 제어자 public: 자유롭게 접근가능, 클래스바디에서 생략가능
//     - 접근 제어자 protected: 본클래스와 파생된 후손 클래스 내에서 접근 가능
//     - 접근 제어자 private: 내 클래스에서만 접근 가능
        class UserA {
            public first: string = ''; // this를 사용할때 타입과 기본값을 설정가능
            public last: string = '';
            // private last: string = ''; // private시 userB,c 에서 last 속성을 사용못함
            // protected age: number = 0 // 클래스 밖에서는 허용하지 않음
            public age: number = 0;
            constructor(first: string, last:string, age:number){
                this.first = first
                this.last = last
                this.age = age
            }
            getAge() {return `${this.first} ${this.last} is ${this.age}`}
        }
        class UserB extends UserA { getAge() {return `${this.first} ${this.last} is ${this.age}`} }
        class UserC extends UserB { getAge() {return `${this.first} ${this.last} is ${this.age}`} }
        const user = new UserA('avc', 'abc', 1000)
        console.log(user.first, user.last, user.age)
        // public일때 바디에서 생략가능한 축약문
        class UserA1 {
            constructor(
                public first: string = '', 
                public last:string = '', 
                public age:number = 0
            ) {}
            getAge() {return `${this.first} ${this.last} is ${this.age}`}
        }

// (f) 제너릭
//     - 함수
        interface Obj {x: number}
        type Arr = [number, number]
        // 더러운 오버로딩 함수 선언부
        function toArray(a:string, b: string): string[]
        function toArray(a:number, b: number): number[]
        function toArray(a:boolean, b: boolean): boolean[]
        function toArray(a:Obj, b: Obj): Obj[]
        function toArray(a:Arr, b: Arr): Arr[]
        function toArray(a:any, b: any) { return [a,b]}
        console.log(toArray('a', 'b'),toArray(1,2),toArray(true, false), toArray({x:1},{x:2}), toArray([1,2], [3,4]))
        // 제너릭 함수 선언부
        function toArrayG<T>(a:T, b:T) { return [a,b]}
        console.log(toArrayG('a', 'b'),toArrayG(1,2),toArrayG(true, false), toArrayG({x:1},{x:2}), toArrayG([1,2], [3,4]))
//     - 클래스
        class User<P> {
            constructor(public payload:P) {}
            getPayload() {return this.payload}
        }
        interface UserAType { name: string, age: number, isValid: boolean }
        interface UserBType { name: string, age: number, emails: string[] }

        const user1 = new User<UserAType>({name:'a', age:20, isValid:true})
        const user2 = new User<UserBType>({name:'b', age:30, emails:['email@email.com']})
//     - 인터페이스, 제약조건
        interface MyData<T> { name: string, value: T}
        const data1 : MyData<string> = {name: 'a', value:'hello'}
        const data2 : MyData<number> = {name: 'b', value:1234}
        const data3 : MyData<boolean> = {name: 'c', value:true}
        const data4 : MyData<number[]> = {name: 'd', value:[1,2,3,4]}
        console.log(data1, data2, data3, data4)
        // 제약 조건 extends 쓰고자하는 타입의 유니온
        interface MyData2<T extends  string | number> { name: string, value: T}
        const data21 : MyData2<string> = {name: 'a', value:'hello'}
        const data22 : MyData2<number> = {name: 'b', value:1234}
        // const data23 : MyData2<boolean> = {name: 'c', value:true} // 제약조건으로 인해 못씀
        // const data24 : MyData2<number[]> = {name: 'd', value:[1,2,3,4]}
        console.log(data21, data22)

// (g) 패키지의 타입 선언, 타입 im/export
//     - loadsh.d.ts 파일 선언, npm i -D @types/loadash의 수동적인방법
        // declare module 'loadash' {
        //     interface Lodash {
        //         camelCase: (str: string) => string
        //         snakeCase: (str: string) => string
        //     }
        //     const _: Lodash
        //     export default _
        // }
//     - 삼중 슬래시 지시자를 통해 lodash.d.ts의 이름이 main.d.ts로 변경되도 연결가능
        /// <reference path="./main.d.ts"/>
//     - 웬만한건 npm info @types/모듈 검색해서 설치가능 여부 확인후 npm i -D @types/모듈 설치
        import lodash from 'lodash'
        const str = 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
        console.log(lodash.camelCase(str))
        console.log(lodash.snakeCase(str))
//     - ./user.ts파일 참조
        import {User, getFullName} from './user'
        const user:User = { firstName: 'abc', lastName: 'avc', age: 85, isValid: true }
        const fullName = getFullName(user)
        console.log(fullName, user.isValid)

// (h) tsconfig.json 구성 옵션
//     - 컴파일러 옵션 지정
        {
            "compilerOptions": {
                // 컴파일될 ES버전 명시, ES2015 = ES3
                "target": "ES2015",
                // 모듈 시스템 지정, CommonJS, AMD, ESNEXT
                "module": "ESNext",
                // 모듈 해석 방식 지정, Node, Classic, Node방식은 모듈 불러올때 .index이런거 안붙여도됨
                "moduleResolution": "Node",
                // ESM 모듈 방식 호환성 활성화 여부
                "esModuleInterop": true,
                // 모든 파일을 모듈로 컴파일, import 혹은 export 키워드 필수
                "isolatedModules": false,
                // 모듈 해석에 사용할 기준 경로 지정
                "baseUrl": "./",
                // 컴파일러가 참조할 타입 선언(d.ts)의 경로를 지정
                "typeRoots": ["./node_modules/@types"]
                // 컴파일에서 사용할 라이브러리 지정, ESNext, DOM
                "lib": ["ESNext", "DOM"],
                // 더 엄격한 타입 검색 활성화
                "strict": true,
                // 암시적 any 타입 검사 활성화
                "noImplicitAny": false,
                // 암시적 this 타입 검사 활성화
                "noImplicitThis": false,
                // 엄격한 Nullish 타입 검사 활성화
                "strictNullChecks": false,
                // 엄격한 함수의 매개변수 타입 검사 활성화
                "strictFunctionTypes": false,
                // 엄격한 클래스의 속성 초기화 검사 활성화
                "strictPropertyInitialization": false,
                // 엄격한 Bind, Call, Apply 메소드의 인수 검사 활성화
                "strictBindCallApply": false,
            },
            // 컴파일할 파일 경로 목록
            "include": [ "src/**/*.ts" ], 
            // 컴파일에서 제외할 파일 경로 목록
            "exclude": [ "node_modules" ]
        }
