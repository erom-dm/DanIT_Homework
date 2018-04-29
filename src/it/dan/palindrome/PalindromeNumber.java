// Multiply two integers in range 100-999; Find largest result that is a palindrome.

package it.dan.palindrome;

import com.sun.org.apache.xpath.internal.SourceTree;

import java.util.TreeSet;

public class PalindromeNumber {
    public static void main(String[] args) {
        int one = 999;
        int two = 999;
        int mult;
        // for sake of visibility, let's save all palindrome multiplication results
        TreeSet<Integer> results = new TreeSet<>();

        for (int i = 0; i < 900; i++){
            for(int j = 0; j < 900; j++){
                mult = (one - i) * (two - j);
                if(isPalindrome(mult)){
                    results.add(mult);
                }
            }
        }

        System.out.println("Largest palindrome is: " + results.last());
        System.out.println("All of the palindromes are: " + results);

    }

    private static boolean isPalindrome(int multiplication){
        char[] arr = String.valueOf(multiplication).toCharArray();
        int arrLen = arr.length;
        boolean result = true;

        for (int x = 0; x < arrLen/2; x++){
            if (arr[x] != arr[arrLen-x-1]){
                result = false;
                return result;
            }
        }
        return result;
    }
}
