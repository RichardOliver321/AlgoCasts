import java.util.HashMap;
import java.util.Map;

// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

public class Fib {

    public static int fib(int index, Map<Integer, Integer> map) {
        if(index < 2)
            return index;
        
        if(map.get(index-1) == null) {
            map.put(index-1, fib(index-1, map));
        }

        if(map.get(index-2) == null) {
            map.put(index-2, fib(index-2, map));
        }

        map.put(index,  map.get(index-1) + map.get(index-2));
        return map.get(index);
    }

    private static int fibFast(int index) {
        Map<Integer, Integer> cache = new HashMap<>();
        return fib(index, cache);
    }

    public static void main(String[] args) {
        if(fibFast(1) != 1)
            System.out.println("fib of 1 failed: " + fibFast(1));
        
        if(fibFast(2) != 1)
            System.out.println("fib of 2 failed: " + fibFast(2));

        if(fibFast(3) != 2)
            System.out.println("fib of 3 failed: " + fibFast(3));

        if(fibFast(39) != 63245986)
            System.out.println("fib of 39 failed: " + fibFast(39));
    }

}