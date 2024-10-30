package Stack;

public class StackTest2 {
    public static void main(String[] args) {
        Stack2 stack = new Stack2();
//        // 거꾸로 정렬
//        Character[] rArr = new Character[10];
//        for(int i = 0 ; i < stack.arr.length; i++) {
//            rArr[i] = stack.pop();
//        }
//        for(Character data : rArr){
//            System.out.printf("[%d]", data);
//        }

        // 후위표기법으로 변경하는 기능
        // "3+2*4-9/3" 중위표기법 -> "324*+93/-" 후위표기법
        // "3+2-4*9/3" 중위표기법 -> "32+49*3/-" 후위표기법
        String ss;
        // ss = "3+2-4*9/3"; // 32+49*3/-
        ss = "3+2*4-9/3"; // 324*+93/-
        for (int i = 0 ; i < ss.length(); i++){
            char k = ss.charAt(i);
            if( k == '0' || k == '1'|| k == '2' || k == '3'|| k == '4'||
                k == '5' || k == '6'|| k == '7' || k == '8'|| k == '9'){
                System.out.print(k);
            } else if ( k == '+' || k == '-'){
                if (!stack.isEmpty()){
                    stack.push(k);
                } else if( stack.peek() == '*' || stack.peek() =='/'){
                    while(stack.isEmpty()){
                        System.out.print(stack.pop());
                    }
                    stack.push(k);
                }else if ( stack.peek() == '+' || stack.peek() =='-'){
                    System.out.print(stack.pop());
                    stack.push(k);
                }
            } else {
                if (!stack.isEmpty()){ stack.push(k); }
                if( stack.peek() == '*' || stack.peek() =='/'){
                    System.out.print(stack.pop());
                    stack.push(k);
                }else {
                    stack.push(k);
                }
            }
        }
        while(stack.peek()!=null){ System.out.print(stack.pop());}

        // 후위표기법으로 사칙연산식 계산
        // 3+2*4-9/3 중위표기법 -> 324*+93/- 후위표기법 -> 8
        // 3+2-4*9/3 중위표기법 -> 32+49*3/- 후위표기법 -> -7
        System.out.println(' ');
        ss = "324*+93/-";
        // ss = "32+49*3/-";
        for (int i = 0 ; i < ss.length(); i++){
            char k = ss.charAt(i);
            if( k == '0' || k =='1' || k == '2' || k == '3'|| k == '4'||
                k == '5' || k == '6'|| k == '7' || k == '8'|| k == '9'){
                stack.push(k);
            } else {
                int a = (int)stack.pop()-'0';
                int b = (int)stack.pop()-'0';
                int c = 0;
                switch (k){
                    case '+': c = a + b; break;
                    case '-': c = b - a; break;
                    case '*': c = a * b; break;
                    case '/': c = b / a; break;
                }
                stack.push((char)(c+'0'));
            }
        }
        System.out.println((int)stack.pop()-'0');
    }
}
