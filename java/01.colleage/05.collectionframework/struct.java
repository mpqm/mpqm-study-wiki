package collection_framework;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.Scanner;
//1. 배열
//배열은 메모리상에 같은 종류의 데이터를 연속해서 저장하는 형태이고, 인덱스를 사용하여 순차적으로 접근할 수 있다. 
//기본적으로 크기가 고정되어 있고, 배열 안의 원소가 동일한 자료형이어야 한다는 제약이 따른다

//2. 연결 리스트
//연결 리스트는 물리적으로는 연속되지 않지만, 논리적으로는 연속된 형태를 유지하는 자료구조를 말한다.
//각 데이터는 노드Node 단위로 관리하며, 현재 노드에는 다음 노드와 연결 정보가 포함된다

//3. 이중 연결 리스트
//이중 연결 리스트(Double Linked Lis t) 의 기본 원리는 연결 리스트와 동일함
//각 노드는 이전 노드와 다음 노드를 가리키는 참조 값으로 구성됨
//맨 처음 노드의 이전 노드와 마지막 노드의 다음 노드는 없다. 그러나 마지막 노드가 다시
//처음 노드를 가리키면 순환구조가 되는데, 이를 환형 연결 리스트(Circular Linked List)라고 한다

//4. 스택
//스택(Stack)은 데이터를 차곡차곡 쌓는 형태의 자료구조를 말한다.
//마지막에 들어간 데이터가 맨 위에 있어 마지막 데이터를 제일 먼저 참조한다(LIFO, Last In First Out).

//5. 큐
//큐(Queue)는 스택과 유사한 형태의 자료구조이나 스택과는 반대로 먼저 저장한 것을 가장 먼저 참조한다.

//6. 트리
//트리(Tree)는 루트에서 시작된 각 노드를 꼭짓점 형태로 구성한 구조로, 이어서 다룰 그래프의 일종

//7. 그래프
//그래프(Graph)는 연결된 객체 간의 관계를 표현할 수 있는 자료구조
//그래프의 핵심은 탐색으로, 주어진 노드 간의 최소 경로나 최적 경로를 구하는 데 필요한 알고리즘을 구현할 때 사용

//8. 컬렉션 프레임워크
//컬렉션 프레임워크는 자료구조와 관련된 클래스를 일관된 체계에 맞춰 개발할 수 있도록 만든 큰 틀이다.

//8-1. 자바에서 컬렉션 프레임워크를 만든 목적
//프로그래머가 자료구조를 사용하는 복잡한 알고리즘 등을 구현하는 데 들이는 시간과 노력을 줄여 준다.
//고성능의 자료구조를 제공하여 프로그램의 성능을 향상시킬 수 있다. 개별적인 알고리즘 구현은 편차가 크고, 오류가 발생할 수 있으며, 호환되지 않는 문제가 발생할 수 있다.
//다양하게 구현된 자료구조 API를 배우는 데 필요한 노력을 줄여 준다.
//표준화된 컬렉션 인터페이스 구조를 제공하여 소프트웨어의 재사용을 촉진시킨다

//8-2. 자바 컬렉션 프레임워크의 핵심 인터페이스
//List: 순차적으로 접근 가능한 자료구조를 구현하는 데 사용하는 인터페이스, 연결 리스트의 구조
//Set: Set은 중복되지 않는 자료를 (Key, Value) 쌍으로 저장 및 검색할 수 있는 자료구조를 제공하는 인터페이스, 해시 테이블의 구조
//Map: Map은 Collection 인터페이스를 구현하지는 않지만, 컬렉션 프레임워크의 주요 인터페이스이다, 기본적으로 Set과 같이 자료를 (Key, Value) 쌍으로 저장 및 검색할 수 있다


public class struct {
	
	//상품 DB를 구축하는 HashMap
	HashMap<String, ArrayList<String>> productdb;
	
	//생성자
	public struct() {
		productdb = new HashMap<String, ArrayList<String>>();
		ArrayList<String> plist1 = new ArrayList<String>();
		
		//제조사별 제품등록
		plist1.addAll(Arrays.asList("스마트TV", "갤럭시S7", "노트20.1"));
		productdb.put("삼성", plist1);
		ArrayList<String> plist2 = new ArrayList<String>();
		plist2.addAll(Arrays.asList("커브드TV", "옵티무스G10", "시원에어컨2"));
		productdb.put("엘지", plist2);
		ArrayList<String> plist3 = new ArrayList<String>();
		plist3.addAll(Arrays.asList("애플TV", "아이폰8S", "아이패드프로"));
		productdb.put("애플", plist3);
	}
	
	void search() {
		System.out.println("상품검색");
		System.out.print("제조사를 입력하세요:");
		Scanner scan = new Scanner(System.in);
		String p = scan.next();
	
		//입력된 제조사의 상품 목록을 검색
		ArrayList<String>result = (ArrayList<String>)productdb.get(p);
		if(result != null) {
			for(String s : result) {System.out.println(s);}
		}
		else
			System.out.println("검색결과가 없습니다.");
			scan.close();
	}

	public static void main(String[] args) {
		//9. ArrayList
		//ArrayList는 배열과 유사하며, List 인터페이스를 구현한 것, 기본적으로 각 데이터에 순차적으로 접근 가능한 연속 자료구조이다.
		//특징: 초기화할 때 크기를 지정할 필요가 없다, 레퍼런스 타입만 원소로 저장할 수 있다, 데이터 중복이 가능하며, null값을 허용한다.자료를 대량으로 추가하거나 삭제하면 내부 처리 작업이 늘어나 성능이 떨어질 수 있다.
		//사용법: ArrayList는 객체를 생성하고 add( ) 메서드로 원하는 데이터를 추가할 수 있다. get( ) 메서드를 사용하여 데이터를 가져오거나 Iterator를 사용하여 다음에 위치한 데이터를 가져오기도 한다.
		//ArrayList와 같은 컬렉션 타입의 자료형을 사용할 때는 제네릭, Generics을 이용하여 원소의 자료형을 명시.
		//제네릭은 고정되지 않은 데이터형을 프로그램 언어에서 지원하려고 만든 개념으로, 객체선언을 할 때 클래스 이름 뒤에 <제네릭 타입> 형태로 사용
		ArrayList al1 = new ArrayList();
		ArrayList <String> al2 = new ArrayList<String>();
		al1.add("홍길동");
		al1.add("몰라요");
		//al1.add(10);
		al2.add("현대");
		al2.add("기아");
		//al2.add(100);
		al2.addAll(al1);
		for(int i = 0; i < al1.size(); i++) {System.out.println(al1.get(i));}
		for(String s : al2) {System.out.println(s);}
		
		//10. 해시 테이블
		//해시 테이블Hash Table은 임의의 메모리 공간에 데이터를 (Key, Value) 쌍으로 저장하는 형태의 자료구조.
		HashMap<String, String> hm = new HashMap<String, String>();
		
		//HashMap은 객체를 생성하고 put( ) 메서드로 원하는 데이터를 추가할 수 있다. 
		hm.put("101", "홍길동");
		hm.put("102", "몰라요");
		hm.put("103", "한사람");
		
		//데이터를 가져오는데 get( ) 메서드를 사용할 수 있다
		System.out.println(hm.get("102"));
		
		//전체 데이터를 출력해야 한다면 values( ) 메서드를 사용하여 키를 제외한 데이터의 컬렉션 객체를 추출하여 처리
		Collection<String> c = hm.values();
		for(String s : c) {System.out.println(s);}
		
		//상품조회프로그램
		struct app = new struct();
		app.search();
		
	}

}
