import java.util.HashMap;
import java.util.Map;

public class Palindrometest {

 
    public static void main(String[] args) {
        Map<String, Boolean> expected = new HashMap<String, Boolean>(){{
            put("aba", true);
            put(" aba", false);
            put("aba ", false);
            put("greetings", false);
            put("1000000001", true);
            put("Fish hsif", false);
            put("pennep", true);

        }};

        for (String key : expected.keySet()) {
            if(Palindrome.solve(key) != expected.get(key)){
                System.out.println("Failed: " + key);
            }
        }

    }
      
}