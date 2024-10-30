import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class jv27_stream {
    public static void main(String[] args) {
        // Stream API
        // 데이터를 처리하는데 자주 사용되는 함수들을 정의
        // 데이터를 추상화하여 다양한 방식으로 저장된 데이터를 읽고 쓰기 위한 공통된 방법을 제공
        // Stream API 특징
        //   원본 데이터 변경 X
        //   재사용이 가능한 컬렉션과는 다르게 단 한 번만 사용
        //   병렬처리를 지원하기 때문에 성능이 더 좋음
        // Stream API 사용방법: 스트림 생성 -> 중개 연산(필터, 맵) -> 최종 연산
        List<String> list = new ArrayList<String>();
        list.add("사과");
        list.add("수박");
        list.add("참외");
        List<String> filteredNames2 = new ArrayList();
        list.forEach((fruit) -> { if(fruit.startsWith("수")) { filteredNames2.add(fruit); } });
        System.out.println(filteredNames2);
        List filteredNames = list
                .stream() // 스트림 생성
                .filter(name -> name.startsWith("수")) // 중개 연산
                .collect(Collectors.toList()); // 최종 연산
        System.out.println(filteredNames);

        // 스트림 생성
        // 컬렉션, 배열, 람다식, 파일, 빈 스트림 등
        // Stream<String> stream1 = list.stream();
        // Stream stream2 = Stream.iterate(2, n -> n + 2);
        // Stream<Object> stream3 = Stream.empty();

        // 중개 연산: filter(), distinct(), map(), sorted(), peek()
        IntStream stream1 = IntStream.of(7, 5, 5, 2, 1, 2, 3, 5, 4, 6);
        stream1.filter(n -> n % 2 != 0).forEach(e -> System.out.print(e + " "));
        System.out.println();
        // stream은 한번쓰면 끝이기 때문에 또 쓸꺼면 다시 만들어야함
        stream1 = IntStream.of(7, 5, 5, 2, 1, 2, 3, 5, 4, 6);
        stream1.distinct().forEach(e -> System.out.print(e + " "));
        System.out.println();
        stream1 = IntStream.of(7, 5, 5, 2, 1, 2, 3, 5, 4, 6);
        stream1.filter(n -> n % 2 != 0).distinct().forEach(e -> System.out.print(e + " "));
        System.out.println();

        // 최종 연산
        // foreach(), collect(), count(), min(), max(), sum(), average()
        // findAny(): 병렬처리할 때 사용
        stream1 = IntStream.of(7, 5, 5, 2, 1, 2, 3, 5, 4, 6);
        Integer result = stream1.filter(n -> n % 2 != 0).sum();
        System.out.println(result);
    }
}
