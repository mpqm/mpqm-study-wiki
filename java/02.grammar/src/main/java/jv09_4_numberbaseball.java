public class jv09_4_numberbaseball {
    public static void main(String[] args) {
        Integer cnt = 0;
        Integer out = 0;
        Integer ball = 0;
        Integer strike = 0;
        Integer do_cnt = 0;
        Integer a = (int) (Math.random() * 899 + 100);
        Integer a_000 = a / 100;
        Integer a_00 = (a / 10) % 10;
        Integer a_0 = a % 10;
        while (true) {
            Integer b = (int) (Math.random() * 899 + 100);
            Integer b_000 = b / 100;
            Integer b_00 = (b / 10) % 10;
            Integer b_0 = b % 10;
            if (a_000 == b_000 | a_00 == b_00 | a_0 == b_0) {
                strike++;
            } else if (a_000 != b_000 & a_000 != b_00 & a_000 != b_0
                    && a_00 != b_000 & a_00 != b_00 & a_00 != b_0
                    && a_0 != b_000 & a_0 != b_00 & a_0 != b_0) {
                out++;
            } else {
                ball++;
            }
            ;
            do_cnt++;
            if (strike == 3) {
                System.out.print("던진 횟수: " + do_cnt + "\n");
                System.out.print("아웃: " + out + "\n");
                System.out.print("볼:" + ball + "\n");
                System.out.print("스트라이크:" + strike);
                break;
            }
        }
    }
}
