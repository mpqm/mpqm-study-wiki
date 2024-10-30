using System;
using System.Collections.Generic;

namespace ch9_interface
{
    class Program
    {
        class Product : IComparable
        {
            public string Name { get; set; }
            public int Price { get; set; }

            public int CompareTo(object obj)
            {
                return this.Price.CompareTo((obj as Product).Price);
            }

            public override string ToString()
            {
                return Name + " : " + Price + "원";
            }
        }
        static void Main(string[] args)
        {
            //1. 인터페이스
            //특정 클래스 만들 때 사용하는 규약(실수하지 않게 도와주는 기능)
            //인터페이스는 모두 대문자 I로 시작
            //IComparable인터페이스 : 비교할 때 사용하는 규약
            //인터페이스의 인스턴스화는 오류
            List<Product> list = new List<Product>()
            {
                new Product() {Name = "고구마", Price = 1500},
                new Product() {Name = "사과", Price = 2400},
                new Product() {Name = "바나나", Price = 1000},
                new Product() {Name = "배", Price = 3000},

            };
            //list.Sort();->sort메서드가 product클래스를 어떤기준으로 정렬해야 할지 모르기 때문에 발생하는 오류->인터페이스 구현

            foreach(var item in list)
            {
                Console.WriteLine(item);
            }
        }
    }
}
