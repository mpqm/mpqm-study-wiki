using System;

namespace ch8_hard_class
{
    //1. 제네릭
    class Wanted<T>
    {
        public T Value;
        public Wanted(T value)
        {
            this.Value = value;
        }
    }
    //2. 인덱서
    class Calculator
    {
        public int this[int i]//인덱서 선언
        {
            get { return i * i; }

        }
    }
    
    class Program
    {
        //4. 구조체
        struct Point
        {
            public int x;
            public int y;
            //public Point() ->오류(구조체에선 매개변수 없는 생성자 선언불가)
            //생성자에서는 반드시 모든 멤버 변수 초기화 상태로 만들어야함, 선언과 동시에 멤버 변수 초기화 할 수 없음
            public Point(int x, int y)
            {
                this.x = x;
                this.y = y;
            }
        }
        static void NextPosition(int x, int y, int vx, int vy, out int rx, out int ry)
        {
            rx = x + vx;
            ry = y + vy;
        }
        static void Main(string[] args)
        {
            //1. 제네릭
            //클래스 내부에서 자료형에 별칭을 지정하는 기능
            Wanted<string> wantedstring = new Wanted<string>("String");
            Wanted<int> wantedint = new Wanted<int>(52273);
            Wanted<double> wanteddouble = new Wanted<double>(52.273);
            Console.WriteLine(wantedstring.Value);
            Console.WriteLine(wantedint.Value);
            Console.WriteLine(wanteddouble.Value);
            //두개이상의제네릭도 사용가능 class 클래스이름<T,U>
            //where키워드: 제네릭의 제한(클래스. 구조체, 상속여부)

            //2.인덱서
            Calculator cal = new Calculator();
            Console.WriteLine(cal[10]);

            //3. out 키워드
            //값을 여러개 반환하고자 할 때 사용, 대표적인 메서드는 TryParse()메서드
            //out 키워드는 매개변수로 넣은 변수로 값 넣어줌. 변수 아닌 일반 자료 넣으면 오류 발생
            Console.Write("숫자입력");
            int output;
            bool result = int.TryParse(Console.ReadLine(), out output);//out 키워드를 붙여서 매개변수 넣어야함

            if (result)
            {
                Console.WriteLine("입력한 숫자: " + output);
            }
            else
            {
                Console.WriteLine("숫자를 입력해주세요");
            }
            //out키워드를 사용하는 메서드 구현
            int x = 0;
            int y = 0;
            int vx = 1;
            int vy = 1;
            Console.WriteLine("현재좌표: ("+x+","+y+")");
            NextPosition(x, y, vx, vy, out x, out y);
            Console.WriteLine("다음좌표: (" + x + "," + y + ")");

            //4. 구조체 선언
            //구조체에선 값복사가 일어나고 클래스는 참조 복사가 일어남
            Point point;//new키워드없이 구조체 인스턴스 생성
            point.x = 10;
            point.y = 10;
            Console.WriteLine(point.x);
            Console.WriteLine(point.y);
            Point point1 = new Point(5, 6);
            Console.WriteLine(point1.x);
            Console.WriteLine(point1.y);

        }
    }
}
