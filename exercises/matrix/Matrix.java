import java.util.Arrays;

// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

public class Matrix {
    public static void main(String[] args) {

        Integer[][] m = matrix(2);

        if(m.length == 2) {
            Integer[][] test = new Integer[][] {{1, 2}, {4,3}};
            for (int i = 0; i < test.length; i++) {
                if(!Arrays.equals(m[i], test[i])){
                    System.out.println("failed 2: " + m);
                }   
            }
           
        }

        Integer[][] test2 = new Integer[][] {
                    {1,   2,  3, 4},
                    {12, 13, 14, 5},
                    {11, 16, 15, 6},
                    {10,  9,  8, 7}};

        m = matrix(4);
        for (int i = 0; i < test2.length; i++) {
            if(!Arrays.equals(m[i], test2[i])){
                System.out.println("failed 4: " + m);
            }   
        }

    }


    public static Integer[][] matrix(Integer input) {
        Integer startRow = 0;
        Integer endRow = input-1;
        Integer startColumn = 0;
        Integer endColumn = input-1;
        Integer count = 1;
        Integer[][] resultMatrix = new Integer[input][input];

        while(startRow <= endRow && startColumn <= endColumn){

            //Top
            for(int i = startColumn; i <= endColumn; i++) {
                resultMatrix[startRow][i] = count++;
            }
            startRow++;

            //Right
            for(int i = startRow; i <= endRow; i++) {
                resultMatrix[i][endColumn] = count++;
            }
            endColumn--;

            //Bot
            for(int i = endColumn; i >= startColumn; i--) {
                resultMatrix[endRow][i] = count++;
            }
            endRow--;

            //Left
            for(int i = endRow; i >= startRow; i--) {
                resultMatrix[i][startColumn] = count++;
            }
            startColumn++;
        }

        return resultMatrix;


    }
}