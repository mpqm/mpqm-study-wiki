package object_example;

public class Champion {
    public String name;
    public Integer hp;
    public Integer def;
    // 기본 생성자
    public Champion() {
        name = "챔피언";
        hp = 100;
        def = 10;
    }
    // 생성자 오버 로딩: 만약 기본 생성자 없이 선언한다면 자동 정의된 기본 생성자자 삭제
    public Champion(String inputName, Integer InputHp) {
        name = inputName;
        hp = InputHp;
        def = 10;
    }
}
