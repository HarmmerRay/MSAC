package configs;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * @projectName: SSM
 * @package: configs
 * @className: Student4Config
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/5/2023 5:35 PM
 * @version: 1.0
 */
@Configuration
@ComponentScan("entity")
@ComponentScan("dao")
@ComponentScan("service")
public class MyConfig {
}
