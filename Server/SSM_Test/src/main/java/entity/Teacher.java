package entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @projectName: SSM
 * @package: entity
 * @className: Teacher
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/20/2023 12:58 PM
 * @version: 1.0
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Teacher {

    private String t_id;

    private String t_password;

    private String t_name;

    private String t_school;
}
