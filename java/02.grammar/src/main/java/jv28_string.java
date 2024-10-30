public class jv28_string {
    public static void main(String[] args) {
        String str = "abcdefg";
        String stra = "a";
        Character c = 'a';
        System.out.println(str.charAt(0)); // a
        System.out.println(str.charAt(3)); // d
        System.out.println(str.length()); // 7
        System.out.println("c" + "a"+ "a"+ "a"+ "a"); // caaaa
        System.out.println(Character.toString(str.charAt(0)) + Character.toString(str.charAt(1))); // ab
    }
}