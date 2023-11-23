package Spring_Transaction_Test;

import dao.demo.AlipayDao;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * @projectName: SSM
 * @package: Spring_Transaction_Test
 * @className: JdbcTemplateNoTransactionTest
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/8/2023 10:49 AM
 * @version: 1.0
 */

public class JdbcTemplateNoTransactionTest {
    public static void main(String[] args) {
        ApplicationContext applicationContext=new ClassPathXmlApplicationContext("applicationContext.xml");
        AlipayDao alipayDao= (AlipayDao) applicationContext.getBean("alipayDao");
        alipayDao.transfer("张三","李四",500);
    }
}
