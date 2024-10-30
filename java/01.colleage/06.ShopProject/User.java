package ShopProject;

public class User {
	//사용자 이름
	private String name;
	
	//결제 유형 - enum
	private PayType payType;
	
	//이름과 결제 정보를 파라미터로 가지는 생성자, 생성자로 이름과 결제 정보를 받아 설정한다.
	public User(String name, PayType payType) {
		this.name = name;
		this.payType = payType;
	}
	
	//사용자의 이름 정보를 리턴한다.
	public String getName() {
		return name;
	}
	
	//사용자의 이름 정보를 설정한다.
	public void setName(String name) {
		this.name = name;
	}
	
	//사용자의 결제 정보를 리턴한다.
	public PayType getPayType() {
		return payType;
	}
	
	//사용자의 결제 정보를 설정한다.
	public void setPayType(PayType payType) {
		this.payType = payType;
	}
}
