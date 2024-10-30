package ch2_basicgrammar;

class Member{
	int id;
	String name;
	String birth;
	String tel;
	String dept;	
	public Member(int id, String name, String birth, String tel, String dept) {
		this.id = id;
		this.name = name;
		this.birth = birth;
		this.tel = tel;
		this.dept = dept;
	}
}

public class arraylist {

	public static void main(String[] args) {
		//1. 배열의 개념
		//인덱스(순차번호)와 데이터로 구성된 일종의 자료구조, 데이터는 인덱스를 사용하여 값을 넣거나 가져온다(참조), 배열 안 데이터는 0부터 시작하는 인덱스를 참조한다.
		//같은 자료형으로만 구성한다, 배열을 선언할 때 크기를 지정해야 하며, 나중에 그 크기를 변경할 수 없다, 특정한 값으로 초기화하지 않은 배열 안 데이터를 참조하면 Null Pointer Exception이 발생한다.
		//자바는 객체지향 언어이고 객체 타입의 참조 변수를 지원하기 때문에 배열에서도 원시 자료형 외의 객체 타입을 사용할 수 있다
		Member[] mlist = new Member[2]; 											   //member를 원소로 하는 100개짜리 배열을 mlist이름으로 생성
		mlist[0] = new Member(101, "홍길동", "1990.08.06", "010-4024-5075", "한국주식회사");//member클래스의 인스턴스를 생성하여 배열 원소에 할당
		mlist[1] = new Member(102, "박종성", "1990.08.06", "010-4024-5075", "한국주식회사");
		for(int i = 0; i < mlist.length; i++) {										   //데이터 출력, mlist.lenght->배열의 크기를 구함
			System.out.println(mlist[i].id);
			System.out.println(mlist[i].name);
			System.out.println(mlist[i].birth);
			System.out.println(mlist[i].tel);
			System.out.println(mlist[i].dept);
		}
		
		//1차원 배열
		String[] products = {"애플 아이폰", "삼성 갤럭시", "노키아 루미아", "소니 엑스페리아"};
		for(int i = 0; i < products.length; i++) {System.out.println(products[i]);}
		for(String s : products) {System.out.println(s);}
		
		//2차원배열
		String[][] members = {{"101","홍길동"},
							  {"102","김사랑"},
							  {"103","이신용"}};
		for(int i = 0; i < members.length; i++) {System.out.println(members[i][0] + ":" + members[i][1]);}
	}
}
