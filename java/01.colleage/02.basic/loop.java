package ch2_basicgrammar;

public class loop {

	public static void main(String[] args) {
		//1. for
		//시작과 끝의 조건이 정해져 있을 때 사용
		//실행순서: 초기값 -> 조건값 -> 명령문(for블록) -> 증감식반영 -> 조건값 -> ...
		for(int i =2 ; i< 10; i++) {
			System.out.println(i+"단");
			for(int j = 1; j<10; j++) {System.out.printf("%d * %d = %d\n", i, j, i *j);}
			System.out.println("\n");
		}
		
		//2. while
		//시작과 종료 시점이 명확하지 않고 가변적일 때나 특정 조건을 수행하는 동안 계속 반복할 때 사용
		int num = 20;
		boolean flag = true;
		while(flag) {
			System.out.println(num--);
			if(num == 3) {
				flag = false;
				System.out.println("num==3 -> 종료");
			}
		}
	}

}
