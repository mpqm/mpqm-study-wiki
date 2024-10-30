package ch2_basicgrammar;

public class operator{

	public static void main(String[] args) {
		// 1. 산술연산자의 사용
		//산술 연산을 수행할 때는 적절한 자료형을 사용하는 것이 매우중요
		int num1 = 30;
		int num2 = 14;
		num2 *= 2;
		System.out.printf("num1 * num2 : %d \n", num1 * num2);//840
	    System.out.printf("num1 : %d \n", num1++);      	  //30
	    System.out.printf("num2 : %d \n", num2++);            //28
	    System.out.printf("num1++ : %d \n", num1);            //31
	    System.out.printf("num2++ : %d \n", num2);            //29
	    System.out.printf("--num1 : %d \n", --num1);          //30
	    System.out.printf("--num2 : %d \n", --num2);	      //28

	    //2. 자동형변환
	    //산술연산을 수행할때 기본적으로 피연산자 중에서 자료형이 큰 쪽을 따라 결과를 출력 
	    int num3 = 313;
	    long num4 = 15L;
	    long result1 = num3 * num4; 
	    long result2 = num3 / num4; 
	    double result3 = num3 / num4; 
	    double result4 = num3 / 15.0;
	    System.out.printf("result1 : %d \n", result1);  //4695
	    System.out.printf("result2 : %d \n", result2);  //20
	    System.out.printf("result3 : %f \n", result3);  //20.000000
	    System.out.printf("result4 : %.3f \n", result4);//20.867, 소수점 3번째까지 반올림 표현(%.3f)
	  
	    //3. 오버플로우
	    //주어진 자료형의 범위를 넘을 때 발생하는 현상 
	    int result7 = 1000000 * 1000000;
	    System.out.printf("오버플로우 %d\n", result7);
	  
	    //4. 언더플로우
	    //해당 자료형에서 처리할 수 있는 가장 작은 수보다 더 작은 결과를 처리할때 발생 
	    int result8 =-1000000 * 1000000; 
	    System.out.printf("언더플로우 %d\n", result8);
	  
		//5. 논리연산자
	    boolean member = true;     
		boolean newmember = false; 
	 	int earn = 5000; 		   
	 	char creditgrade = 1;      
		boolean memcheck1 = (member == true && earn >= 5000 && creditgrade <= 5);              //&&
		boolean memcheck2 = (member == true || earn >= 5000 || creditgrade <= 5);              //||
		String result9 = (memcheck1 && memcheck2 && !newmember) ? "제휴카드발급" : "제휴카드 발급거절";//삼항연산자(if-else구문 대체), !
		System.out.println(result9);

		//6. 비트논리연산자
		int pwd = 123456;
		int key = 0x1A253B65;
		System.out.println("암호화 전 비밀번호 : " + pwd);   //123456
		int encpwd = pwd ^ key;						    //^
		System.out.println("암호화 알고리즘 ^ : " + encpwd);//438622501
		int decpwd = encpwd ^ key;						
		System.out.println("복호화 후 비밀번호 : " + decpwd);//123456
		int num5 = 50;
		int num6 = 20;
		System.out.printf("num5, num6 : %s, %s\n", Long.toBinaryString(num5), Long.toBinaryString(num6));//50, 110010, long.toBinaryString()(변수를 바이너리형식으로 문자열반환)
		int result10 = num5 >> 1;														   				 //>>, 나누기 2와 같음
		System.out.printf("num5 >> 1 : %d, %s\n", result10, Long.toBinaryString(result10));				 //25, 11001
		int result11 = num5 << 1;														   				 //<<곱하기 2와 같음
		System.out.printf("num5 << 1 : %d, %s\n", result11, Long.toBinaryString(result11));				 //100, 1100100
		int result12 = num5 & num6;														   				 //&
		System.out.printf("num5 & num6 : %d, %s\n", result12, Long.toBinaryString(result12));			 //16, 10000
		int result13 = num5 | num6;																		 //|
		System.out.printf("num5 | num6 : %d, %s\n", result13, Long.toBinaryString(result13));			 //54, 110110
		
		//7. 연산자 우선순위
		//[], () -> !, ~, +/-, ++/--, (cast) -> + -, *, /, %, -> <<, >>, >>> -> <, >, <=, >=, ==, != -> &, ^, | -> &&, || -> [조건식] ? [true]:[false] -> =, +=, -=, *=, /=, %=, <<=, >>=, ^=, &=, !=, -> ++/--(후위형 증감 연산자) 
		 

	}

}
