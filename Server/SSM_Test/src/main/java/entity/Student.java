package entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @projectName: SSM
 * @package: entity
 * @className: Student
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/20/2023 12:58 PM
 * @version: 1.0
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {

    private String s_id;

    private String s_password;

    private String s_name;

    private String s_gender;

    private int s_age;

    private String s_class;

    private String s_school;
}
