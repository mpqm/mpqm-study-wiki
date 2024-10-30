package collection_framework;

import java.io.*;
import java.net.*;

public class TCPclient {

	public static void main(String[] args) {
		try {
			Socket s = new Socket("127.0.0.1", 5000);
			System.out.println("클라이언트 실행");
			PrintWriter pw = new PrintWriter(new OutputStreamWriter(s.getOutputStream()));
			pw.println("안녕하세요? 클라이언트 입니다.");
			pw.close();
			s.close();
			System.out.println("클라이언트 종료");
		}catch(Exception e) {
			e.printStackTrace();
		}

	}

}
