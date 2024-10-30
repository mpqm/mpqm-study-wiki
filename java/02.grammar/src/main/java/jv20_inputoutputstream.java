import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStreamReader;

public class jv20_inputoutputstream {
    public static void main(String[] args) {
        // 입출력 스트림: 스트림 = 통로, 하드웨어 장치와의 통로(모니터, 랜카드, 하드디스크)
        // 파일 스트림: FileInputStream(입력) / FileOutputStream(출력)
        // 파일 읽고 쓰기
        try {
            FileInputStream fileInputStream = new FileInputStream("c:\\workspace\\java\\java_grammer\\z\\test.txt");
            byte[] result = fileInputStream.readAllBytes();
            FileOutputStream fileOutputStream = new FileOutputStream("c:\\workspace\\java\\java_grammer\\z\\testout.txt");
            for (int i = 0; i < result.length; i++) { fileOutputStream.write(result[i]); }
        } catch (Exception e) { e.printStackTrace();}
        System.out.println("\n");
//        // args로 입력받기
//        try {
//            FileInputStream fileInputStream = new FileInputStream(args[0]);
//            byte[] result = fileInputStream.readAllBytes();
//            FileOutputStream fileOutputStream = new FileOutputStream(args[1]);
//            for (int i = 0; i < result.length; i++) { fileOutputStream.write(result[i]);}
//        }
//        catch (Exception e) { e.printStackTrace(); }
        // 파일 읽기 한 글자 씩
        try {
            FileInputStream fileInputStream = new FileInputStream("c:\\workspace\\java\\java_grammer\\z\\test.txt");
            byte[] result;
            result = fileInputStream.readAllBytes();
            for (int i = 0; i < result.length; i++) { System.out.print((char)result[i]); }
        } catch (Exception e) { e.printStackTrace(); }
        System.out.println("\n");
        // 파일 읽기 BufferReader 사용 빠름
        try {
            // 파일과의 통로를 열어서 바이트 단위로 데이터를 읽어오는 객체
            FileInputStream fileInputStream = new FileInputStream("c:\\workspace\\java\\java_grammer\\z\\test.txt");
            // 글자 단위로 데이터를 읽어오는 스트림, UTF-8과 같은 글자 인코딩 형식 지정 가능
            InputStreamReader reader = new InputStreamReader(fileInputStream, "UTF-8");
            // 데이터를 하나 읽고 바로 하나를 처리하는게 아니라 버퍼에 모았다가 일정 크기가 되면 처리
            BufferedReader br = new BufferedReader(reader);
            int result;
            while((result = br.read()) != -1) { System.out.print((char)result); }
            //역순닫기
            br.close();
            reader.close();
            fileInputStream.close();
        }
        catch (Exception e) { e.printStackTrace(); }
    }
}