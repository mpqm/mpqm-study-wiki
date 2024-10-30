public class jv09_1_pensionlottery {
    public static void main (String[] args) {
        System.out.println("연금복권 생성기");
        for (int i = 0; i < 6; i++){
            Integer randomNumber= (int)(Math.random()*10);
            System.out.print(randomNumber+" ");
        }
    }
}
