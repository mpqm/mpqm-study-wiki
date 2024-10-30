import object_example.AnnotationTest;
import object_example.CustomAnnotation;

import java.lang.reflect.Method;

public class jv25_anotation {
    public static void main(String[] args) {
        // 어노테이션
        // 자바에서 @어노테이션이름 문법
        // 클래스, 메소드, 변수 위에 달아주면 어노테이션에 구현한 기능대로 동작하도록 하는 문법
        // 스프링 어노테이션
        // @Controller, @Service, @Repository, @Bean, @Configuration, @Component, @Autowired, @SpringTest, @Test
        // Lombok: @Getter, @Setter, @Data, @Builder
        AnnotationTest myClass = new AnnotationTest();
        Method[] methods = AnnotationTest.class.getDeclaredMethods();
        for (Method method : methods) {
            if (method.isAnnotationPresent(CustomAnnotation.class)) {
                CustomAnnotation annotation = method.getAnnotation(CustomAnnotation.class);
                if (annotation.enabled()) {
                    try { method.invoke(myClass);
                    } catch (Exception e) { e.printStackTrace(); }
                }
            } else {
                try { method.invoke(myClass);
                } catch (Exception e) { e.printStackTrace(); }
            }
        }
    }
}
