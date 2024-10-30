public class jv04_repeatation {
    public static void main (String[] args) {
        // 반복문
        // - while (조건) { 반복할 코드 }
        // - for (초기값, 조건, 증감식) { 반복할 코드 }
        // - break: 반복문 안에서 코드가 실행 되면 반복문을 종료
        // - continue: 반복문 안에서 코드가 실행 되면 밑에 코드를 실행안하고 다음 반복문을 실행
        Integer n1 = 10;
        while(n1 < 100) {
            System.out.println(n1 + " 작다");
            n1 ++;
        }
        for (Integer i = 10; i < 100; i += 3) { System.out.println(i + " 작다"); }
        // ex) 숫자를 1~100까지 모두 더한 값을 출력
        Integer r1 = 0;
        for (Integer i = 1; i <= 100; i++ ) { r1 += i; }
        System.out.println(r1);
        r1 = 0;
        Integer i = 0;
        while (i <=100){
            r1 += i;
            i++;
        }
        System.out.println(r1);
        // ex) 숫자를 1~100까지 짝수만 더한 값을 출력
        r1 = 0;
        for (Integer j = 1; j <= 100; j++ ){
            if (j % 2 == 0) { r1 += j; }
        }
        System.out.println(r1);
        // ex) 3의 배수면 짝!이라고 출력하며 1~100까지 출력
        for (Integer j = 1; j <= 100; j++ ){
            if (j % 3 == 0) {  System.out.println("짝!"); }
            else { System.out.println(j); }
        }
    }
}