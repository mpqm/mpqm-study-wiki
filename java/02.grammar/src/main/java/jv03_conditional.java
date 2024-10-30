public class jv03_conditional {
    public static void main (String[] args) {
        // 조건문
        // - if(조건) { 조건이 참일 때 실행할 코드 }
        // - if(조건) { 조건이 참일 때 실행할 코드 } else {조건이 거짓일 때 실행할 코드}
        // - if(조건1) { 조건1이 참일 때 실행할 코드 } else if(조건2) {조건2가 참일 때 실행할 코드} else {조건1,2가 거짓일 때 실행할 코드}
        Integer n1 = 1, n2;
        if (n1 > 100) { System.out.println("n1은 100보다 크다 "); }
        else { System.out.println("n1은 100보다 작다 "); }
        n1 = 23568;
        n2 = 428379;
        if(n1 + n2 * n2 / n1 - n2 < n1) { System.out.println("크다");}
        if(n1 * n2 / n1 < n2 && n1 + n2 -3000 != 0){ System.out.println("복잡"); }
    }
}
