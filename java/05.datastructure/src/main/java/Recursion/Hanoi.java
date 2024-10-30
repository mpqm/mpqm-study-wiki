package Recursion;

public class Hanoi {
    // 이동(원반 번호와 from에서 to로 옮길지를 전달받는다.)
    public void move(Integer ring, Integer from, Integer to) {
        // 원반 번호가 1보다 크면 원반 번호 -1을 from에서 from과 to가 아닌 곳으로 이동
        if(ring > 1){ move(ring-1, from, 6-from-to); }
        // 원반 번호를 from에서 to로 옮겼다고 출력
        System.out.println(ring + "을" + from + "에서"+ to +"로 옮김");
        // 원반 번호가 1보다 크면 원반 번호 -1을 from과 to가 아닌 곳에서 to로 이동
        if(ring > 1){ move(ring-1,6-from-to, to); }
    }
}
