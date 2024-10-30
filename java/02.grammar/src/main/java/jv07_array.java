import object_example.Pokemon;

public class jv07_array {
    public static void main (String[] args) {
        // 배열
        // - 같은 형식의 변수를 여러개 저장하는 것
        // - 배열 변수 선언: 클래스 이름[] 변수 이름;
        // - 배열 객체 생성: 배열변수이름 = new 클래스이름[크기];
        // - 값 저장: 배열변수이름[인덱스번호] = 값;
        Integer[] nums = new Integer[5];
        nums[0] = 10;
        nums[1] = 20;
        nums[2] = 30;
        nums[3] = 40;
        nums[4] = 50;
        // 최대 저장 값을 넘어서 오버플로우 발생
        // nums[5] = 60;
        Integer[] nums2 = new Integer[500];
        for (int i = 0; i < 500; i += 1){ nums2[i] = i + 10; }
        System.out.println(nums2[338]);
        // ex) 포켓몬 객체를 3개 저장할 수 있는 지우포켓몬 배열 변수를 만드시오
        //     지우가 가진 포켓몬 중에 체력이 300이상인 포켓몬의 이름을 출력
        Pokemon[] pokemons = new Pokemon[4];
        pokemons[0] = new Pokemon();
        pokemons[0].name = "피카추";
        pokemons[0].level = 10;
        pokemons[0].health = 100;
        pokemons[1] = new Pokemon();
        pokemons[1].name = "리자몬";
        pokemons[1].level = 60;
        pokemons[1].health = 400;
        pokemons[2] = new Pokemon();
        pokemons[2].name = "잠만보";
        pokemons[2].level = 60;
        pokemons[2].health = 700;
        for (int i = 0; i < 3; i++){ if(pokemons[i].health >= 300){ System.out.println(pokemons[i].name); } }
    }
}
