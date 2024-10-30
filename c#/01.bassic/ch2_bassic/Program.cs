using System;

namespace ch2_bassic
{
    class Program
    {
        static void Main(string[] args)
        {
            //1. 식별자
            //변수, 메서드 이름은 키워드를 사용X 특수문자는 _만 허용, 숫자로 시작X, 공백X
            //클래스, 속성, 메서드, 네임스페이스의 이름은 항상 대문자로 시작
            //지역 변수와 전역 변수의 이름은 항상 소문자 시작
            //여러 단어로 이루어진 식별자는 각 단어의 첫 글자를 대문자로 시작

            //*주석처리: 한줄 // 여러줄 /* ~ */

            //2. 출력
            //Console 클래스의 WriteLine ( ), Write() 메서드 사용
            Console.Write("Hello World!");//출력 후 개행X
            Console.WriteLine("Hello World!");//출력 후 개행O

            //3. 정수
            //정수 연산 주의 사항: 정수연산결과는 정수, 예를 들어 10/4는 2.5가 아니라 2
            Console.WriteLine(1 + 2);
            Console.WriteLine(1 - 2);
            Console.WriteLine(1 * 2);
            Console.WriteLine(1 / 2);
            Console.WriteLine(1 % 2);//나머지 연산자의 부호는 왼쪽 피연산자의 부호를 따름


            //4. 실수
            //실수를 만들려면 소수점(.)사용
            Console.WriteLine(1.0 + 2.0);
            Console.WriteLine(1.0 - 2.0);
            Console.WriteLine(1.0 * 2.0);
            Console.WriteLine(1.0 / 2.0);
            //Console.WriteLine(1.0 % 2.0);->실수에서의 나머지연산자 사용은 가능, 결과 예측이 힘듬

            //5. 문자
            //알파벳뿐만 아니라 모든 문자 표현이 가능
            Console.WriteLine('A');
            Console.WriteLine('가');
            Console.WriteLine('나');

            //6. 문자열
            //문자의 집합
            Console.WriteLine("안녕하세요");
            Console.WriteLine("안녕하세요"[0]);//문자열에서의 문자 선택, 문자열[숫자]
            //Console.WriteLine("안녕하세요"[100]);->오류(범위초과)
            Console.WriteLine("가나다" + "라마" + "바사아");//문자열 연결 연산자(+), 문자끼리는 불가능 
            //Console.WriteLine('가'+'힟');->오류(문자 자체는 + 연산자 사용 불가)


            //7. 이스케이프 문자
            Console.WriteLine("한빛\t아카데미");//t(수평탭)
            Console.WriteLine("한빛\n아카데미");//\n(행바꿈)
            Console.WriteLine("\\,\"");         //\\(역슬래쉬), , \*(큰따옴표)

            //8. bool과 비교, 논리 연산자
            //같다(==), 다르다(!=), 왼쪽 피연산자가 크다(>), 오른쪽 피연산자가 크다(<), 왼쪽 피연산자가 크거나 같다(>=), 오른쪽피연산자가 크거나 같다(<=)
            Console.WriteLine(52 < 273);
            Console.WriteLine(52 > 273);
            //논리부정연산자(!), 논리합 연산자(||), 논리곱 연산자(&&)
            Console.WriteLine(!(true));//false, 피연산자 하나만 가짐
            Console.WriteLine(DateTime.Now.Hour < 3 || 8 < DateTime.Now.Hour);// 18시면 왼쪽 false 오른쪽 true->true
            Console.WriteLine(3 < DateTime.Now.Hour && DateTime.Now.Hour < 8);// 18시면 오른쪽 true 왼쪽 false->false

            //10. 정수 자료형
            //long 자료형: 8바이트의 정수, 끝에 L넣기
            //int 자료형: 일반적으로 정수를 만들 때 사용, 크기(4바이트,32비트), 범위(2^32개의 숫자 나타냄-2,147,483,648~2,147,483,647=>2^31-1)
            int a = 273;
            int b = 52;
            Console.WriteLine(a + b);
            Console.WriteLine(a - b);
            Console.WriteLine(a * b);
            Console.WriteLine(a / b);
            Console.WriteLine(a % b);
            //오버플로우: int 자료형의 범위를 넘는 현상, 해결방법(자료형 변환)
            int a1 = 2000000000;
            int b1 = 1000000000;
            Console.WriteLine(a1 + b1);
            //unsigned 자료형: 부호가 없는 자료형, 음수 사용을 위한 자료형, uint, ulong키워드 사용
            uint unsignedInt = 4147483647;
            ulong unsignedLong = 11223372036854775808;
            Console.WriteLine(unsignedInt);
            Console.WriteLine(unsignedLong);
            //MaxValue와 MinValue
            Console.WriteLine(int.MaxValue); //int자료형의 최댓값
            Console.WriteLine(int.MinValue); //int자료형의 최솟값
            Console.WriteLine(long.MaxValue);//long자료형의 최댓값
            Console.WriteLine(long.MinValue);//long자료형의 최솟값

            //11.실수 자료형
            //float 자료형: 4바이트의 실수, 끝에 F넣어야함
            //double 자료형: 8바이트의 실수
            double a2 = 52.273;
            double b2 = 103.32;
            Console.WriteLine(a2 + b2);
            Console.WriteLine(a2 - b2);
            Console.WriteLine(a2 * b2);
            Console.WriteLine(a2 / b2);
            Console.WriteLine(a2 % b2);//실수형에서의 나머지연산자는 계산이 힘들다 했음

            //12. 문자 자료형
            //문자 자료형은 문자열 자료형 보다 정수에 가까움->연산가능
            char a3 = 'a';
            char b3 = 'b';
            Console.WriteLine(a3 + b3);
            Console.WriteLine(a3 - b3);
            Console.WriteLine(a3 * b3);
            Console.WriteLine(a3 / b3);
            Console.WriteLine(a3 % b3);

            //13. sizeof연산자와 자료형의 크기
            Console.WriteLine("int: "+sizeof(int));
            Console.WriteLine("long: " + sizeof(long));
            Console.WriteLine("float: " + sizeof(float));
            Console.WriteLine("double: " + sizeof(double));
            Console.WriteLine("char: " + sizeof(char));

            //14. 문자열 자료형
            string msg = "안녕";
            Console.WriteLine(msg + "!");
            Console.WriteLine(msg[1]);

            //15. 불 자료형
            bool one = 10 < 0;
            bool other = 20 > 100;
            Console.WriteLine(one);
            Console.WriteLine(other);

            //16. 기본 자료형의 원형
            //int(struct System.Int32), long(struct System.Int64), char(struct System.Char)
            //float(struct System.Single), double(struct System.Double), bool(struct System.Boolean)
            //string(class System.String)string 자료형은 sizeof 연산자로 자료형의 크기를 구할 수 없음, string 자료형만 struct로 시작하지 않고 class로 시작

            //17. 복합대입연산자
            //자료형에 적용하는 기본연산자와 =연산자를 함께 사용, a += 10은 a = a + 10을 뜻함
            int output = 0;
            output += 2;
            output *= 2;
            output /= 2;
            output -= 2;
            Console.WriteLine(output);
            //문자와 관련된 복합 대입 연산자
            string output1 = "hello";
            output1 += " world ";
            output1 += "!";
            Console.WriteLine(output1);

            //18. 증감연산자
            //전위(해당 문장을 실행하기 전에 값을 변경), 후위(문장을 실행한 이후에 값을 변경)
            int number = 10;
            Console.WriteLine(number);  //10
            Console.WriteLine(++number);//11
            Console.WriteLine(number--);//11, 문장 실행 이후 값 변경
            Console.WriteLine(number);  //10

            //19. 자료형 검사
            //마우스를 가져다 대거나, GetType()메서드 확인
            int _int  = 273;
            long _long = 522731033265;
            float _float = 52.273F;
            double _double = 52.273;
            char _char = '글';
            string _string = "문자열";
            Console.WriteLine(_int.GetType());
            Console.WriteLine(_long.GetType());
             Console.WriteLine(_float.GetType());
            Console.WriteLine(_double.GetType());
            Console.WriteLine(_char.GetType());
            Console.WriteLine(_string.GetType());
            Console.WriteLine((273).GetType());//직접적인 GetType()메서드 활용

            //20. var 키워드 사용
            //var: 자료형을 자동으로 지정한다.
            //long 자료형, float 자료형 선언 시, 숫자 뒤에 L, F 등 기호 붙여야 함
            //var 키워드 추가 사용 조건: 지역변수(메서드 내부에 선언되어 있는 변수)로 선언, 변수를 선언과 동시에 초기화해야함
            var number1 = 100; //int
            //number1 = "변경";->한 번 지정된 자료형은 계속 유지, int 자료형으로 선언된 변수를 string 자료형으로 바꾸는건 불가능
            var number2 = 100L;  //long 
            var number3 = 100.0; //dobule 
            var number4 = 100.0F;//float
            

            //21. 입력
            //Console.ReadLine ( ) 메서드는 문자열만 입력 가능, 숫자를 입력 받아 더하거나 하는 프로그램을 만들려면 문자열을 숫자로 바꾸는 방법 필요
            string input = Console.ReadLine();
            Console.WriteLine("input: " + input);

            //22. 강제 자료형 변환
            //데이터 손실 발생, 큰 자료형에서 작은 자료형으로 변환될 때는 데이터가 깨질 수 있음
            long LongNumber = 2147483647L + 2147483647L;
            int intNumber = (int)LongNumber;
            Console.WriteLine(intNumber);
            //데이터 손실 발생X
            long LongNumber1 = 52273;
            int intNumber1 = (int)LongNumber1;
            Console.WriteLine(intNumber1);

            //23. 자동 자료형 변환
            //C# 데이터 손실이 일어나지 않는 범위에 한해서 자동으로 자료형을 변경해줌
            //int 자료형을 long, double자료형으로 자동 자료형 변환하는 예제
            int intNumber2 = 2147483647;
            long intToLong = intNumber2;
            Console.WriteLine(intToLong);
            double intTodouble = intNumber2;
            Console.WriteLine(intTodouble);

            //24. 다른 자료형을 숫자로 변환
            //문자열을 숫자로 변환
            Console.WriteLine(int.Parse("52"));
            //Console.WriteLine(int.Parse("abc"));->숫자로 변환할 수 없는 문자열을 변환하는경우
            Console.WriteLine(long.Parse("273"));
            Console.WriteLine(float.Parse("52.273"));
            Console.WriteLine(double.Parse("103.32"));
            Console.WriteLine(int.Parse("52").GetType());
            Console.WriteLine(long.Parse("273").GetType());
            Console.WriteLine(float.Parse("52.273").GetType());
            Console.WriteLine(double.Parse("103.32").GetType());

            //25. 다른 자료형을 문자열로 변환
            Console.WriteLine((52).ToString());
            Console.WriteLine((52.273).ToString());
            Console.WriteLine(('a').ToString());
            Console.WriteLine((true).ToString());
            Console.WriteLine((52).ToString().GetType());
            Console.WriteLine((52.273).ToString().GetType());
            Console.WriteLine(('a').ToString().GetType());
            Console.WriteLine((true).ToString().GetType());

            //26. 소숫점 제거
            double number5 = 52.273103;
            Console.WriteLine(number5.ToString("0.0"));    //소숫점 한자리만출력
            Console.WriteLine(number5.ToString("0.00"));   //소숫점 두자리만출력
            Console.WriteLine(number5.ToString("0.0000")); //소숫점 네자리만출력
            Console.WriteLine(number5.ToString("0.00000"));//소숫점 다섯자리만출력

            //27. 숫자와 문자열 덧셈
            Console.WriteLine(52 + 273);  //325
            Console.WriteLine("52" + 273);//52273출력
            //간단한 문자열 변환
            int number6 = 52273;
            string outputA = number6 + "";
            Console.WriteLine(outputA);
            Console.WriteLine(outputA.GetType());

            //28. 다른 자료형을 불로 변환
            //bool.Parse(): 문자열을 불 자료형으로 변환
            Console.WriteLine(bool.Parse("True"));

            //29. 음수 밖에 없는 숫자
            //int 자료형의 범위는 -2147483648~2147483647인데 -2147483648에 대응되는 양수가 없다. 그래서 음수 연산자를 붙여도 자기자신이됨
            int outputB = int.MinValue;
            Console.WriteLine(-outputB);//-(-2147483648)처럼 숫자를 직접 입력하면 오류가 발생한다.
        }
    }
}
