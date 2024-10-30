public class jv19_exception {
    public static void main(String[] args) {
        // 예외 처리
        // 문법적으로 틀린 것은 아니지만 프로그램이 실행중에 발생할 수 있는
        // 다양한 문제에 대한 처리를 하는 코드

        Integer num01 = 10;
        Integer num02 = 0;
        Integer result;
        try { result = num01 / num02;}
        catch (ArithmeticException ae) {
            ae.printStackTrace();
            result = 0;
        } catch (Exception e) {
            e.printStackTrace();
            result = 10;
        }
        System.out.println(result);
    }
}
