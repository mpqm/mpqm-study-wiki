//13
package ch3_object_oriented;

public class method {
	
	static int num1 = 10; //클래스변수(static 변수)
	int num2 = 10;  	  //인스턴스 변수
	
	//메서드 오버로딩 상속x, 이름같고 파라미터 종류, 개수다름
	public int sum(int num1, int num2) { //이름이 같은 메서드1 
		return num1 + num2;
	}
	public int sum(int num1, int num2, int num3) {//이름이 같은 메서드2
		return num1 + num2 + num3;
	}
	
	//메서드 오버라이딩: 슈퍼클래스의 메서드와 메서드 구성요소가 모두 동일, 이름,파라미터,리턴타입이 모두같아야함
	@Override
	public String toString() {
		return "메서드 오버라이딩";
	}
	
	
	public static void main(String[] args) {
		method ex1 = new method();
		method ex2 = new method();
		
		ex1.num1 = 20;
		ex2.num1 = 30;
		System.out.println("ex1.num1=" + ex1.num1);
		System.out.println("ex2.num2=" + ex2.num1); //최종 계산값인 30저장 클래스변수(static변수)의 특징
		ex1.num2 = 30;
		ex2.num2 = 50;
		System.out.println("ex1.num1=" + ex1.num2); //인스턴스변수는 따로저장되기때문에 30
		System.out.println("ex2.num2=" + ex2.num2); //인스턴스변수는 따로저장되기때문에 50
		
		System.out.println(ex1.sum(3,5)); //메서드 오버로딩
		System.out.println(ex1.sum(3,5,8)); //메서드 오버로딩
		System.out.println(ex1.toString()); //메서드 오버라이딩, 재정의된 코드
		System.out.println(ex2.toString()); //메서드 오버라이딩
	}
}
