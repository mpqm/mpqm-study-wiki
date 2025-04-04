using System;

namespace ch6_method
{
    class Program
    {
        //1. 메서드-메서드 기본형태
        class Test
        {
            public int Multi(int x, int y)
            {
                return x *y;
            }
            public void Print()
            {
                Console.WriteLine("Print()메서드가 호출되었습니다.");
            }
            public int Sum(int min, int max)
            {
                int output = 0;
                for(int i = min; i <= max; i++)
                {
                    output += i;
                }
                return output;
            }
            public int Multiply(int min, int max)
            {
                int output = 1;
                for (int i = min; i <= max; i++)
                {
                    output *= i;
                }
                return output;
            }
        }
        //2. 클래스 메서드
        class MyMath
        {
            public static int Abs(int input)
            {
                if (input < 0) return -input;
                else return input;

            }
        }
        // public int instanceVariable = 10; -> 인스턴스변수
        public static int instanceVariable = 10; //클래스 변수

        //3. 메서드 오버로딩
        class MyMath1
        {
            public static int Abs(int input)
            {
                if(input < 0) { return -input; }
                else { return input; }
            }
            public static double Abs(double input)
            {
                if(input< 0) { return -input; }
                else { return input; }
            }
            public static long Abs(long input)
            {
                if (input < 0) { return -input; }
                else { return input; }
            }

        }
        //5. 생성자
        class Product
        {
            public static int counter = 0;
            public int id;
            public string name;
            public int price;
            public Product(string name, int price)
            {
                Product.counter = counter + 1;
                this.id = counter;
                this.name = name;
                this.price = price;
            }
            //8. 소멸자
            ~Product()
            {
                Console.WriteLine(this.name + "의 소멸자 호출");
            }
        }
        //9. 상수
        class MyMath2
        {
            public const double PI = 3.141592;
        }
        //10. 캡슐화
        class Box
        {
            //변수
            private int width; //접근제한자로 값변경 못하게 만듬, 한번 생성한 width는 변경못하고 어떤값이있는지 확인도 못함
            private int height;

            //생성자
            public Box(int width, int height)
            {
                if (width > 0 || height > 0)
                {
                    this.width = width;
                    this.height = height;
                }
                else Console.WriteLine("너비와 높이는 자연수로 초기화해주세요");
            }
            //인스턴스 메서드
            public int Area(){return this.width * this.height;}

            //11. 겟터와 셋터
            //변수를 바로 수정할 수는 없지만 변경 메서드를 만들고, 메서드를 호출해 변경
            //겟터
            public int GetWidth() { return width; }
            public int GetHeight() { return height; }
            //셋터
            public void SetWidth(int width)
            {
                if (width > 0) { this.width = width; }
                else { Console.WriteLine("너비는 자연수를 입력해주세요"); }
            }
            public void SetHeight(int height)
            {
                if (height > 0) { this.height = height; }
                else { Console.WriteLine("높이는 자연수를 입력해주세요"); }
            }
        }
        //12. 일반적인 속성 생성 방법
        class Box1
        {
            private int width;
            public int Width
            {
                get { return width; }
                set
                {
                    if (value > 0) { width = value; }
                    else { Console.WriteLine("너비는 자연수를 입력해주세요"); }
                }
            }
            private int height;
            public int Height
            {
                get { return height; }
                set
                {
                    if (value > 0) { height = value; }
                    else { Console.WriteLine("높이는 자연수를 입력해주세요"); }
                }
            }
            public Box1(int width, int height)
            {
                Width = width;
                Height = height;
            }
            public int Area() { return this.width * this.height; }
        }
        static void Main(string[] args)
        {
            //1. 메서드
            //메서드 기본형태: 접근제한자 반환형 메서드 이름 (매개변수)
            Test test = new Test();
            //메서드는 매개변수를 여러개 가질 수 있음
            Console.WriteLine(test.Multi(52, 273));
            //아무것도 반환하지 않는 메서드
            test.Print();
            //매개 변수의 반환
            Console.WriteLine(test.Sum(1, 100));
            Console.WriteLine(test.Multiply(1, 10));


            //2. 클래스 메서드
            //Main()메서드는 클래스 메서드임
            //클래스 메서드 생성 방법: 접근제한자 static 반환형 메서드 이름 (메개변수)
            //클래스 메서드에서는 메모리에 올라가지 않은 인스턴스 변수, 인스턴스 메서드 사용못함
            //static이라는 키워드를 붙인 변수, 메ㅐ서드는 프로그램을 실행하는 순간에 메모리에 올라가게 됨
            //따라서 인스턴스화에서 메모리에 올리는 별도의 작업없이도 사용가능
            //하지만 클래스 메서드에서는 아직 메모리에 올라가지 않은 인스턴스 변수와 인스턴스 메서드를 사용할 수 없음
            Console.WriteLine(MyMath.Abs(-52));//인스턴스 생성을 안해도 사용가능
            //Console.WriteLine(instanceVariable);-> 클래스 메서드에서 인스턴스 변수 사용은 오류 발생
            Console.WriteLine(instanceVariable);//클래스 메서드에선 클래스 변수만 사용 가능

            //3. 메서드 오버로딩
            //이름만 같고 매개변수는 다른 메서드를 만드는 것
            //반환값이 다르다고 해서 오버로딩이 일어나지는 않는다.
            Console.WriteLine(MyMath1.Abs(-52));
            Console.WriteLine(MyMath1.Abs(-32.103));
            Console.WriteLine(MyMath1.Abs(-21474836470));

            //4. 접근 제한자
            //형태: 변수(접근제한자 자료형 변수이름), 메서드(접근제한자 반환형 메서드이름 (매개변수){메서드코드})
            //private: 접근 제한자를 입력하지 않으면 자동 설정, 자신의 클래스 내부에서만 해당 메서드 사용 가능
            //public: 접근 제한자가 걸린 변수, 메서드는 모든 곳에서 접근 가능

            //5. 생성자
            //무언가를 생성할 때 자동으로 호출되는 메서드
            //인스턴스 생성자의 생성 조건: 이름이 클래스 이름과 같아야 함, 접근 제한자는 public, 반환과 관련된 선언을X
            //생성자의 형태: publci 클래스이름 (매개변수)
            Product product1 = new Product("감자", 2000);
            Product product2 = new Product("고구마", 3000);
            Console.WriteLine(product1.id + ":" + product1.name);
            Console.WriteLine(product2.id + ":" + product2.name);
            Console.WriteLine(Product.counter + "개 생성되었습니다.");
            //6.private 생성자
            //생성자로 클래스의 인스턴스를 만들 수 없게 할때
            //정적 멤버만 가질때, 팩토리 메서드 패턴에서 팩토리 메서드로만 인스턴스를 생성하고싶을때

            //7. 정적 생성자
            //정적 요소를 초기화할때 사용, 정적 생성자 사용의 제한(접근 제한자사용X, 매개변수사용X)
            //정적 요소를 사용할 때, 또는 인스턴스를 생성하는 초기 시점에 한 번만 호출
            //해당 클래스와 관련된 요소를 처음 사용하는 시점에 자동 호출(별도 호출 불가능)

            //8. 소멸자
            //인스턴스가 소멸될 때에 호출
            //변수의 불사용이 확실할 때 객체 소멸시키며 소멸자 호출(객체 소멸시기 불명확)
            //소멸자 생성 규칙: 이름은 클래스 이름 앞에 ~기호 붙은 것, 접근 제한자 사용X, 반환과 관련된 선언X, 매개변수와 관련된 선언X, 하나의 클래스에는 하나의 소멸자만
            //소멸자의 형태 ~클래스 이름(){}

            //9. 상수
            //일반적인 변수는 값 계속 변경 가능, 상수로 선언된 변수는 값 변경 불가
            //MyMath2.PI = 20; -> 오류발생
            //readonly 키워드: 읽기 전용 변수, 변수 선언 시점과 생성자 메서드에서만 값 변경 가능(이 외에는 오류 발생)

            //12. 일반적인 속성 생성 방법
            //속성(겟터와 셋터를 쉽게 만드는 방법) class Box->class Box1과 비교
            Box1 box = new Box1(-10, -20);
            box.Width = -200;
            box.Height = -100;
            
            //13. 값. 참조 복사
            //책보기 설명잘되있음

            //14. 재귀 메서드

            //15. 메모화
        }
    }
}
