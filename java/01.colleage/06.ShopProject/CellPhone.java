package ShopProject;

//Product 추상 클래스를 상속받아 구현한 CellPhone클래스
public class CellPhone extends Product {
	
	String carrier;//통신사
	
	//상품이름과 가격, 통신사 정보를 받아서 처리하는 생성자
	public CellPhone(String pname, int price, String carrier) {
		this.pname = pname;
		this.price = price;
		this.carrier = carrier;
	}
	
	//인터페이스에 정의된 추상 메서드를 오버라이딩한다. 추가 정보인 통신사 정보를 출력
	@Override
	public void printExtra() {
		System.out.println("통신사: " + carrier);
	}
}
