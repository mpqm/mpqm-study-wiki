package ShopProject;
	
//쇼핑몰 상품 정의를 위한 추상 클래스
//다양한 상품 종류를 지원하려고 기본 정보 설정과 출력만 추상 클래스에서 지정하고, 추가 정보는 서브 클래스에서 구현하도록 유도한다.
public abstract class Product{
	
	//상품 이름과 가격 변수
	String pname;
	int price;
	
	//상품 이름과 가격을 출력하는 기본 정보 출력 메서드, 상세정보를 출력하기위해서 printExtra()메서드를 호출한다.
	public void printDetail() {
		System.out.print("상품명: "+ pname + " , ");
		System.out.print("가격: "+ pname + " , ");
		printExtra();
	}
	
	//추상메서드로 실제 구현은 서브클래스에서 해야한다.
	//printDetail()에서 자동으로 호출하므로, printExtra()에 구현된 내용도 자동으로 함께 출력된다.
	public abstract void printExtra();
}
