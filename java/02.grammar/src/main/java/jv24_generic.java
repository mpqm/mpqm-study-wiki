import object_example.Student3;
import object_example.Test;

import java.util.ArrayList;
import java.util.List;

public class jv24_generic {
    public static void main(String[] args) {
        // 제네릭
        // 클래스이름 변수이름; 이 때 클래스 이름을 타입이라고 하는데
        // 제네릭은 타입을 일반화함
        // 타입을 클래스 내부에서 결정하는게 아닌 밖에서 결정해주는 것
        Test<String, Integer> test01 = new Test<String, Integer>();
        test01.value1 = "글자 저장 가능";
        test01.value2 = 20;
        Test<Integer, Integer> test02 = new Test<Integer, Integer>();
        test02.value1 = 10;
        test02.value2 = 30;
        List<Student3> al03 = new ArrayList<Student3>();
        Student3 s01 = new Student3(10, "test01");
        Student3 s02 = new Student3(20, "test02");
        Student3 s03 = new Student3(30, "test03");
        al03.add(s01);
        al03.add(s02);
        al03.add(s03);
        System.out.println(al03);
    }
}