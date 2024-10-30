import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import java.util.Map;

public class jv23_2_map {
// 설정 파일 양식
// yml
//   server:
//   port: 80
//   addr: 192.168.0.100
//   client:
//       - test01
//	     - test02
//	     - test03
// 웹
// x-www-form-urlencoded
//         id=test01&pw=qwer1234

    // 데이터를 전달하기  위한 양식
// XML
//   <members>
//   <member><name>test01</name><age>10</age><id>test01@test.com</id></member>
//   <member><name>test02</name><age>20</age><id>test02@test.com</id></member>
//   </members>
// JSON
//   members:[{member: {name:test01, age:10, id:test01@test.com}},{member: {name:test02, age:20, id:test02@test.com}}]}
    public static void main(String[] args) throws IOException {
        // 요청을 보낼 URL을 정의
        URL url = new URL("https://store.ohou.se/api/home/module/6618e15779abdc629cb40806");
        // URL에 대한 연결을 염
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        // HTTP 요청 방식을 POST로 설정
        connection.setRequestMethod("POST");
        // 요청 본문에 데이터를 전송할 수 있도록 함
        connection.setDoOutput(true);
        // 요청의 컨텐츠 타입을 JSON으로 설정
        connection.setRequestProperty("Content-Type", "application/json");
        String jsonInputString = "{\"request_token\":\"CAoSBggOEgIICCIECBQQAirJAQoCCAQSwgEKGDY0ZGIxZTUyZjI1MjlhMGNiYjk4MGQ0NhJVCAQqURIZChfsmKTripjsnZgg7LaU7LKcIOyDge2SiCABKjIKDwoFCgMxLjASBgoEMi41NhIPCgUKAzEuMBIGCgQ0LjE3Gg4KBQoDMS4wEgUKAzQuMBoGCAUSAggDKkcKEENBUVNCZ2dGRWdJSUF3PT0aGAgBEAEaByNGN0Y5RkEiBDEwLjAqAzAuMCIZ7Iqk7Yag7Ja07ZmIIOykkeqwhOq0keqzoCqrAQoCCAwSpAEKGDY0ZGIxZTU0ZjI1MjlhMGNiYjk4MGQ3MRI4CAIaNBIyCg4KBQoDMi4wEgUKAzUuMBIPCgUKAzEuMBIGCgQxMC4wGg8KBQoDMS4wEgYKBDEwLjAaBggCEgIIASpGChBDQUlTQmdnQ0VnSUlBUT09GhgIARABGgcjRjdGOUZBIgQxMC4wKgMwLjAiFuyKpO2GoOyWtO2ZiCDtgLXrqZTribQoASrjAQoCCBQS3AEKGDY0ZGIxZTU0ZjI1MjlhMGNiYjk4MGQ3MhJ6CAQqdhIOCgzsmKTripjsnZjrlJwaMAojCiFodHRwczovL3N0b3JlLm9ob3Uuc2UvdG9kYXlfZGVhbHMSCeuNlOuztOq4sCoyCg8KBQoDMS4wEgYKBDIuNTYSDwoFCgMxLjASBgoENC4xNxoOCgUKAzEuMBIFCgM0LjAaBggEEgIIAio8ChBDQVFTQmdnRUVnSUlBZz09EAEaGAgBEAEaByNGN0Y5RkEiBDEwLjAqAzAuMCIM7Jik64qY7J2Y65ScKtQBCgIILBLNAQoYNjRkYjFlNTJmMjUyOWEwY2JiOTgwZDRhEmcICVJjEiMKIeyHvO2VkSDsi6Tsi5zqsIQg7J246riwIOqygOyDieyWtBoUChIwNi4wMyAxNOyLnCDquLDspIAiJgoOCgUKAzUuMBIFCgMyLjASDgoFCgM1LjASBQoDMi4wGgQKABIAGgYIChICCAkqQAoQQ0FrU0JnZ0tFZ0lJQ1E9PRABGhgIARABGgcjRjdGOUZBIgQxMC4wKgMwLjAiEOyduOq4sCDqsoDsg4nslrQyGwoXZjVmeVR5SjNOTExHRHNZY0JOTDhmM04QFA\"}";
        // 서버로 전송할 JSON 형식의 문자열을 정의
        try(OutputStream os = connection.getOutputStream()) {
            // JSON 문자열을 바이트 배열로 변환
            byte[] input = jsonInputString.getBytes("utf-8");
            // 변환된 바이트 배열을 출력 스트림을 통해 전송
            os.write(input, 0, input.length);
        }
        // 서버로부터 받은 HTTP 응답 코드를 가져옴
        int responseCode = connection.getResponseCode();
        // 응답 코드를 콘솔에 출력
        System.out.println("Response Code : " + responseCode);
        // 서버로부터의 응답을 읽기 위한 BufferedReader를 생성
        BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        String inputLine;
        // 서버 응답을 저장할 StringBuffer 객체를 생성
        StringBuffer response = new StringBuffer();
        // 서버 응답의 끝까지 한 줄씩 읽어 들임, 읽은 데이터를 StringBuffer 객체에 추가
        while ((inputLine = in.readLine()) != null) { response.append(inputLine); }
        // BufferedReader를 닫아 리소스를 해제
        in.close();
        // 받은 JSON 응답을 콘솔에 출력
        System.out.println(response.toString());
        // 10번 상품의 이름과 가격 3가지 출력하기
        ObjectMapper objectMapper = new ObjectMapper();
        // Map 형태로 바꿔서 Map 변수에 저장
        Map<String, Object> jsonMap = objectMapper.readValue(response.toString(), new TypeReference<Map<String, Object>>() {});
        Map<String, Object> jsonMap2 = (Map<String, Object>)jsonMap.get("content");
        List<Object> jsonList = (List<Object>)jsonMap2.get("slots");
        Map<String, Object> jsonMap3 = (Map<String, Object>)jsonList.get(10);
        Map<String, Object> jsonMap4 = (Map<String, Object>)jsonMap3.get("goods");
        System.out.println(jsonMap4.get("name"));
        Map<String, Object> jsonMap5 = (Map<String, Object>)jsonMap4.get("price");
        System.out.println(jsonMap5.get("originalPrice"));
        System.out.println(jsonMap5.get("sellingPrice"));
        System.out.println(jsonMap5.get("discountRate"));
    }
}
