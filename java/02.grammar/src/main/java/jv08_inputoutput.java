import java.util.Scanner;

public class jv08_inputoutput {
    public static void main (String[] args) {
        // 문자 입력
        Scanner scanner = new Scanner(System.in);
        System.out.println("문자 입력: ");
        String str = scanner.nextLine();
        System.out.println(str);
        // 숫자 입력
        System.out.println("숫자 입력: ");
        Integer n1 = scanner.nextInt();
        System.out.println(n1);
    }
}
