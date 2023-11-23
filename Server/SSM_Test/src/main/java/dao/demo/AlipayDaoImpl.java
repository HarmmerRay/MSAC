package dao.demo;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @projectName: SSM
 * @package: dao.demo
 * @className: AlipayDao
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/8/2023 10:29 AM
 * @version: 1.0
 */

public class AlipayDaoImpl implements AlipayDao{
    JdbcTemplate jdbcTemplate;
    public JdbcTemplate getJdbcTemplate(){
        return jdbcTemplate;
    }
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }
    @Override
//    @Transactional(propagation = Propagation.REQUIRED,isolation = Isolation.DEFAULT,readOnly = false)
    public void transfer(String fromA, String toB, int amount) {
        jdbcTemplate.update("update alipay set acount = acount - ? where aliname = ?;",amount,fromA);
        Integer.parseInt("a");//制造错误
        jdbcTemplate.update("update alipay set acount = acount + ? where aliname = ?",amount,toB);
    }
}
