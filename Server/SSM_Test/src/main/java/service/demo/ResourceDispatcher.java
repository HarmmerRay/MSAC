package service.demo;

import java.util.Arrays;

/**
 * @projectName:    SSM
 * @package:        service.demo
 * @className:      ResourceDispatcher
 * @author:     HarmmerRay
 * @description:  TODO
 * @date:    6/14/2023 1:50 PM
 * @version:    1.0
 */

public class ResourceDispatcher {
   static class InputArgs{
        private int [][]xxx;
        private int []xCan;
       public int[] getxCan() {
           return xCan;
       }

       public void setxCan(int[] xCan) {
           this.xCan = xCan;
       }


        public void setXxx(int [][]xxx){
            this.xxx=xxx;
        }
        public int[][] getXxx(){
         return xxx;
        }
        public InputArgs(){
//            资源情况     已分配资源           仍需资源          可用资源
//            进程         R1   R2   R3     R1   R2   R3       R1    R2   R3
//            P1           2   0   2        1    1   1        1   0   2
//            P2           0   1   0        0    1   1
//            P3           1   1   1        3    1   0
//            P4           1   1   0        0    0   1
//            p5           1   2   0        0    0   1
            int [][]xx = {{1,2,0,2,1,1,1},
                         {2,0,1,0,0,1,1},
                         {3,1,1,1,3,1,0},
                         {4,1,1,0,0,0,1},
                         {5,1,2,0,0,0,1} };
            int []xCan = {1,0,2};
            this.xxx = xx;
            this.xCan = xCan;
        }
    }
    static class OutputArgs{
        InputArgs inputArgs;
    }
    public static void BankerDispatch(){
        InputArgs dataSource=new InputArgs();
        int [][]myThread = dataSource.getXxx();
        int []resourceAvailable = dataSource.getxCan();
        System.out.println("银行家资源调度算法开始……");
        int k=0;
        for(int j=0;j<5;j++){
            for(int i=0;i< myThread.length; i++){

                    if(myThread[i][4] <= resourceAvailable[0] && myThread[i][5] <= resourceAvailable[1] && myThread[i][6] <= resourceAvailable[2]){
                        if(myThread[i][4] ==0 && myThread[i][5] == 0 && myThread[i][6] == 0){
                            continue;
                        }
                        myThread[i][4] =0;
                        myThread[i][5] =0;
                        myThread[i][6] =0;
                        resourceAvailable[0]+=myThread[i][1];
                        resourceAvailable[1]+=myThread[i][2];
                        resourceAvailable[2]+=myThread[i][3];
                        myThread[i][1]=0;
                        myThread[i][2]=0;
                        myThread[i][3]=0;
                        System.out.println("进程"+myThread[i][0]+"执行结束，可用资源为："+ Arrays.toString(resourceAvailable));
                        k++;
                        break;

                }
            }
        }
        if(k==5){
            System.out.println("可以分配");
        }else {
            System.out.println("不可分配");
        }
    }

    public static void main(String[] args) {
        ResourceDispatcher.BankerDispatch();
    }
}
