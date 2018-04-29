// Find the sum of digits within an integer

package it.dan.digit_sum;

import java.util.Scanner;

public class DigitSumString {
    public static void main(String[] args) {
        System.out.print("Provide an integer: ");
        Scanner in = new Scanner(System.in);
        // User input
        int num = in.nextInt();
        int initialNum = num;
        int sum = 0;

        // Convert integer to char array. Get the sum of all numeric values within the array.
        char[] arr = String.valueOf(num).toCharArray();
        int len = arr.length;

        for (int i = len-1; i >= 0; i--){
            sum += Character.getNumericValue(arr[i]);
        }

        System.out.println("The sum of digits within int: " + initialNum + " is " + sum);

    }
}
