import object_example.Student2;

import java.util.*;

public class jv23_collection {
    public static void main(String[] args) {
        // 컬렉션 프레임워크
        // 프로그래밍에서 많이 사용되는 자료 구조(스택, 큐, 리스트, 트리, 해시 등)를 자바에서 미리 구현해둔 것
        // 인터페이스와 다형성을 이용해서 구현했기에 각 컬렉션들의 메소드가 대부분 비슷

        // Collection 인터페이스의 메소드
        // add(): 데이터 추가
        // remove(): 데이터 삭제
        // size(): 저장된 데이터의 수
        // contains(): 데이터가 있는지 확인
        // isEmpty(): 데이터가 없는지 확인
        // iterator(): 컬렉션의 반복자를 반환, 일반적으로 반복문과 함께 사용

        // Iterable 인터페이스
        // Collection 인터페이스 또는 Map 인터페이스를 상속받아서 구현한 구현체들
        // ArrayList, HashMap, HashSet
        // 다형성: 상위클래스이름 변수이름 = new 하위클래스이름();

        // ArrayList
        // 내부적으로 배열을 사용해서 데이터를 저장 / 처음에 만들 때는 데이터의 크기가 정해져있음
        // 데이터를 저장하면서 추가 공간이 필요하면 새로운 공간을 만들고 기존의 값을 복사
        // 데이터 순서 유지 / 중복 O / 조회 빠름 / 중간 삽입, 삭제 느림 / 순차적 삽입, 삭제 빠름 / 스레드들끼리 동기화 X
        List<Integer> a101 = new ArrayList();
        // add()
        a101.add(10);
        a101.add(20);
        a101.add(30);
        a101.add(40);
        // size: 실제 저장된 데이터의 크기
        System.out.println(a101.size());
        // capacity: 실제 내부적인 데이터 저장 공간의 크기 기본값은 10 / Reflection을 이용해 볼 수 있음
        // System.out.println(getCapacity(a101));
        // remove()
        a101.remove(1);
        a101.remove(Integer.valueOf(10));
        // 출력(전체)
        System.out.println(a101);
        // iterator를 이용해 전체 데이터에서 하나씩 출력
        Iterator iterator = a101.iterator();
        while (iterator.hasNext()) { System.out.println(iterator.next()); }
        // 출력(foreach)
        for (Object num : a101) { System.out.println(num); }
        // 출력(for)
        for (int i = 0; i < a101.size(); i++) { System.out.println(a101.get(i)); }
        // 클래스 리스트
        List<Student2> al02 = new ArrayList<Student2>();
        Student2 s01 = new Student2(10, "test01");
        Student2 s02 = new Student2(20, "test02");
        Student2 s03 = new Student2(30, "test03");
        al02.add(s01);
        al02.add(s02);
        al02.add(s03);
        System.out.println(al02);

        // HashMap
        // key:value 한쌍으로 데이터를 저장하는 구조 / 중복, 순서, 동기화 X / 삽입, 삭제, 조회 빠름
        Map<String, String> map01 = new HashMap();
        // put(key:value)
        map01.put("americano", "1000");
        map01.put("latte", "1500");
        map01.put("hotchoco", "1200");
        // 이미 저장된 키로 값을 한 번 더 넣으면 기존 값에 덮어씀
        map01.put("americano", "1500");
        System.out.println(map01);
        // get(key)
        System.out.println(map01.get("americano"));
        // keySet()
        System.out.println(map01.keySet());
        // 출력(Iterator)
        Iterator keys = map01.keySet().iterator();
        while (keys.hasNext()) {
            String key = (String) keys.next();
            System.out.print(key);
            System.out.println(map01.get(key));
        }
        // 출력(향상 for문)
        for (String key : map01.keySet()) {
            System.out.print(key);
            System.out.println(map01.get(key));
        }

        // Set
        // 중복을 허용하지 않고 순서를 유지하지 않는 구조

        // Stack
        // LIFO 구조, 마지막에 넣은 데이터가 제일 먼저 나오는 구조, 제일 먼저 넣은 데이터가 가장 마지막에 나오는 구조
        // 메모리 구조 중 하나가 Stack 구조로 동작(메소드 호출, 함수 호출)

        // Queue
        // FIFO 구조, 처음에 넣은 데이터가 제일 먼저 나오는 구조
        // 작업 목록

        // PriorityQueue
        // 저장되는 데이터에 우선순위를 부여해서 우선 순위가 높거나 낮은 순으로 정렬해서 저장하는 구조
        PriorityQueue<Student2> priorityQueue = new PriorityQueue<Student2>();
        priorityQueue.add(s01);
        priorityQueue.add(s02);
        priorityQueue.add(s03);
        System.out.println(priorityQueue.poll().name);
        System.out.println(priorityQueue.poll().name);
        System.out.println(priorityQueue.poll().name);

        // LinkedList
        // 리스트랑 큐를 모두 상속받아와서 두 가지 기능 모두 사용 가능 / 중간 삽입, 삭제 빠름 / 양방향 연결 리스트

        // Vector(ArrayList의 이전 버전 느낌), HashTable(HashMap의 이전 버전 느낌)
        // 메소드들에 synchronized 달려있어 기본적으로 멀티 스레드 환경에서 동기화 제공 / 느림
    }
}
// 리플렉션
// 실행중인 객체에 class 파일을 통해 객체의 다양한 값에 직접 접근하는 방법(변수, 메소드, 상위 클래스 등)
// 접근제어자랑 상관없이 접근 가능 / 접근제어자 없이 접근하기 때문에 캡슐화 X / 느림 클래스이름.class.get메소드();
// static int getCapacity(List arrayList) {
//    try {
//        Field field = ArrayList.class.getDeclaredField("elementData");
//        field.setAccessible(true);
//        return ((Object[]) field.get(arrayList)).length;
//    }
//    catch (NoSuchFieldException e) { throw new RuntimeException(e); }
//    catch (IllegalAccessException e) { throw new RuntimeException(e); }
//}