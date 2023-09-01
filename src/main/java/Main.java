package main.java;

public class Main {
    //2240. 买钢笔和铅笔的方案数
    public static long waysToBuyPensPencils(int total, int cost1, int cost2) {
        long res=0;
        int max1 = total / cost1;
        for (int i = 0; i <= max1; i++) {
            int max2 = (total - (cost1 * i)) / cost2;
            res += max2 + 1;
        }
        return res;
    }
    public static void main(String[] args) {
        waysToBuyPensPencils(20,10,5);
        System.out.println("远远不够");
    }
}