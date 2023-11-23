package org.example;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        int  mostElement;
        float halfN = (float) ((args.length)/2.0);
        Map<Integer,Integer> map= new HashMap<Integer,Integer>();
        map.put(1,5);
        map.put(1,6);

        int value;
        int tmp=0;
        for(Integer key:map.keySet()){
            value=map.get(key);
            if(value>tmp){
                tmp=value;
                mostElement=key;
            }
        }


        }

    }
