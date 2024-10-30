package collection_framework;

import java.io.*;
import java.util.*;
public class memo {

	public static void main(String[] args) {
		System.out.println("간단메모장");
		System.out.print("저장할 파일명:");
		Scanner scanner = new Scanner(System.in);
		String filename = scanner.next();
		System.out.println("저장은 마지막 라인에 x입력");
		try {
			BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
			BufferedWriter writer = new BufferedWriter(new FileWriter("c://workspace/"+filename));
			String s;
			while(!(s = reader.readLine()).equals("x")) {writer.write(s+"\r\n");}
			reader.close();
			writer.close();
			scanner.close();
		}catch(Exception e) {e.printStackTrace();}
		System.out.println(filename + "저장 완료 프로그램 종료");

	}

}
