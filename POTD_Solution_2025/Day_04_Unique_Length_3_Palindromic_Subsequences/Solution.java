
//Question_Link: https://leetcode.com/problems/unique-length-3-palindromic-subsequences/

class Solution {
    public int countPalindromicSubsequence(String s) {
        int result = 0;
       
        for (char outerChar = 'a'; outerChar <= 'z'; outerChar++) {
            int firstIndex = s.indexOf(outerChar);
            int lastIndex = s.lastIndexOf(outerChar);
            
            if (firstIndex < lastIndex) {
       
                for (char middleChar = 'a'; middleChar <= 'z'; middleChar++) {
                 
                    for (int i = firstIndex + 1; i < lastIndex; i++) {
                        if (s.charAt(i) == middleChar) {
                            result++;
                            break; 
                        }
                    }
                }
            }
        }
        
        return result;
    }
}