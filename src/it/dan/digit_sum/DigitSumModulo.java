// Find the sum of digits within an integer

package it.dan.digit_sum;

import java.util.Scanner;

public class DigitSumModulo {
    public static void main(String[] args) {
        System.out.print("Provide an integer: ");
        Scanner in = new Scanner(System.in);
        // User input
        int num = in.nextInt();
        int initialNum = num;
        int sum = 0;

        // Get right-most digit within the integer, then divide int by 10 without remainder.
        while(num != 0){
            sum += num % 10;
            num /= 10;
        }

        System.out.println("The sum of digits within int: " + initialNum + " is " + sum);
    }
}
