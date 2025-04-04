using System;
using System.Collections.Generic;

namespace ch7_Inheritance_polymorphism
{
    class Program
    {
        //1. 상속
        class Animal//부모클래스
        {
            public int Age { get; set; }
            public Animal() { this.Age = 0; }
            public void Eat() { Console.WriteLine("냠냠"); }
            public void Sleep() { Console.WriteLine("쿨쿨"); }
        }
        class Dog : Animal//자식클래스
        {
            public int Age { get; set; }
            public String Color { get; set; }
            public Dog() { this.Age = 0; }

            public void Bark() { Console.WriteLine("왈왈"); }
        }
        class Cat : Animal//자식클래스
        {
            public int Age { get; set; }
            public Cat() { this.Age = 0; }

            public void Meow() { Console.WriteLine("냥냥"); }
        }

        //4, 6. 상속의 생성자
        class Parent
        {
            
            public Parent() { Console.WriteLine("부모생성자"); }
            public Parent(string param) { Console.WriteLine("parent(string param)"); }

            public static int counter = 0;//클래스변수는 상속되어도 공유된다.
            public void CountParent()
            {
                Parent.counter++;
            }
            public int variable = 273;//멤버 하이딩
            public void Method() { Console.WriteLine("부모의 메서드 hiding"); }
            public virtual void Method1() { Console.WriteLine("부모의 메서드 virtual"); } //virtual키워드를 사용해 메서드 오버라이딩
        }
        class Child : Parent
        {
            

            public Child() : base()//부모 생성자의 호출을 명시적으로 지정하려면 base() 사용
            {
                Console.WriteLine("자식생성자");
            }

            public Child(string input) : base(input) //매개변수가 있는 메서드를 호출하고싶을때
            {
                Console.WriteLine("Child(string input):base(input)");
            }
            public void CountChild()
            {
                Child.counter++;
            }
            public new string variable = "hiding"; //new키워드를 사용해 변수를 하이딩
            public new void Method() { Console.WriteLine("자식의 메서드 hiding"); }//new키워드를 사용해 메서드를 하이딩
            public override void Method1() { Console.WriteLine("자식의 메서드 override"); }//override키워드를 사용해 자식 메서드 오버라이딩
        }
        static void Main(string[] args)
        {
            //1. 상속
            //C#에서 반복을 줄이기 위해 사용하는 방법
            //상속: 클래스 사이에 부모 자식 관계를 정의하는 작업, 부모 클래스 하나는 자식을 여러개 가질 수 있음
            //클래스의 부모 자식 관계가 형성되면 자식클래스는 부모 클래스의 public 또는 protected멤버에 접근가능
            List<Dog> Dogs = new List<Dog>() { new Dog(), new Dog(), new Dog() };
            List<Cat> Cats = new List<Cat>() { new Cat(), new Cat(), new Cat() };

            foreach(var item in Dogs)
            {
                item.Eat();
                item.Sleep();
                item.Bark();
            }
            foreach (var item in Cats)
            {
                item.Eat();
                item.Sleep();
                item.Meow();
            }
            //base키워드
            //자식 클래스에서 부모 클래스에서 정의한 멤버의 사용
            //이름이 겹치는 등 특수한 이유로 부모의 메서드에 접근 불가할 경우 this 키워드와 같은형태로 base 키워드 사용(this : 자신 나타내는 키워드, base : 부모 나타내는 키워드)


            //2. 접근제한자
            //public: 내부클래스O 외부클래스O 파생클래스O 프로텍트O
            //internal: 내부클래스O 외부클래스O 파생클래스O 프로텍트X
            //protected: 내부클래스O 외부클래스X 파생클래스O 프로텍트X
            //private과 비슷하지만 상속한 클래스(파생 클래스)에서 접근 가능
            //protected internal: 내부클래스O 외부클래스X 파생클래스X 프로텍트X

            //3. 다형성
            //하나의 클래스가 여러 형태로 변환될 수 있는 성질, 자식 클래스가 부모 클래스로 위장
            Animal dog = new Dog();
            Animal cat = new Cat();
            //변수 dog는 외관상으로 자료형 Animal이지만 실제 내부에는 Dog가 들어있음 외관상으로는 Animal 객체이므로 사용할 수 있는 멤버는 Animal 클래스의 멤버뿐임
            List<Animal> Animals = new List<Animal>()
            {
                new Dog(), new Cat(), new Cat(), new Dog(),
                new Dog(), new Cat(), new Cat(), new Dog()
            };
            foreach(var item in Animals)//하나의 반복문만 사용
            {
                item.Eat();
                item.Sleep();
                //위에서 자식클래스에 있는 메서드 사용을 위해서 is 키워드사용
                if(item is Dog) { ((Dog)item).Bark(); }//만약 변수 item이 Dog클래스라면
                if(item is Cat) { ((Cat)item).Meow(); }//만약 변수 item이 Cat클래스라면
                //as 키워드로 자료형 변환
                //var dog = item as Dog;
                //if(dog != null){dog.Bark();}
                //var cat = item as Cat;
                //if(cat != null){cat.Meow();}
            }
            //최상위 클래스 Obcjet 모든 클래스가 얘한테 상속됨

            //4. 상속의 생성자
            //생성자: 인스턴스 초기화할 때 사용
            //자식 인스턴스 생성하면, 부모의 멤버 초기화 위해 부모 생성자도 자동으로 호출
            Child child = new Child();//자식 인스턴스를 생성
            Child child1 = new Child("string");
            Parent parent = new Parent();
            parent.CountParent();
            child.CountChild();
            Console.WriteLine(Parent.counter);
            Console.WriteLine(Child.counter);

            //5.섀도잉
            //특정한 영역에서 이름이 겹쳐 다른 변수 가리는 것
            int number = 20;
            Console.WriteLine(number);

            //6.하이딩
            //부모 클래스와 자식 클래스에 동일 이름으로 멤버 만들 때 발생, 정상적인 상속을 막아버림
            Console.WriteLine(child.variable);
            Console.WriteLine(((Parent)child).variable);//숨겨진 멤버를 찾는방법
            //메서드 하이딩에 경우 변수와는 다르게 충돌이 발생할 때 하이딩(new)할지 오버라이딩(override)할지 결정가능
            
            child.Method();
            ((Parent)child).Method();
            child.Method1();
            ((Parent)child).Method1();//오버라이딩하면 클래스형을 어떻게 변환해도 자식에서 다시 정의한 메서드 호출

            //7. 상속과 오버라이딩 제한
            //sealed 메서드: 클래스 적용(상속 제한), 메서드 적용(오버라이딩 제한)
            //abstract 키워드: 무조건 상속, 또는 메서드 반드시 오버라이딩
            //무조건 abstract를 부모클래스에서 선언했으면 override 키워드를 사용해 오버라이딩해야됨

        }
    }
}
