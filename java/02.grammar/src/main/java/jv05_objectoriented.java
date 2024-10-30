import object_example.*;

public class jv05_objectoriented {
    public static void main (String[] args) {
        // 객체 지향 프로그램(Object Oriented Program)
        // - 변수: 1개만 저장
        // - 배열: 똑같은 것 여러개 저장
        // - 객체: 다른 것 여러개와 각 기능을 같이 저장
        //   현실 세상에 있는 유형, 무형의 무언가를 컴퓨터 세상에 구현한 것
        //   공통된 특징을 저장해서 객체를 만듬, ex) 이름, 나이를 저장해서 학생 객체를 만듬
        // - 객체 만들기: 클래스 변수 = new 클래스()
        // - 클래스: 객체를 만들기 위한 공통된 틀
        Student student = new Student();
        student.name = "pjs";
        student.age = 26;
        student.computer = new Computer();
        student.computer.cpu = 8;
        student.computer.ram = 16;
        System.out.printf("%s %d %d \n", student.name, student.age, student.computer.cpu);

        // - ex) 3종류의 커피 객체 만들기
        Coffee coffee1 = new Coffee();
        coffee1.storeName="a";
        coffee1.price=1;
        coffee1.type="a";
        Coffee coffee2 = new Coffee();
        coffee2.storeName="b";
        coffee2.price=2;
        coffee2.type="b";
        Coffee coffee3 = new Coffee();
        coffee3.storeName="c";
        coffee3.price=3;
        coffee3.type="c";
        System.out.printf("%s %d %s \n", coffee1.storeName, coffee1.price, coffee1.type);
        System.out.printf("%s %d %s \n", coffee2.storeName, coffee2.price, coffee2.type);
        System.out.printf("%s %d %s \n", coffee3.storeName, coffee3.price, coffee3.type);
    }
}
