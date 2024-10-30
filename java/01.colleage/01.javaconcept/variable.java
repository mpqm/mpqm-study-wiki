package ch1_javaconcept;

public class variable {
	//1. 변수의 개념과 선언
    //프로그래밍 언어에서 변수는 다양한 정보를 저장할 수 있는 메모리를 참조하는 객체
    //자바 컴파일러가 명시적으로(변수가 정수인지 실수인지 자료형 정확하게 지정) 자료형을 선언한 변수만 처리할 수 있음
    //다양한 형태의 선언방법
    //Product product;        클래스를 변수로 선언하는 방법
	//int a; 			      변수만선언
	//int a = 1;			  변수를 선언하고 동시에 초깃값 대입
	//int a, b, c;            동일 자료형 변수를 한 번에 선언
	//int a, b, c = 1;		  c변수만 1로 초기화하고 a,b는 초깃값 대입 안됨
	//int a = 1, b = 2, c =3; 동일 자료형 변수를 한번에 선언하면서 서로 다른 값으로 초깃값 대입

	//2. 변수이름규칙 : 길이제한x, 연산자x, 첫글자에 숫자x, 이름사이에빈칸x, 자바키워드x, 반드시 문자, 언더바, 달러기호로시작, 빈칸사용시(_), 대소문자의 구분

	//3. printf()의 형식 문자와 자료형
	//문자형(%c), 8진수(%o), 정수형(%d, %i), 문자열(%s), 지수형(%e), 부호없는 정수형(%u), 실수형(%f), 16진수(%x), %문자출력(%%, \%) 

	//4. 기본자료형
	//정수형 : byte(1byte, -2^7 ~ 2^7-1), char(2byte, 0 ~ 2^16-1), short(2byte, -2^15 ~ 2^15-1), int(4byte, -2^31 ~ 2^31-1), long(8byte, -2^63 ~ 2^63-1)
	//실수형 : float(4byte, 1.4E^-46 ~ 3.102823E^38), double (8byte, 4.9E^324 ~ 3.402823E^308)
	//논리형 : boolean (1byte, true or false)
	
	//5. 자바 변수 유형
	//인스턴스 변수: 자바 객체의 개별적인 값을 저장하는 데 사용하는 변수
	//클래스 변수: static 한정자 Modifier를 가진 멤버 변수로 "클래스이름.변수이름"의 형태로 접근
	//지역 변수: 메서드 안에 선언하는 변수로, 해당 메서드 안에서만 접근할 수 있는 변수
	//파라미터: 메서드의 인자로 전달하는 변수를 말하며, 기본적으로는 지역 변수에 준해서 사용
	
	public static void main(String[] args) {
		
		byte byte1 = 'A';
		System.out.printf("byte1 숫자 : %d\n", byte1);          //65
		System.out.printf("byte1 문자 : %c\n", byte1);		   //A
		
		char char1 = 66;  
		//System.out.printf("char1 문자 : %d\n", char1);        //오류! 문자자료형은 정수형으로 받을수없음
		System.out.printf("char1 문자 : %c\n", char1);          //B
		
		short short1 = '}'; 
		System.out.printf("short1 숫자 : %d\n", short1);        //125
		System.out.printf("short1 문자 : %c\n", short1);		   //}
		
		int int1 = byte1 + char1;
		System.out.printf("int1 숫자 : %d\n", int1);            //65+66=131
		System.out.printf("int1 문자 : %c\n", int1);            //?
		System.out.printf("int1 8진수 : %o\n", int1);           //203
		System.out.printf("int1 16진수 : %x\n", int1);		   //83
		
		long long1 = 6876543210L;                              //long표현 L
		System.out.printf("long1 숫자 : %d\n", long1);          //6876543210
		
		float float1 = 32.87f;   							   //float표현 f,F
		System.out.printf("float1 숫자 : %f\n", float1);   	   //32.87
		
		double double1 = 3.14E5; 						       //E5, 지수형표현법 *^10*N(5)
		System.out.printf("double1 숫자 : %f\n", double1); 	   //314000.000000
		System.out.printf("double1 지수형표현법 : %e\n", double1);//3.14e+05
		
		boolean boolean1 = true;
		System.out.printf("boolean1 문자 : %s\n", boolean1);	   //true
	}
	
}

