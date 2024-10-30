package ch4_library;

import java.util.Calendar;
import java.util.Date;
import java.util.Random;
import java.util.Scanner;
import java.util.StringTokenizer;
import java.util.TimeZone;

public class utilpackage {

	public static void main(String[] args) {

		//1. Date, Calendar
		//Date 클래스는 다음과 같이 인스턴스를 생성한 후 메서드를 호출하여 원하는 기능을 사용하거나 Date 클래스를 지원하는 다른 클래스에 파라미터로 전달하여 원하는 정보를 추출하는 형태로 사용한다
		Date date1 = new Date();
		Date date2 = new Date(123141245);
		System.out.println("date1: " + date1);
		System.out.println("date2: " + date2);
		System.out.println("date1, date2 비교 : " + date1.compareTo(date2));
		System.out.println(date1.after(date2));
		System.out.println(date1.before(date2));
		System.out.println(date1.getTime());
		
		//Calendar 클래스는 추상 클래스로, 객체를 생성할 수 없다. 대신 getInstance( )메서드를 사용하여 시스템의 날짜와 시간 정보를 가져온다
		Calendar cal1 = Calendar.getInstance();
		Calendar cal2 = Calendar.getInstance(TimeZone.getTimeZone("GNT + 2"));
		boolean a = cal1.equals(cal2);
		System.out.println(a);
		System.out.println("시간: "+ cal1.get(Calendar.HOUR_OF_DAY)+ ":" + cal1.get(Calendar.MINUTE));
		System.out.println("시간: "+ cal2.get(Calendar.HOUR_OF_DAY)+ ":" + cal2.get(Calendar.MINUTE));
		cal2.set(12,12,12, 12, 12);
		System.out.println("시간: "+ cal2.get(Calendar.HOUR_OF_DAY)+ ":" + cal2.get(Calendar.MINUTE));
		
		//2. Scanner
		//Scanner 클래스는 입력 스트림으로, 데이터를 입력받는 클래스이다. 
		//고급 입출력은 자바 I/O에서 제공하는 클래스들을 사용해야 하며, Scanner 클래스는 상대적으로 간단한 입력을 처리하는 데 사용한다. 
		//객체를 생성할 때 입력 스트림을 변경하면 키보드 외의 파일, 네트워크 등에서 데이터 입력을 받아올 수 있다
		Scanner scan = new Scanner(System.in);
		String msg = scan.next();
		System.out.println("입력: " + msg);
		int num = scan.nextInt();
		System.out.println("입력: " + num);
		
		//3. Random
		//Random 클래스는 난수를 생성하는 클래스이다. 
		//일련의 규칙에 따라 난수를 생성하는 관계로, 객체를 생성할 때 현재 시간 정보를 시드(Seed)로 하여 더 유용한 난수 생성이 가능하다. 난수 생성 범위를 지정하면 0부터 시작하므로 1부터 시작해야 할 때는 생성된 난수에 1을 더하도록 한다.
		Random r1 = new Random();
		Random r2 = new Random(123);
		Random r3 = new Random(123);
		Random r4 = new Random(System.currentTimeMillis());
		System.out.println("## 기본 난수 출력 ##");
		System.out.println("r1: "+ r1.nextInt(10));
		System.out.println("r2: "+ r2.nextInt(10));
		System.out.println("r3: "+ r3.nextInt(10));
		System.out.println("r4: "+ r4.nextInt(10));
		System.out.println("1~20: " + (r1.nextInt(20)+1));
		
		//4. StringTokenizer
		//StringTokenizer 클래스는 구분자로 연결된 문자열을 손쉽게 분리(파싱)하는 클래스이다. 
		//일반적으로 구분자에는 공백, 콤마, 탭 등을 많이 사용한다. 특히 콤마로 구분된 데이터는 csv 포맷이라고 하여 엑셀과도 호환된다.
		//기본적으로 다음과 같이 인스턴스를 생성할 때 파싱할 문자열과 구분자를 지정한 후 nextToken( ) 메서드를 사용하여 차례대로 데이터를 가져온다
		String data ="홍길동, 010-123-1234, 서울시 종로구, 학생";
		StringTokenizer st = new StringTokenizer(data, ",");
		System.out.println("개인 정보 출력");
		System.out.println("이름:" + st.nextToken());
		System.out.println("전화번호1:" + st.nextToken());
		System.out.println(st.hasMoreTokens());
		System.out.println("주소:" + st.nextToken());
		System.out.println("직업:" + st.nextToken());
	}

}


