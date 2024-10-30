package ch3_object_oriented;

public class helloworld_2 {
	public void go() {
		helloworld1 hello1 = new helloworld1();
		hello1.print();
		
		helloworld1 hello2 = new helloworld1("My Hello world");
		hello2.print();
		
		helloworld1 hello3 = new helloworld1("Hello", 2);
		hello3.print();
		
		hello2.setMsg("반갑습니다.");
		System.out.println(hello2.getMsg());
		
		helloworld1.prefix = "Greetings:";
		hello2.print();
		hello3.print();
		
		helloworld1.prefix = "인사말:";
		hello2.print();
		hello3.print();
	}
	
	public static void main(String[] args) {
		helloworld_2 hr = new helloworld_2();
		hr.go();
	}

}
