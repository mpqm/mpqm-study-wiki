package ch4_library;

import java.util.Scanner;

public class langpackage {

	public static void main(String[] args) {
		//1. String class
		//String 클래스는 문자열 처리를 위한 클래스로, 자바에서 문자열은 기본 자료형이 아니라 클래스를 사용하는 객체 타입
		//String 클래스는 손쉽게 문자열을 결합할 수 있다, 문자열을 출력하거나 결합하는 데 사용
		//대입형으로 선언된 동일 문자열에서는 하나의 인스턴스만 유지
		//반복문을 사용하여 문자열을 기존 변수에 계속 더하는 구조는 프로그램 성능에 영향을 미칠 수 있기 때문에 이때는 java.lang.StringBuffer 클래스 사용을 권장
		//문자열을 비교할 때는 ‘==’ 이 아닌 equals( ) 메서드를 사용
		//변수에 대입하는 형태나 new 연산자로 인스턴스를 생성하여 사용할 수 있다
		String str1 = "hello";
		String str2 = "hello";
		String str3 = new String("hello");
		String str4 = String.valueOf(30);
		//String str4 = new String(30);으로 처리하면, 데이터형이 맞지않아 오류
		String a1 = "20";
		
		System.out.println("num1+30 = " + a1 + 30); 				//2030
		if(str1 == str2) System.out.println("str1과 str2는 같습니다.");
		else System.out.println("str1과 str2는 같지 않습니다.");
		if(str1 == str3) System.out.println("str1과 str3는 같습니다.");//str4는 다른객체로 생성
		else System.out.println("str1과 str3는 같지 않습니다.");
		if(str1.equals(str3))System.out.println("str1과 str3는 같습니다.");
		else System.out.println("str1과 str3는 같지 않습니다.");
		System.out.println("str1의 길이: " + str1.length());
		System.out.println("str1의 4번째 문자 : " + str1.charAt(4));
		System.out.println("str1의 2~4 위치에 있는 문자열 : " + str1.substring(1,4));
		System.out.println("str1의 1을 k로 치환 : " + str1.replace('l', 'k'));

		
		//1-1. String Buffer class
		//StringBuffer 클래스는 성능에 영향을 받지 않고 문자열 처리를 하는 클래스이다. 긴 문자열 조합은 문자열 더하기 대신 StringBuffer를 사용하는 것이 좋다.
		//StringBuffer에 값 추가할 때는 append( ) 메서드를 사용
		
		//느린방법
		String str = "문자열";
		for(int i = 0; i < 50; i++) str = str + i;
		System.out.println(str);
		
		//빠른방법
		StringBuffer sb = new StringBuffer();
		sb.append("문자열");
		for(int i = 0; i < 50; i++) sb.append(i);
		System.out.println(sb.toString());
		
		
		//2. Wrapper
		//자바의 기본 자료형을 객체 타입으로 처리할 수 있도록 만든 클래스
		//기본 자료형에 대응하는 클래스들이 모두 준비되어 있고 각 Wrapper 클래스와 매핑되는 데이터 타입과 관련된 유용한 기능들을 제공
		
		//2-1. Wrapper 클래스의 사용법
		//Wrapper 클래스는 String과 같이 변수에 대입하는 형태로 사용하거나 new를 이용하여 새로운 객체를 생성하는 형태로 사용한다
		Integer num1 = new Integer(30);
		Integer num2 = num1.intValue();
		
		//자바에서는 Wrapper 클래스에 오토 박싱과 언박싱을 지원한다
		Integer num3 = 50;
		int num4 = num3;
		String num5 = "40";
		String str5 = "50";
		System.out.println("num3: " + num3);
		System.out.println("num4: " + num4);
		System.out.println("num5: " + num5);
		int result = num3 + Integer.parseInt(num5);
		System.out.println("num3 + num5 = " + result);
		String result1 = num3 + str5.valueOf(str5);
		System.out.println("result1: " + result1);
		System.out.println("MAX_VALUE: " + Integer.MAX_VALUE);
		System.out.println("SIZE: " + Integer.SIZE);
	}
}
