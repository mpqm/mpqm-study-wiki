package ch4_library;

import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.text.MessageFormat;

public class textpackage {

	public static void main(String[] args) {
		//1. 날짜 형식 지정 클래스
		//java.text에서는 SimpleDateFormat과 DateFormat 클래스로 좀 더 간편하게 날짜 및 시간 정보를 처리할 수 있는 기능을 제공
		//날짜 형식을 지정하는 클래스로 DateFormat과 SimpleDateFormat이 있으며, 자바 8에는 java.time API가 새롭게 추가되었다
		Date date = new Date();
		
		//DateFormat은 추상 클래스이기 때문에 인스턴스를 만들 수 없고, abstract 메서드인 getInstance( ) 메서드로 객체를 가져와 필요한 메서드를 호출해야 한다. (API참조)
		DateFormat df1 = DateFormat.getInstance();
		DateFormat df2 = DateFormat.getDateInstance(DateFormat.LONG);
		System.out.println("DateFormat 기본: " + df1.format(date));
		System.out.println("DateFormat LONG: " + df2.format(date));
		System.out.println("DateFormat TimeZone: " + df1.getTimeZone().getID());
		
		//SimpleDateFormat은 객체를 생성할 때 파라미터로 원하는 형식을 지정하고 format( ) 메서드를 호출하면 원하는 정보를 얻을 수 있다.
		SimpleDateFormat sdf1 = new SimpleDateFormat();
		SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy.MM.dd, hh:mm:a");
		System.out.println("SimpleDateFormat 기본:" + sdf1.format(date));
		System.out.println("SimpleDateFormat sdf2지정:" + sdf2.format(date));
		sdf1.applyPattern("yyyy년 MM/dd");
		System.out.println("SimpleDateFormat 변겅:" + sdf1.format(date));
		
		//2. 숫자 형식 지정 클래스
		//숫자 형식 지정은 NumberFormat과 DecimalFormat 클래스를 사용할 수 있다. 
		//날짜와 함께 숫자 역시 프로그램을 개발할 때 여러 변환이 필요한 데이터 중 하나이다. 화폐 단위를 비롯하여 자릿수 지정 등 숫자와 관련된 유용한 기능들을 제공한다
		double num1 = 35.82983;
		int num2 = 340000000;
		
		NumberFormat nf1 = NumberFormat.getInstance(); 					  //기본상태반환
		NumberFormat nf2 = NumberFormat.getIntegerInstance();			  //소수점제외 정수만올림해서 반환
		NumberFormat nf3 = NumberFormat.getCurrencyInstance(Locale.KOREA);//소수점제외 정수만올림해서 반환하고 화폐단위
		System.out.println(nf1.format(num1));
		System.out.println(nf2.format(num1));
		System.out.println(nf3.format(num1));
		nf3.setMinimumIntegerDigits(3); 								  //파라미터의 숫자만큼 정수의 기본 자릿수로 처리한다.
		System.out.println(nf3.format(num1));
		
		DecimalFormat dcf1 = new DecimalFormat();
		DecimalFormat dcf2 = new DecimalFormat("00.###");
		System.out.println(dcf1.format(num2));
		System.out.println(dcf2.format(num1));
		dcf2.applyPattern("00.####");
		System.out.println(dcf2.format(num1));
		
		//3. 메세지 형식 지정 클래스
		String msg = "{0, date}일 {0, time}에 {1}에서 {2}과 만나기로 했다";
		Object[] objs = {new Date(), "종로", "홍길동"};
		MessageFormat mf = new MessageFormat(msg);
		System.out.println(mf.format(objs));
		String from = "홍길동";
		String to = "김기동";
		String location = "HOME";
		final int CHAT_SEND = 1;
		String chatMsg = "{0}|{1}|{2}-{3}|{4}";
		System.out.println(MessageFormat.format(chatMsg, CHAT_SEND, new Date(),from, to, location));
	}
}
