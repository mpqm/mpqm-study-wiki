package object_example;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

// 어노테이션을 어디에 붙여서 사용할 수 있는지 설정
//  ElementType.TYPE : 클래스
//  ElementType.METHOD : 메소드
//  ElementType.FILED : 변수
@Target({ElementType.METHOD})
// 어노테이션의 기능이 언제 적용이 되는지 설정
// RetentionPolicy.RUNTIME: 프로그램이 실행되는 동안 적용됨
// RetentionPolicy.SOURCE: 소스코드를 작성하고 컴파일 할 때 적용됨
@Retention(RetentionPolicy.RUNTIME)
public @interface CustomAnnotation {
    boolean enabled() default true;
}
