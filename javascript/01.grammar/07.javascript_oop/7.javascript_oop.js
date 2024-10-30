// [7] Object Oriented Programming
// (a) OOP 란?
//     - 객체 지향 프로그래밍은 Java 및 C++를 비롯한 많은 프로그래밍 언어의 기본
//     - 객체 지향 프로그래밍 전에는 명력어의 목록을 나열(절차 지향 프로그래밍)했으나 복잡해짐
//     - 하나의 문제, 특정한 목적을 해결을 위한 독립된 단위인 객체로 만들었고 객체들의 모임으로 프로그램을 파악
//
// (a) OOP 특징
//     - 추상화 (Abstraction)
//       불필요한 정보는 숨기고 중요한 정보만을 표현해 프로그램을 간단하게만듬, 자세한 내용을 몰라도 중요 정보를 이용해 객체를 사용
//     - 상속화 (Inheritance)
//       상속은 새로운 클래스가 기존 클래스의 자료와 연산을 이용할 수 있게 하는 기능
//       상속 받는 새로운 클래스를 부, 파생, 하위, 자식 클래스라하고, 상속하는 기존의 클래스를 상위, 부모클래스라함
//       상속을 통해 프로그램의 요구에 맞춰 클래스를 수정, 클래스 간의 종속 관계를 형성해 객체를 조직화함
//     - 캡슐화 (encapsulation)
//       캡슐화는 클래스 안에 관련 메서드, 변수 등을 하나로 묶어줌, 이를 통해 외부의 접근을 막아 보안 강화, 관리 용이 코드를 제공
//     - 다형화 (Polymorphism)
//       같은 메서드라도 각 인스턴스에 따라 다양한 형태를 가질 수 있는것, 객체의 변수나 메서드가 상황에 따라 다른 의미로 해석되는 것
//       오버 라이딩을 통해 자식 클래스의 메서드가 부모 클래스의 메서드와 다르게 동작하거나 변수가 다른 값으로 지정될 수 있음
        class Animal { // 동물 클래스
            constructor(name) { this.name = name; }
            makeSound() {console.log("동물 소리를 내고 있습니다.");}
        }
        class Dog extends Animal { makeSound() {console.log("멍멍! 🐶");}}  // 개 클래스 - Animal 클래스를 상속받음
        class Cat extends Animal { makeSound() {console.log("야옹! 🐱");}}; // 고양이 클래스 - Animal 클래스를 상속받음
        function animalSound(animal) {animal.makeSound();} // 다형성을 활용한 함수
        const animal1 = new Animal("동물"); // 다양한 동물 객체를 생성하여 다형성 함수에 전달
        const dog = new Dog("댕댕이");
        const cat = new Cat("야옹이");
        animalSound(animal1); // 출력: "동물 소리를 내고 있습니다."
        animalSound(dog);     // 출력: "멍멍! 🐶"
        animalSound(cat);     // 출력: "야옹! 🐱"

// (b) OOP 5가지 원칙(S.O.L.I.D)
//     - 단일 책임 원칙 (SRP): 한 클래스는 하나의 책임만 가짐
//     - 개방 폐쇄 원칙 (OCP): 확장에는 열려 있으나, 변경에는 닫혀있어야함
//     - 리스코프 치환 원칙 (LSP): 프로그램의 객체는 프로그램의 정확성을 깨뜨리지 않으면서 하위 타입의 인스턴스로 변경 가능해야함
//     - 인터페이스 분리 원칙 (ISP): 특정 클라이언트를 위한 인터페이스 여러 개가 범용 인터페이스 하나보다 낫음
//     - 의존관계 역전 원칙 (DIP): 추상화에 의존하고, 구체화에 의존하면 안됨

// (d) javascript prototype
//     - prototype은 javascript 객체가 다른 객체로 부터 메서드와 속성을 상속받는 메커니즘(프로토타입 체인)을 말함
//     - 재사용성을 위해 prototype을 사용, 모든 객체는 glboal Object Prototype을 가지고 메서드를 상속 받아 사용함
        let user = { name: 'pjs', age: '24' }
        console.log(user.name);
        console.log(user); // 로그에서 prototype object 눌러보기
        console.log(user.hasOwnProperty('email')); // hasOwnProperty -> glboal Object Prototype
//     - calAge()는 prototype object에 들어가있지 않음
        function Person1(name, email, birthday) {
            this.name = name;
            this.email = email;
            this.birthday = new Date(birthday);
            this.calAge1 = function(){ 
                const diff = Date.now() - this.birthday.getTime();
                const ageDate = new Date(diff);
                return Math.abs(ageDate.getUTCFullYear() - 1970);
            }
        }
        const pjs1 = new Person1('pjs', 'pjs@email.com', '1999-05-05');
        console.log(pjs1);
        console.log(pjs1.calAge1());
//     - calAge를 prototype 에 넣는 첫번째 방법
        function Person2(name, email, birthday) {
            this.name = name;
            this.email = email;
            this.birthday = new Date(birthday);
        }
        Person2.prototype.calAge2 = function() { 
            const diff = Date.now() - this.birthday.getTime();
            const ageDate = new Date(diff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
        const pjs2 = new Person2('pjs2', 'pjs2@email.com', '1999-05-05');
        console.log(pjs2);
        console.log(pjs2.calAge2());

        //     - calAge를 prototype object에 넣는 두번째 방법
        function Person3(name, email, birthday) {
            const person = Object.create(personPrototype); // Object.create() 메서드는 지정된 프로토타입 객체 및 속성을 갖는 새 객체를 만듬
            person.name = name;
            person.email = email;
            person.birthday = new Date(birthday);
            return person;
        }
        const personPrototype = {
            calAge3() {
                const diff = Date.now() - this.birthday.getTime();
                const ageDate = new Date(diff);
                return Math.abs(ageDate.getUTCFullYear() - 1970);
            }
        }
        const pjs3 = new Person3('pjs2', 'pjs2@email.com', '1999-05-05');
        console.log(pjs3);
        console.log(pjs3.calAge3());

// (e) ES6 classes
//     - ES6에서 나온 Classes를 이용해 더 쉽게 OOP 구현가능, 문법이 OOP방식이지만 내부에선 prototype을 사용하며 작동
//     - constructor는 인스턴스의 생성과 동시에 클래스 필드의 생성과 초기화를 실행, 생략가능, new로 자동호출
//     - this는 클래스가 생성할 인스턴스를 가리킴
//     - this.~를 쓰지 않는 독립적인 것을 정의할때 static을 이용 사용시 클래스 이름으로 사용, prototype이아닌 constructor에 있음
//     - 따로 (d)처럼 선언 없이 calAge3()나 introduce() 메서드가 prototype안에 들어가 있음, 유용하고 코드가 깔끔함
        class Person4 {
            constructor(name, email, birthday){ 
                this.name = name;
                this.email = email;
                this.birthday = new Date(birthday);
            }
            introduce() {
                return `Hello, my name is ${this.name}`;
            }
            calAge4() {
                const diff = Date.now() - this.birthday.getTime();
                const ageDate = new Date(diff);
                return Math.abs(ageDate.getUTCFullYear() - 1970);
            }
            static sumNumber(a, b) {
                return a + b;
            }
        }
        const pjs4 = new Person4('pjs4', 'pjs4@email.com', '1999-05-05');
        console.log(pjs4);
        console.log(pjs4.introduce(), pjs4.calAge4(), Person4.sumNumber(1, 2));
//     - 부모 클레스에게 상속받아 자식 클래스를 만들고, 자식 클래스에 부모 클래스의 속성을 불러올때 super()를 사용
        class Person5 extends Person4 {
            constructor(name, email, birthday, phone, address) {
                super(name, email, birthday); // Person4의 속성을 불러옴
                this.phone = phone;
                this.address = address;
            }
            hello() {
                return `Hello, I am Subclass of person4`;
            }
        }
        const pjs5 = new Person5('pjs5', 'pjs5@email.com', '1999-05-05', '010-1234-5678', '서울특별시');
        console.log(pjs5);
        console.log(pjs5.introduce(), pjs5.hello(), pjs5.calAge4(), pjs5.phone, pjs5.address, Person5.sumNumber(1, 2));

// (f) super() 란?
// - constructor는 인스턴스화된 객체에서 다른 메서드를 호출하기 전에 수행해야 하는 사용자 지정 초기화를 제공가능
// - 클래스에 new를 붙여 인스턴스 객체로 생성하면 넘겨받은 인자와 함께 constructor가 먼저 실행되고 this.~에 인자가 할당
// - 자바스크립트에서 super 키워드는 자식 클래스 내에서 부모 클래스의 생성자, 메서드를 호출시에 사용됨
class Phone {
    constructor(vendor) {
        this.vendor = vendor;
    }
    present() {
        return `I have ${this.vendor}`;
    }
}

class Model extends Phone {
    constructor(vendor, brand, model) {
        super(vendor);
        this.brand = brand;
        this.model = model;
    }
    show() {
        return super.present() + ` ${this.brand}, ${this.model}`;
    }
}
const myPhone = new Model('Apple', 'iPhone', 'iPhone 6');
console.log(myPhone);
console.log(myPhone.show());