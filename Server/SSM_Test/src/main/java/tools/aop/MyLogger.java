package tools.aop;


import java.util.logging.Logger;

/**
 * @projectName: SSM
 * @package: tools.aop
 * @className: MyLog
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/8/2023 9:33 AM
 * @version: 1.0
 */

public class MyLogger {
        private static final Logger log= Logger.getLogger(String.valueOf(MyLogger.class));
        public void beforeMethod(){
                log.info("开始执行方法……");
        }
        public void afterMethod(){
                log.info("完成执行方法……");
        }
}
