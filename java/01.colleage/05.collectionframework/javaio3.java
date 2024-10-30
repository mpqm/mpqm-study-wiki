package collection_framework;

import java.io.*;

public class javaio3 {

	public static void main(String[] args) {
		//1. 파일 입출력 개요
		//파일과 디렉터리: 파일은 컴퓨터에서 가장 기본이 되는 중요한 입출력 대상이다. 컴퓨터의 특성상 메모리에 저장된 데이터는 컴퓨터 전원이 꺼지면 사라지므로, 모든 프로그램은 어떤 형태로든 파일을 사용한다.
		//디렉터리는 파일을 체계적으로 관리하려는 것으로, 폴더라고도 한다. 디렉터리의 최상위를 루트라고 하며, 유닉스 계열은 ‘/’, MS 윈도우는 ‘\’를 디렉터리 구분자로 사용한다
		//랜덤 액세스: 파일 중간의 특정 위치에 읽거나 쓰기 위해 랜덤 액세스라는 파일의 임의 지점에 접근하는 방법이 필요하다. RandomAccessFile이나 SeekableByteChannel Interface를 구현한 클래스를 사용할 수 있다.
		//권한: 모든 파일은 운영체제를 이용하여 권한을 설정할 수 있다.
		//심볼릭 링크: 심볼릭 링크는 파일의 물리적인 위치를 다른 이름으로 접근할 수 있도록 한 것이다. (예: MS 윈도우의 바로가기)
		
		
		//2. 파일 생성하고 쓰기
		String path = "c://workspace/tmpfile.txt";
		File file = new File(path);
		try {
			FileWriter fw = new FileWriter(file);
			for(int i = 'A'; i <= 'Z'; i++) {
				fw.write(i);
			}
			fw.close();
			System.out.println("Done...");
		}catch(IOException e) {
			e.printStackTrace();
		}
		
		//3. 문자 스트림을 사용하여 파일 읽고쓰기
		File rfile = new File("C://workspace/tmpfile.txt");
		File wfile = new File("C://workspace/tmpfile_new.txt");
		try{
			BufferedReader reader = new BufferedReader(new FileReader(rfile));		
			BufferedWriter writer = new BufferedWriter(new FileWriter(wfile));
			String s;
			while((s = reader.readLine())!=null){
			writer.write(s+"-라인종료");
			}
			reader.close();
			writer.close();
			rfile.delete();
			}catch(Exception e) {
			e.printStackTrace();
		}
		System.out.println("Done...");

	}

}
