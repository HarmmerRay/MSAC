package main.java;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
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
    //1462. 课程表 IV
    public List<Boolean> checkIfPrerequisite(int numCourses,int [][]prerequisite,int [][] queries){
        List<Boolean> res= new ArrayList<>();
        if(prerequisite.length ==0){
            for(int i=0;i<queries.length;i++){
                res.add(false);
            }
            return res;
        }
        return res;
    }
    //2560. 打家劫舍 IV
    public int minCapability(int[] nums, int k) {
        int res=0;
        //1.建立元素是下标的数组 用nums[元素值] 排序 小的在前
        int[] arr=new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            arr[i] = i;
        }

        //2.循环k次，加上k个数,期间判断两元素是否相邻
        return res;
    }
    //2591. 将钱分给最多的儿童
    public int distMoney(int money, int children) {
        if(money==1){
            return 0;
        }

        return (money - children) / 7;
    }
    //1993. 树上的操作
    class LockingTree {
        private int[] parent;
        private int[] lockNodeUser;
        private List<Integer>[] children;

        public LockingTree(int[] parent) {
            int n = parent.length;
            this.parent = parent;
            this.lockNodeUser = new int[n];
            Arrays.fill(this.lockNodeUser, -1);
            this.children = new List[n];
            for (int i = 0; i < n; i++) {
                this.children[i] = new ArrayList<Integer>();
            }
            for (int i = 0; i < n; i++) {
                int p = parent[i];
                if (p != -1) {
                    children[p].add(i);
                }
            }
        }

        public boolean lock(int num, int user) {
            if (lockNodeUser[num] == -1) {
                lockNodeUser[num] = user;
                return true;
            }
            return false;
        }

        public boolean unlock(int num, int user) {
            if (lockNodeUser[num] == user) {
                lockNodeUser[num] = -1;
                return true;
            }
            return false;
        }

        public boolean upgrade(int num, int user) {
            boolean res = lockNodeUser[num] == -1 && !hasLockedAncestor(num) && checkAndUnlockDescendant(num);
            if (res) {
                lockNodeUser[num] = user;
            }
            return res;
        }

        private boolean hasLockedAncestor(int num) {
            num = parent[num];
            while (num != -1) {
                if (lockNodeUser[num] != -1) {
                    return true;
                }
                num = parent[num];
            }
            return false;
        }

        private boolean checkAndUnlockDescendant(int num) {
            boolean res = lockNodeUser[num] != -1;
            lockNodeUser[num] = -1;
            for (int child : children[num]) {
                res |= checkAndUnlockDescendant(child);
            }
            return res;
        }
    }
    public static void main(String[] args) {
        waysToBuyPensPencils(20,10,5);
        System.out.println("远远不够");
    }
}