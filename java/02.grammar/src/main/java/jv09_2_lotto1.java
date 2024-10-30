public class jv09_2_lotto1 {
    public static void main(String[] args) {
        System.out.println("로또 번호 생성기");
        Integer[] randomNumbers = new Integer[6];
        randomNumbers[0] = (int)(Math.random()*45+1);
        Integer randomNumber1;
        for (int i = 1; i < 6; i++){
            randomNumber1 = (int)(Math.random()*45+1);
            for(int j = 0; j < i; j++){
                if(randomNumbers[j] == randomNumber1){
                    i--;
                    break;
                }
                else{ randomNumbers[i] = randomNumber1; }
            }
        }
        for (int k = 0; k < 6; k++){ System.out.print(randomNumbers[k]+" "); }
    }
}
