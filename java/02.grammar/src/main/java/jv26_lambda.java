import object_example.MyFunction;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BinaryOperator;
import java.util.function.Function;
import java.util.function.UnaryOperator;

public class jv26_lambda {
    public static void main(String[] args) {
        // 람다식
        // 메소드를 간단하게 표현한 것, 익명 함수(Anonymous Function)를 생성하기 위한 식
        // 메소드의 이름이 필요 없기 때문에 람다식은 익명 함수(Anonymous Function)의 한 종류
        // 함수형 프로그래밍 지원 기능 / 불필요한 코드를 줄이고, 가독성을 높이기 위해 사용
        // 반환클래스이름  메소드이름(매개변수클래스이름  매개변수변수이름) {
        //     실행코드
        //     return 반환값
        // }
        // (매개변수클래스이름  매개변수변수이름) -> {
        //      실행코드
        //      return 반환값
        // }

        // 함수형 인터페이스
        // 객체지향 프로그래밍 언어인 자바는 객체가 없으면 함수를 실행할 수 없기 때문에 함수를 만들기 위해
        // 함수형 인터페이스를 만들어서 사용
        // @FunctionalInterface : 단 하나의 추상 메서드를 가지는 인터페이스
        // 자바 표준 함수형 인터페이스
        //   Predicate<T>: T를 받아서 boolean 반환
        //   Consumer<T>: T를 받아서 처리, 반환값 없음
        //   Function<T, R>: T를 받아서 R 반환
        //   Supplier<T>: 입력 파라미터 없이 T 반환
        //   UnaryOperator<T>: T를 받아서 T 반환
        //   BinaryOperator<T>: 두 개의 T를 받아서 T 반환
        // @FunctionalInterface 사용
        MyFunction myFunction = (Integer a, Integer b) -> {
            System.out.println(a);
            System.out.println(b);
            return a + b;
        };
        // MyFunction myFunction = (a, b) -> a + b;
        System.out.println(myFunction.sum(10, 20));
        // UnaryOperator 사용
        UnaryOperator<Integer> square = (Integer num) -> {
            System.out.println(num);
            return num * num;
        };
        System.out.println(square.apply(5));
        // BinaryOperator 사용
        BinaryOperator<Integer> add = (Integer x, Integer y) -> {
            System.out.println(x);
            System.out.println(y);
            return x + y;
        };
        System.out.println(add.apply(3, 5));
        Function<Integer, String> intToString = (Integer num) -> {
            System.out.println(num);
            return "Number: " + num;
        };
        System.out.println(intToString.apply(42));
        // 컬렉션에서 forEach 메소드와 함께 사용
        List<String> list = Arrays.asList("apple", "banana", "cherry");
        list.forEach((String element) -> {System.out.println(element);});
        Map<String, Integer> map = new HashMap<>();
        map.put("apple", 1);
        map.put("banana", 2);
        map.put("cherry", 3);
        map.forEach((key, value) -> { System.out.println(key + ": " + value);});
    }
}