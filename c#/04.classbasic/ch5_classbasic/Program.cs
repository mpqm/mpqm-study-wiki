using System;
using System.Collections.Generic;

namespace ch5_classbasic
{
    //5.클래스의 변수
    class Product
    {
        public string name;//인스턴스변수
        public int price;//인스턴스변수
    }
    class MyMath
    {
        public static double PI = 3.141592;//클래스변수
    }

    //6. 추상화
    class Student
    {
        public string name;
        public int grade;

    }

    class Program
    {
        static void Main(string[] args)
        {
            //1. 클래스 개요
            //클래스: 객체 지향 언어, 원하는 새로운 자료형 정의(사용자 정의 자료형)
            //인스턴스: 클래스 자료형을 변수로 선언한것
            //생성자: 클래스 이름과 같은 메서드(클래스 이름 뒤에 괄호가 붙은것
            //클래스 이름은 대문자로 시작
            //Car car = new Car()->클래스 인스턴스 new키워드 생성자

            //2. random클래스
            Random random = new Random();
            Console.WriteLine(random.Next(10, 100));//10~100사이의 난수 반환
            Console.WriteLine(random.NextDouble()); //NextDouble()메서드는 0.0~1.0 사이의 난수 반환
            Console.WriteLine(random.NextDouble()*10);//0.0~10.0(1.0*10)사이의 난수 반환

            //3. List클래스
            //배열과 유사, 제네릭(Generic, 클래스 선언 시 어떤 자료형인지 알려주는 것)
            List<int> list = new List<int>();
            list.Add(52);
            list.Add(273);
            list.Add(32);
            //List<int> list = new List<int>(){52, 273, 32};->list인스턴스 생성과 동시에 요소 추가
            foreach (var item in list) Console.WriteLine(item);
            list.Remove(52);
            foreach (var item in list) Console.WriteLine(item);

            //4. Math클래스
            //수학과 관련된 변수, 메서드 제공, 인스턴스를 만들지 않아도됨
            Console.WriteLine(Math.Abs(-52273));    //절댓값을 구함
            Console.WriteLine(Math.Ceiling(52.273));//지정된 숫자보다 크거나 같은 최소 정수를 구함
            Console.WriteLine(Math.Floor(52.273));  //지정된 숫자보다 작거나 같은 최대 정수를 구함
            Console.WriteLine(Math.Max(52, 273));   //두개의 매개변수 중 큰값구함
            Console.WriteLine(Math.Min(52, 273));   //두개의 매개변수 중 작은값구함
            Console.WriteLine(Math.Round(52.273));  //반올림

            //5. 클래스의 변수
            //인스턴스 변수 생성방법: 소문자로 시작해야됨
            Product product = new Product();
            //인스턴스변수의 변경
            product.name = "감자"; 
            product.price = 2000;
            Product product1 = new Product() { name = "감자", price = 2000}; //인스턴스 변수를 생성할 때 초기화
            Console.WriteLine(product.name + ":" + product.price +"원");
            //클래스 변수와 메서드: 클래스 이름으로 곧바로 사용가능
            //클래스 변수 생성 방법 [접근 제한자] static [자료형] [이름]
            Console.WriteLine(MyMath.PI);

            //6. 추상화
            //클래스 기반의 객체 지향 프로그래밍 언어의 특징(추상화, 캡슐화, 상속, 다형성)
            //추상화: 프로그램에 사용되는 핵심적인 부분을 추출하는 것
            List<Student> slist = new List<Student>();
            slist.Add(new Student() { name = "윤인성", grade = 1 });
            slist.Add(new Student() { name = "연하진", grade = 2 });
            slist.Add(new Student() { name = "윤아린", grade = 3 });
            slist.Add(new Student() { name = "박종성", grade = 4 });

            //foreach반복문으로 요소 제거
            foreach(var item in slist)
            {
                if(item.grade > 1)
                {
                    slist.Remove(item);//특정 요소를 리스트에서 제거 메서드
                }
            }
            //for 반복문으로 요소제거
            for (int i = 0; i < slist.Count; i++)
            {
                if(slist[i].grade > 1)
                {
                    slist.RemoveAt(i);//특정 위치에 있는 요소를 리스트에서 제거 메서드
                }
            }
            //역 for 반복문으로 요소 제거
            for (int i = slist.Count-1; i>=0 ; i++)
            {
                if (slist[i].grade > 1)
                {
                    slist.RemoveAt(i);//특정 위치에 있는 요소를 리스트에서 제거 메서드
                }
            }
            foreach (var item in slist)
            {
                Console.WriteLine(item.name + ":" + item.grade);
            }
        }
    }
}
