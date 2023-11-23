package entity.demo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * @projectName: SSM
 * @package: entity
 * @className: CLass
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/1/2023 2:33 PM
 * @version: 1.0
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Component("class")
public class CLazz {
    @Value("软件2102")
    private String name;
    @Value(value = "26")
    private int capacity;
    @Value("信息技术工程学院")
    private String belong;  //属于哪个学院
}
