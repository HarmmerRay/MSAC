package main.java;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.PriorityQueue;

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

    //630. 课程表 III
    //对于两门课(t1,d1)和(t2,d2),如果后者的关闭时间较晚，即d1<=d2,那么我们先学习前者，再学习后者，总是最优的。
    //再通过比较已经选择的课程总时长与当前di的大小，判断是应该选择 还是 与前面课程时间最长的课互换来盈余更多时间。
    public int scheduleCourse(int[][] courses){
        Arrays.sort(courses,(a,b) -> a[1] -b[1]);

        PriorityQueue<Integer> q=new PriorityQueue<>((a,b) -> b-a);
        
        int total =0;
        
        for(int[] course: courses){
            int ti = course[0],di=course[1];
            if(total +ti <=di){
                total +=ti;
                q.offer(ti);
            } else if (!q.isEmpty() && q.peek() > ti) {
                total -= q.poll() - ti;
                q.offer(ti);
            }
        }
        return q.size();
    }
    public static void main(String[] args) {
        waysToBuyPensPencils(20,10,5);
        System.out.println("远远不够");
    }
}