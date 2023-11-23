package entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @projectName: SSM
 * @package: entity.demo
 * @className: Course
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/20/2023 12:59 PM
 * @version: 1.0
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Course {

    private String c_id;

    private String c_name;

    private String c_hours;

    private String c_topscore;
}
