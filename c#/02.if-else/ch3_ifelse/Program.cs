
using System;

namespace ch3_conditional
{
    class Program
    {
        static void Main(string[] args)
        {
            //1. 홀수 짝수 구분
            Console.Write("숫자 입력: ");
            int input = int.Parse(Console.ReadLine());
            if (input % 2 == 0)
            {
                Console.WriteLine("짝수");
            }
            else
                Console.WriteLine("홀수");

            //2. 식사시간, 중첩조건문활용
            if (DateTime.Now.Hour < 12)
            {
                Console.WriteLine("아침먹자");
            }
            else if (DateTime.Now.Hour < 15)
            {
                Console.WriteLine("점심먹자");
            }
            else
            {
                Console.WriteLine("저녁먹자");
            }

            //3. 논리 연산자와 조건문 (왜했지?)
            double score = 3.6;
            if (score == 4.5) Console.WriteLine("신");
            else if (4.2 <= score && score < 4.5) Console.WriteLine("교수님의 사랑");
            else if (3.5 <= score && score < 4.2) Console.WriteLine("현체제의 수호자");
            else if (2.8 <= score && score < 3.5) Console.WriteLine("일반인");
            else if (2.3 <= score && score < 2.8) Console.WriteLine("일탈을 꿈꾸는 소시민");
            else if (1.75 <= score && score < 2.3) Console.WriteLine("오락문화의 선구자");
            else if (1.0 <= score && score < 1.74) Console.WriteLine("불가촉천민");
            else if (0.5 <= score && score < 1.0) Console.WriteLine("자벌레");
            else if (0 < score && score < 0.5) Console.WriteLine("플랑크톤");
            else Console.WriteLine("시대를 앞서가는 혁명의 씨앗");

            //4. switch조건문 활용
            Console.WriteLine("숫자를 입력하세요: ");
            int input1 = int.Parse(Console.ReadLine());
            switch(input1 % 2)
            {
                case 0:
                    Console.WriteLine("짝수");
                    break;
                case 1:
                    Console.WriteLine("홀수");
                    break;
            }

            //5. break키워드를 사용하지 않는 switch 조건문
            Console.WriteLine("이번달은 몇월?: ");
            int input2 = int.Parse(Console.ReadLine());

            switch (input2)
            {
                case 12:
                case 1:
                case 2:
                    Console.WriteLine("겨울임");
                    break;
                case 3:
                case 4:
                case 5:
                    Console.WriteLine("봄임");
                    break;
                case 6:
                case 7:
                case 8:
                    Console.WriteLine("여름임");
                    break;
                case 9:
                case 10:
                case 11:
                    Console.WriteLine("가을임");
                    break;
                default:
                    Console.WriteLine("어떤 행성에 사는거야! ");
                    break;
            }

            //6. 삼항연산자
            //기본형태: 불표현식 ? 참 : 거짓
            string input3 = Console.ReadLine();
            int number = int.Parse(input3);

            Console.WriteLine(number > 0 ? "자연수임" : "자연수아님");

            //7. 입력 조건 받아 분할하기
            Console.Write("입력: ");
            string line = Console.ReadLine();

            if (line.Contains("안녕")) Console.WriteLine("안녕");
            else Console.WriteLine("^^");

            //8. 키입력구분
            //ReadKey()는 입력한키를 ConsoleKeyInfo 객체를 받게되는데 이 객체 내부의 KeyChar속성을 사용하면 어떤키를 입력했는지 알 수 있고,
            //Key 속성은 ConsoleKey 객체를 받는데 이걸로 키보드에 있는 키를 입력받을 수 있음
            ConsoleKeyInfo info = Console.ReadKey();
            Console.WriteLine(info.KeyChar);
            switch (info.Key)
            {
                case ConsoleKey.UpArrow:
                    Console.WriteLine("위로이동");
                    break;
                case ConsoleKey.RightArrow:
                    Console.WriteLine("오른쪽으로이동");
                    break;
                case ConsoleKey.DownArrow:
                    Console.WriteLine("아래로이동");
                    break;
                case ConsoleKey.LeftArrow:
                    Console.WriteLine("왼쪽로이동");
                    break;
                default:
                    Console.WriteLine("다른 키를 눌렀습니다.");
                    break;
            }
        }
    }
}
