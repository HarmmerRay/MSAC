package entity.demo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @projectName: SSM
 * @package: entity
 * @className: User
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/8/2023 10:26 AM
 * @version: 1.0
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private String name;
    private double acount;
}
