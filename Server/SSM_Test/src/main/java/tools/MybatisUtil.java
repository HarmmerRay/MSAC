package tools;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.InputStream;
import java.io.Reader;

/**
 * @projectName: SSM
 * @package: tools
 * @className: MybatisUtil
 * @author: HarmmerRay
 * @description: TODO
 * @date: 3/16/2023 2:07 PM
 * @version: 1.0
 */

public class MybatisUtil {
    private MybatisUtil(){
    }
    private static final String resource="mybatis-config.xml";
    private static SqlSessionFactory sqlSessionFactory=null;
    private static ThreadLocal<SqlSession> threadLocal=new ThreadLocal<SqlSession>();  //保证拿到的sqlSession是同一个 session
    //若getSession中每次都openSession 就是get几次得到几个不同的session
    //若static块中 就建立一个getSession 就返回那一个，能做到同一个session  但是若关闭一次，则整个工程需要重启才能有新的session
    static {
        InputStream inputStream=null;
        try {
            inputStream=Resources.getResourceAsStream(resource);
            sqlSessionFactory=new SqlSessionFactoryBuilder().build(inputStream);
        } catch (IOException e) {
            e.printStackTrace();
            throw new ExceptionInInitializerError("初始化mybatis失败，请检查配置文件或数据库");
        }
    }
    public static SqlSessionFactory getSqlSessionFactory(){
        return sqlSessionFactory;
    }
    public static SqlSession getSession(){
        SqlSession sqlSession=threadLocal.get();
        if(sqlSession==null){
            sqlSession=(sqlSessionFactory !=null) ?sqlSessionFactory.openSession():null;
            threadLocal.set(sqlSession);
        }
        return sqlSession;
    }
    public static boolean closeSession(){
        SqlSession sqlSession= (SqlSession) threadLocal.get();
        threadLocal.set(null);
        if (sqlSession !=null) {
            sqlSession.close();
            return true;
        }
        throw new RuntimeException("sqlSession关闭失败 session已关闭或其它原因");
    }
    //需调用方得到session用完后手动关闭
    public static SqlSession getUniqueSession(){
        return sqlSessionFactory.openSession();
    }
}
