package ch2_basicgrammar;

import java.util.Scanner;

public class branch {

	public static void main(String[] args) {
		//1. if-else문
		Scanner scan = new Scanner(System.in);								   							 //키보드로 입력을 받는객체 생성
		System.out.println("로그인아이디 : ");
		String user = scan.next();            								   							 //키보드입력을 user 변수에 저장
		if(user.equals("admin")) {			 								   						     //user값이 "admin"이면
			System.out.println("비밀번호 : ");
			String pwd = scan.next();		  								   							 //키보드 입력을 pwd 변수에 저장
			if(pwd.equals("1234")) {										  							 //pwd값 1234 일때
				System.out.println("관리자 로그인");
				System.out.println("메뉴선택(1~2)");
				String sel = scan.next();         							   							 //키보드 입력을 sel 변수에 저장
				if(sel.equals("1")) {System.out.println("관리자 1번 선택함");}	   							 //sel값이 1일때
				else if(sel.equals("2")) {System.out.println("관리자 2번 선택함");}						     //sel값이 2일때
				else {System.out.println("없는 메뉴입니다.");}					   							 //sel값이 다를때
			}
			else System.out.println("비밀번호 틀림");							   							 //1234가 아닐때
		}
		
		else {																   							 //user값이 다른값이라면
			System.out.println("비밀번호 : ");
			String pwd = scan.next();										   							 //키보드 입력을 pwd 변수에 저장
			if(pwd.equals("1234")) {                          				   						     //pwd값 1234 일때
				System.out.println(user + "로그인");
				System.out.println("메뉴선택(1~2)");
				String sel = scan.next();									  							 //키보드 입력을 sel 변수에 저장
				if(sel.equals("1")&& !user.equals("admin")) {System.out.println(user + "1번 선택함");}     //sel값이 1일때
				else if(sel.equals("2")&& !user.equals("admin")) {System.out.println(user + "2번 선택함");}//sel값이 2일때
				else {System.out.println("없는 메뉴입니다.");}												 //sel값이 다를때
			}
			else System.out.println("비밀번호 틀림");														 //1234가 아닐때
		}
		
		//2. switch문
		System.out.println("멤버레벨을 입력하세요");
		String memberLevel = scan.next();
		String msg;
		switch(memberLevel)				   //조간값(memberLevel)
		{
		case "VIP":
			msg = "VIP 고객 해택 적용"; break;//break문 중요 생략하지말고 꼭쓰기
		case "NEW":
			msg = "신규 고객 혜택 적용"; break;
		case "YOUNG":
			msg = "청소년 고객 혜택 적용"; break;
		default:
			msg ="등급없음";
		}
		System.out.println(msg);
	}
}
