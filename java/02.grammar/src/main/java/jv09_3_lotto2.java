public class jv09_3_lotto2 {
    public static void main(String[] args) {
        Integer[] lotto = new Integer[6];
        for (Integer i = 0; i < 6; i++) { lotto[i] = (int)(Math.random()*45) + 1; }
        Integer flag = 1; // 플래그 켬
        while(flag == 1) { // 플래그가 설정되어 있으면 계속 반복
            flag = 0; // 플래그 끔
            for (Integer i = 0; i < 6; i++) { // 6번 반복(1)
                // 첫번째 반복문의 반복 횟수+1부터 6보다 작으면 반복(2)
                for (int j = i+1; j < 6; j++) {
                    // 만약에 첫번째 반복문의 반복 횟수번째 배열의 값과 두번째 반복문의 반복 획수번째 배열의 값이 같으면
                    if(lotto[i] == lotto[j]) {
                        lotto[i] = (int) (Math.random() * 45) + 1;// 랜덤한 숫자를 생성
                        i = 0; // 첫번째 반복문의 반복 횟수를 0으로 설정
                        flag = 1; // 플래그 켬
                    }
                }
            }
        }
        for (Integer i = 0; i < 6; i++) { System.out.println(lotto[i]); }
    }
}
