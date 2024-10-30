public class jv02_operation {
    public static void main (String[] args) {
        // 연산자
        // - 대입 연산자 왼쪽 = 오른쪽 오른쪽에 있는걸 왼쪽에 저장
        // - 산술 연산자 +-*/%
        // - 비교 연산자 > < >= <= == /=
        // - 논리 연산자 && ||
        //   AND (F F F) (F T F) (T T T) (T F F)
        //   OR (F F F) (F T T) (T T T) (T F T)
        //   XOR (F F F) (F T T) (T T F) (T F T)
        Integer n1 = 1, n2 = 2;
        System.out.printf("%d %d %d %d ", n1 + n2, n1 - n2, n1 * n2, n1 / n2);
        System.out.printf("%b %b %b %b ", n1 > n2, n1 < n2, n1 >= n2, n1 <= n2);
        System.out.printf("%b", n1 == n2 && n1 < n2);
    }
}