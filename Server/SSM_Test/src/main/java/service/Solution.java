package service;




import java.util.HashSet;
import java.util.Set;

/**
 * @projectName: SSM
 * @package: service
 * @className: Solution
 * @author: HarmmerRay
 * @description: TODO
 * @date: 5/9/2023 4:04 PM
 * @version: 1.0
 */

public class Solution {
    public int distinctPrimeFactors(int[] nums) {
        int result=0;
        Set<Integer> set=new HashSet<>();

        // 质数：一个大于1的自然数，除了1和它自身外，不能被其他自然数整除的数叫做质数
        //因数：num1/num2 等于整数  则num2是num1的因数
        for (int num: nums) {
            int i=2;//求数组中每个数字的质因数
            while (i <= num){
                if((num % i)==0){
                    set.add(i);  //找到每一个num的所有质因数  ，这些所有质因数即是数组乘积的所有不同质因数
                    //将其放入HashSet中 ，set的大小即是所有不同质因数的数目
                    num /= i;
                    while ((num % i )== 0){
                        num /= i;
                    }
                }
                i++;
            }
        }
        result=set.size();
        return result;
    }
    class TreeNode {
         int val;
          TreeNode left;
         TreeNode right;
          TreeNode() {}
          TreeNode(int val) { this.val = val; }
          TreeNode(int val, TreeNode left, TreeNode right) {
              this.val = val;
             this.left = left;
             this.right = right;
          }
      }
    public boolean areNumbersAscending(String s) {
        int pre = 0, pos = 0;  //pos作为下标  pre作为前一个数
        while (pos < s.length()) {
            if (Character.isDigit(s.charAt(pos))) {//检查pos位置的字符是不是数字
                int cur = 0;
                while (pos < s.length() && Character.isDigit(s.charAt(pos))) {
                    //是，则判断既小于length又是数字
                    cur = cur * 10 + s.charAt(pos) - '0';
                    //组装完整数字，cur=cur*10+s.chatAt(pos)  - "0"表示字符转数字
                    pos++;
                }
                if (cur <= pre) { //有一个地方顺序出错则全部出错
                    return false;
                }
                pre = cur;
            } else {
                pos++;
            }
        }
        return true;
    }
    public boolean isToeplitzMatrix(int[][] matrix) {
        int colLen = matrix.length;
        int rowLen = matrix[0].length;
        for(int i=0;i<colLen-1;i++){
            for(int j=0;j<rowLen-1;j++){
                if(matrix[i][j] != matrix[i+1][j+1]){
                    return false;
                }
            }
        }
        return true;
    }
    public int maxSubarraySumCircular(int[] nums) {
        int max=0;
        int maxSumOfASection=nums[0];
        int tmp=0;
        for(int j=0;j<(nums.length *2);j++){
            int k=0;
            if(j>=nums.length){
                k=(j+1)-nums.length;
            }
            for(;k<=j;k++) {
                for (int i = k; i <= j; i++) {
                    tmp+=nums[i % nums.length]; //第一次nums[0]的值  第二次num[0]+num[1]的值 及num[1]的值
                }
                if(tmp > maxSumOfASection){
                    maxSumOfASection=tmp;
                    tmp=0;
                }
                tmp=0;
            }
        }
        max=maxSumOfASection;
        return max;
    }
    public String generateTheString(int n) {

        String result="";
        StringBuilder stringBuilder=new StringBuilder();
        if(n%2==0){
            for(int i=0;i<n-1;i++){
                stringBuilder.append("a");
            }
            stringBuilder.append("b");
        }else {
            for(int i=0;i<n;i++){
                stringBuilder.append("a");
            }
        }
        result= String.valueOf(stringBuilder);
        return result;
    }
    public static void main(String[] args) {
        System.out.println((char)(97+25));
    }

}
