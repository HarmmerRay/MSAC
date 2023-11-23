package com.studentmanager;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.studentmanager.mapper")
@SpringBootApplication()
public class StudentmanagerApplication {

    public static void main(String[] args) {
        SpringApplication.run(StudentmanagerApplication.class, args);
    }

}
