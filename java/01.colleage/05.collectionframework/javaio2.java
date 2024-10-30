package collection_framework;
import java.io.*;
public class javaio2 {

	public static void main(String[] args) {

		//InputStreamReader in1 = new InputStreamReader(System.in);
		BufferedReader in1 = new BufferedReader(new InputStreamReader(System.in));
		OutputStreamWriter out1 = new OutputStreamWriter(System.out);
		
		try {
			//int input = in1.read();
			String input = in1.readLine();
			System.out.println(input);
			out1.write(input);
			out1.close();
		}catch (IOException e) {
			e.printStackTrace();
		}
	}

}

