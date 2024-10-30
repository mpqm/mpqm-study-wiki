package collection_framework;
import java.io.*;


public class javaio1 {

	public static void main(String[] args) {
		//1. 자바 I/O 프로그래밍의 기본 개념
		//I/O는 Input/Output, 즉 입력과 출력을 말한다. 자바에서는 java.io 패키지로 다양한 입출력기능을 제공
		//스트림(Stream)은 입출력 장치와 프로그램 간 데이터 전송 통로를 말한다. 
		//단방향 통신을 제공하기 때문에 입력과 출력을 처리하려면 두 개의 스트림이 필요하다.
		//스트림은 연속된 데이터 흐름으로, 입출력 처리를 진행하는 동안에는 프로그램이 다른 작업을 할 수 없는 블로킹(Blocking) 상태가 된다. 이 문제를 해결하려면 스레드를 사용하거나 논블로킹(Non-blocking) I/O 클래스를 사용해야 한다.
		//데이터 입력과 출력의 대상을 변경하기도 편하다. 이론적으로는 입출력 스트림을 다른 장치의 입출력 스트림으로 변경하면 프로그램의 다른 부분을 수정하지 않아도 된다. 
		//스트림은 크게 문자 스트림과 바이트 스트림으로 구분한다. 
		//InputStream, OutputStream: 1바이트 단위의 데이터를 처리
		//Reader, Writer의 문자 스트림: 16비트 2바이트 기준 문자를 기본 처리 단위로 가짐
		
		//2. 바이트스트림 입출력
		InputStream in = System.in;   //입력스트림
		OutputStream out = System.out;//출력스트림

		try {
			int input = in.read();    //17입력시 1바이트만 들어간다(1)
			System.out.println(input);
			out.write(input);		  //1을 아스키코드로 표현한것(49)을 출력한다.
			out.close();			  //출력종료하면서 버퍼에있는 1값을 출력		  
		}catch (IOException e) {
			e.printStackTrace();
		}
	}

}
