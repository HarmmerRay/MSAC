package tools.aop;

import org.springframework.aop.AfterReturningAdvice;

import java.lang.reflect.Method;
import java.util.logging.Logger;

/**
 * @projectName: SSM
 * @package: tools.aop
 * @className: LoggerAfterReturning
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/6/2023 5:21 PM
 * @version: 1.0
 */

public class LoggerAfterReturning implements AfterReturningAdvice {
    private static final Logger log= Logger.getLogger(String.valueOf(LoggerAfterReturning.class));
    @Override
    public void afterReturning(Object o, Method method, Object[] objects, Object o1) throws Throwable {
        log.info("完成添加学生……");
    }
}
