package collection_framework;
//1. 네트워크 프로그래밍의 개요
//컴퓨터와 컴퓨터를 연결한 망형 조직으로, 기업 내 컴퓨터들을 연결한 랜(LAN)에서 부터전 세계를 하나로 연결한 인터넷까지 모두 네트워크라고 할 수 있다.
//TCP/IP 통신 프로토콜을 사용하는 컴퓨터 네트워크가 가장 일반적
//클라이언트와 서버: 서버는 서비스를 제공하는 쪽을 말하고, 클라이언트는 서비스를 이용하는쪽을 말한다.
//포트: 포트는 서버에서 자신의 컴퓨터에 접속하는 입구를 구분하는 데 사용하는 번호를 말한다.
//소켓: 소켓은 TCP/IP 네트워크에서 클라이언트와 서버를 연결하는 통로를 말한다. 
//HTTP: HTTP는 Hyper Text Transfer Protocol의 약어로, 웹의 통신 프로토콜을 말한다 웹 브라우저와 웹 서버가 통신하는 데 필요한 메시지 규격
//메시지: 메시지는 네트워크 프로그램에서 클라이언트와 서버가 주고받는 일련의 데이터를 말하며, 클라이언트가 서버에 요구하는 의미있는 명령 등도 메시지의 범주에 포함된다

//2. TCP/IP 소켓 프로그래밍
//TCP/IP는 Transmission Control Protocol/Internet Protocol의 약어로, 네트워크 시스템의 체계를 정리한 통신 프로토콜을 말한다

//3. Socket/ServerSocket 프로그래밍의 구조
//Socket 클래스: 클라이언트에서 서버에 접속하는 데 필요
//ServerSocket 클래스: 프로그램이 서버로 동작하면서 클라이언트의 연결을 받는데 필요

//4. 소켓 프로그램의 동작과정
//서버는 ServerSocket 클래스 객체를 생성하고 클라이언트 연결을 기다린다.
//클라이언트는 Socket 객체를 생성하여 서버에 접속한다.
//서버는 클라이언트 접속을 받아들이고, 이를 처리하는 Socket 객체를 생성한다.
//클라이언트와 서버 모두 Socket 객체에서 입출력 스트림을 확보한다.
//이후 클라이언트와 서버는 정해진 프로토콜로 요청/응답을 반복한다.
//종료 상황이 발생하면 스트림과 소켓을 모두 닫고 프로그램을 종료한다.
import java.io.*;
import java.net.*;

public class TCPServer {
	

	public static void main(String[] args) {
		try {
			ServerSocket sc = new ServerSocket(5000);
			System.out.println("서버실행");
			while(true) {
					Socket s = sc.accept();
					BufferedReader br = new BufferedReader(new InputStreamReader(s.getInputStream()));
					System.out.println("클라이언트 연결");
					System.out.println("클라이언트 메세지: "+br.readLine());
					br.close();
				}
			}catch(Exception e) {
				e.printStackTrace();
			}

	}

}
