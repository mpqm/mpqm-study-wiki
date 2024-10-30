package ShopProject;

//Product 추상 클래스를 상속받아 구현한 SmartTV클래스
public class SmartTV extends Product {
	
	String resolution;//해상도
	
	//상품이름, 가격, 해상도를 받아서 처리하는 생성자
	public SmartTV(String pname, int price, String resolution) {
		this.pname = pname;
		this.price = price;
		this.resolution = resolution;
	}
	
	//인터페이스에 정의된 추상 메서드를 오버라이딩한다. 추가 정보인 해상도 정보를 출력
	@Override
	public void printExtra() {
		System.out.println("해상도: "+ resolution);
	}
}
