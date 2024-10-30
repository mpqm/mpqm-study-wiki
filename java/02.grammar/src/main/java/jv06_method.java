import object_example.Car;
import object_example.Factorial;
import object_example.Pokemon;
import object_example.Student;

public class jv06_method {
    public static void main (String[] args) {
        // 메소드
        // - 무언가를 하는 행위, 기능,행동 / 일반적으로 속성을 변경
        // - 선언
        // 	 반환클래스 메소드이름 () {
        //        메소드가 실행됐을 때 실행될 코드
        //        return 반환값;
        // 	 }
        // - 사용: 객체.메소드이름()
        Pokemon pokemon = new Pokemon();
        pokemon.name = "삐까추";
        pokemon.health = 100;
        pokemon.attack();
        pokemon.eat();

        Student s01 = new Student();
        s01.name = "s01";
        s01.age = 10;
        s01.wis = 0;
        s01.sul = 10;
        Integer result;
        result = s01.study(3);
        System.out.println(result);
        System.out.println(s01.sul);
        s01.drink("소주", 1);
        System.out.println(s01.sul);
        s01.drink("맥주", 3);
        System.out.println(s01.sul);

        Car car01 = new Car();
        car01.color = "흰색";
        car01.speed = 0;
        car01.accel(5, 4); // 가속 메소드
        car01.decel(10, 2); // 감속 메소드
        car01.paint("검정"); // 도색 메소드

        // 재귀
        Factorial f01 = new Factorial();
        Integer total = f01.factorial(5);
        System.out.println(total);
    }
}
