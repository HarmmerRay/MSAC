import java.util.Arrays;

public class Main {
    public int numFactoredBinaryTrees(int[] arr) {    //数学方程的思维得出 排序后每一个节点对应的符合条件的二叉树数目为：
        // dp[i]=1+      ∑       dp[left]×dp[right]×(1+f(left,right))
        //         (left,right)∈U
        Arrays.sort(arr);
        int n = arr.length;
        long[] dp = new long[n];
        long res = 0, mod = 1000000007;
        for (int i = 0; i < n; i++) {
            dp[i] = 1;
            for (int left = 0, right = i - 1; left <= right; left++) {
                while (right >= left && (long) arr[left] * arr[right] > arr[i]) {
                    right--;
                }
                if (right >= left && (long) arr[left] * arr[right] == arr[i]) {
                    if (right != left) {
                        dp[i] = (dp[i] + dp[left] * dp[right] * 2) % mod;
                    } else {
                        dp[i] = (dp[i] + dp[left] * dp[right]) % mod;
                    }
                }
            }
            res = (res + dp[i]) % mod;
        }
        return (int) res;
    }

    public static void main(String[] args) {
        System.out.println("Hello world!");
    }
}