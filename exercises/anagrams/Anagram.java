import java.util.Arrays;

public class Anagram {

    public static void main(String[] args) {
        if(!isAnagram("hello!", "llohe")) {
            System.out.println("failed");
        }

        if(!isAnagram("Whoa! Hi!", "Hi! Whoa!")) {
            System.out.println("failed");
        }
        
    }

    private static boolean isAnagram( String input, String input2) {

        String[] input3 = input.replaceAll("[^\\w]", "").split("");
        String[] input4 = input2.replaceAll("[^\\w]", "").split("");

        if(input3.length != input4.length){
            return false;
        }
        Arrays.sort(input3);
        Arrays.sort(input4);

        return Arrays.equals(input3, input4); 


    }
}