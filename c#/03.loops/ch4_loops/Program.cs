using System;

namespace ch4_loops
{
    class Program
    {
        static void Main(string[] args)
        {
            //1. 반복문 과 배열
            //배열 선언 형식: 자료형[] 이름 = {자료, 자료}
            //배열의 요소: 배열[인덱스]
            int[] intArray = { 52, 273, 32, 65, 103 };
            intArray[0] = 0; //배열의 요소변경 52 -> 0
            //배열의 요소 개수 확인 intArray.Length 사용
            //for문의 조건식을 잘못 설정해서 배열의 범위를 벚어나면 exception
            for (int i = 0; i < intArray.Length; i++)
            {
                Console.WriteLine(intArray[i]);
            }

            //2. 원하는 크기의 배열 생성 방법
            int[] intArray1 = new int[100];//100개의 공간을 가지는 Int 자료형의 배열을 생성
            Console.WriteLine(intArray1[99]);

            //3. While문-무한반복문 이용
            int i1 = 0;
            int[] intArray2 = { 52, 273, 32, 65, 103 };
            while (i1 < intArray2.Length)
            {
                Console.WriteLine(i1 + "번째 출력: " + intArray2[i1]);
                i1++; //탈출을 위해서 선언
            }

            //4. do while 반복문
            //조건 먼저 검사 후 코드 블록 반복적 실행, while 반복문과 형태 비슷하나, 조건 비교 부분이 마지막에 위치
            string input;
            do
            {
                Console.WriteLine("입력(exit 입력시 종료): ");
                input = Console.ReadLine();
            } while (input != "exit");

            //5. for 반복문
            //원하는 횟수만큼 반복, 맨 먼저 초기식 실행 후 조건식 확인
            //초기식 비교->조건식 비교->문장실행->종결식실행->2단계이동
            //덧셈, 곱셈
            int output = 0;
            for (int i = 0; i <= 100; i++)
            {
                output += i;
            }
            Console.WriteLine(output);
            //한글 전부 출력하기
            for (int i = '가'; i <= '힣'; i++)
            {
                Console.Write((char)i);
            }
            //일반적으론 for많이쓰임, 외부 요인으로 조건 변경시엔  while반복문 많이 사용
            //시간을 사용한 반복문 이탈
            long start = DateTime.Now.Ticks;
            long count = 0;
            while (start + (10000000) > DateTime.Now.Ticks) count++;//10000000tick = 1초
            Console.WriteLine(count + "만큼 반복되었습니다.");

            //6. 역 for 반복문
            //배열 반복 뒤에서부터 실행 하는 경우 사용
            int[] intArray3 = { 1, 2, 3, 4, 5, 6 };
            for (int i = intArray3.Length - 1; i >= 0; i--)
            {
                Console.WriteLine(intArray3[i]);
            }

            //7. foreach 반복문
            //반복문을 컬렉션(여러 개체가 모여서 집합을 이룬 것)에 쉽게 적용할 때 사용 
            string[] array = { "사과", "배", "포도", "딸기", "바나나" };
            foreach (var item in array)
            {
                Console.WriteLine(item);
            }

            //8. 중첩 반복문
            //별 피라미드(시험문제예상)
            for (int i = 0; i < 10; i++)
            {
                for (int j = 0; j < i + 1; j++) Console.Write('*');
                Console.Write('\n');
            }
            for (int i = 0; i < 10; i++)
            {
                for (int j = 0; j < 10 - i + 1; j++) Console.Write(' ');
                for (int j = 0; j < i + 1; j++) Console.Write('*');
                Console.Write('\n');
            }
            //9. break키워드
            Console.Write("숫자 입력(짝수입력시 종료): ");
            while (true)
            {
                int input3 = int.Parse(Console.ReadLine());
                if (input3 % 2 == 0)
                {
                    break;//반복문 탈출
                }
            }
            //goto키워드: 원하는 반복문 벗어나기, 사용하지말자


            //10. continue키워드
            for (int i = 1; i < 10; i++)
            {
                if (i % 2 == 0)
                {
                    continue; //짝수라면 다음 반복으로 넘어간다.
                }
                Console.WriteLine(i);
            }

            //11. 대문자화, 소문자화
            //C#의 모든 문자열 처리 메서드는 자신을 변경하지 않고 반환, 비파괴적 메서드(자신을 변경하지 않고 반환하는 메서드)
            string input4 = "Poatato Tomato";
            Console.WriteLine(input4.ToUpper());//소문자를 대문자로
            Console.WriteLine(input4.ToLower());//대문자를 소문자로

            //12. 문자열 자르기(시험문제예상)
            string input5 = "감자-고구마-토마토";
            string[] input5s = input5.Split(new char[] { '-' });
            foreach (var item in input5s) Console.WriteLine(item);

            //13. 문자열 양 옆의 공백 제거
            string input6 = " test       \n";
            Console.WriteLine(input6);
            Console.WriteLine(input6.Trim());


            //14. 배열을 문자열로 변환
            string[] array2 = { "감자", "고구마", "토마토", "가지" };
            Console.WriteLine(string.Join(",", array2));//배열이, 기준으로 연결되어 출력

            //15. 이동하는 달팽이

            bool state = true;
            Console.Clear();      
            int x = 50;
            int y = 50;
            while (state)
            {
                ConsoleKeyInfo info = Console.ReadKey();
                switch (info.Key)
                {
                    case ConsoleKey.UpArrow:
                        Console.SetCursorPosition(x, y++);
                        Console.WriteLine("@");
                        break;
                    case ConsoleKey.X:
                        state = false;
                        break;
                }
            }
        }
    }
}
