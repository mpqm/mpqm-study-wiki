package collection_framework;
import java.util.*;


public class generictype_iterator {
	
	public static void printString(ArrayList al) {
		for(int i=0; i<al.size(); i++) {
			String tmp = (String) al.get(i);
			System.out.println(tmp);
		}
	}
	public static void main(String[] args) {
		//1. Object 클래스와 일반 클래스
		//새로운 배열에 원소: 기본 데이터 타입 혹은 클래스 타입을 명시하는 것이 일반적, 만약, 배열에 클래스 타입을 별도로 지정하고 싶지 않을 경우, Object 클래스 타입으로 선언
		//자바에서는 모든 클래스가 Object 타입을 상속하고 있음 즉, 모든 클래스는 Object 타입의 자식 클래스 (Descendant)라 할 수 있음
		//Object 변수들은 자식 클래스를 모두 참조 할 수 있음 (다형성), 따라서, 만약 내부 저장 컨테이너가 Object 타입으로 선언되면 무엇이든 입력 받을 수 있음
		
		//2.Object 클래스 사용의 한계
		//Object 데이터 타입을 사용하면 범용(Generic) 데이터 구조들을 쉽게 생성, 그러나, Type Checking이나, Casting 문제가 존재
		ArrayList al1 = new ArrayList();
		al1.add("hi");
		System.out.println(((String)al1.get(0)).charAt(0));
		ArrayList al2 = new ArrayList();
		al2.add("hie");//만약에 hi가아닌 정수형이 입력된다면?
		printString(al2);
		
		//3. Generic타입
		//Generic 타입의 활용: 클래스 정의 당시에는 사용하는 클래스를 특정하지 않지만, 변수(객체) 선언 시에는 반드시 명시하도록 하여 Casting 문제를 해결
		//Collection: Collection 데이터의 기본 연산을 정의하고 있는 인터페이스, iterator라고 하는 일시적 오브젝트를 이용하여 내부 저장 데이터를 열람, iterator는 매번 객체를 Collection 데이터에서 가져와서 접근해야함 (일시적 오브젝트)
		
		//4. Iterator 메소드
		//Boolean hasNext(): 이번 반복 단계에서 남아있는(더 가져올) 요소가 있을 때 true를 리턴
		//E next(): 이번 반복 단계의 다음 요소를 리턴
		//void remove(): Iterator가 찾은 마지막 요소를 Collection에서 제거
		ArrayList<String> al = new ArrayList<String>();
		al.add("1");
		al.add("2");
		al.add("3");
		Iterator<String> iter1 = al.iterator();
		while(iter1.hasNext()) {
			String tmp = iter1.next();
			System.out.println(tmp);
		}
		Iterator<String> iter2 = al.iterator();
		while(iter2.hasNext()) {
			String tmp = iter2.next();
			System.out.println(tmp);
		}
		iter2.remove();
		System.out.println("size: "+ al.size());
	}
	

}
