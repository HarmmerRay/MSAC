package tools.aop;

import org.springframework.aop.MethodBeforeAdvice;

import java.lang.reflect.Method;
import java.util.logging.Logger;

/**
 * @projectName: SSM
 * @package: tools.aop
 * @className: LoggerBefore
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/6/2023 5:19 PM
 * @version: 1.0
 */

public class LoggerBefore implements MethodBeforeAdvice {//需要实现这个 前置通知的接口  很是繁琐
    private static final Logger log= Logger.getLogger(String.valueOf(LoggerBefore.class));
    @Override
    public void before(Method method, Object[] objects, Object o) throws Throwable {
        log.info("开始查找所有同学……");
    }
}
