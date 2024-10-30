//14
package ch3_object_oriented;

public class helloworld1 {
	private String msg;
	static int count = 0;
	static String prefix = "";
	
	//오버로딩된 생성자메서드(파라미터0개)
	public helloworld1() {										   
		msg = "Hello World !!";
	}
	
	//오버로딩된 생성자메서드(파라미터1개)
	public helloworld1(String msg) {								    
		this.msg = msg;
	}
	
	//오버로딩된 생성자메서드(파라미터2개)
	public helloworld1(String msg, int option) {						
		if(option == 1) this.msg = msg;
		else if(option ==2) this.msg = msg + ", 안녕하세요?";
	}
	
	//메서드호출-print메서드
	public void print() {
		count++;
		System.out.println("[" + count + "]" + prefix + msg);
	}
	
	//getter
	public String getMsg() {												
		return msg;
	}
	
	//setter
	public void setMsg(String msg) {
		this.msg = msg;
	}
	
	public static void main(String[] args) {
		//1. 클래스확장 - 인스턴스를 생성할 때 출력값 결정
		helloworld1 hello1 = new helloworld1();					
		hello1.print();
		
		helloworld1 hello2 = new helloworld1("My Hello world");
		hello2.print();
		
		helloworld1 hello3 = new helloworld1("Hello", 2);		
		hello3.print();
		
		//2. 클래스확장 - 출력값의 동적지원
		//msg가 외부조작으로 변경될 가능성이있기 때문에 msg는 private를 걸고 별도의 메서드로 해당 변수에 접근 public getter/setter 메서드구현
		//getter/setter메서드 작성규칙: 리턴 자료형 getXxx( )(Xxx는 변수 이름으로 첫 글자만 대문자), setXxx(파라미터)(파라미터는 변수의 자료형과 일치해야 한다)
		hello2.setMsg("반갑습니다.");
		System.out.println(hello2.getMsg());
		helloworld1.prefix = "Greetings: ";
		hello2.print();
		hello3.print();
		helloworld1.prefix = "인사말: ";
		hello2.print();
		hello3.print();
	}

}
