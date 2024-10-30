public class jv01_variable {
    public static void main (String[] args) {
        // 변수
        // - 개념: 값을 저장하는 기억공간
        // - 선언: 클래스 이름 변수이름;
        // - 저장: 변수이름 = 값
        // - 사용: 변수이름
        Integer n1;
        String s1;
        n1 = 100;
        s1 = "aaa";
        System.out.printf("%d %s", n1, s1);
        // - 변수 명명 규칙
        //   필수 사항: 대소 문자가 구분되며 길이에 제한이 없음 / 숫자 시작, 예약어 사용 x / 특수문자 _,$ 만 허용
        //   권장 사항: 여러 단어, 클래스 이름의 첫 글자는 항상 대문자 / 변수와 메서드 이름의 첫 글자는 항상 소문자 / 상수의 이름은 대문자, 단어는 _로 구분
        //   Camel Case: numberofage -> numberOfAge
        //   Snake Case: numberofage -> number_of_age
        // - ex) a, b를 서로 바꾸기
        Integer a = 10;
        Integer b = 20;
        Integer bump = 0;
        bump = a;
        a = b;
        b = bump;
        System.out.printf("%d %d", a, b);
    }
}