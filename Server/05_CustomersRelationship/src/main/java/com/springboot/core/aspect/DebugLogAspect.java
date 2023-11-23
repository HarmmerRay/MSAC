package com.springboot.core.aspect;

import org.apache.shiro.SecurityUtils;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.springboot.utils.JsonUtil;
import com.springboot.utils.PageResultSet;
import com.springboot.utils.Result;
import com.springboot.utils.WebUtil;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;


@Order(2)
@Aspect
@Component
public class DebugLogAspect {

    private static final String info = "Request info user=%s%nip=%s | session=%s | %s %s%n%s | %sms";
    private static final String trace = "Encoding %s | ContentType %s | ContentLength %s";

    @Pointcut("execution(* com.springboot.modules.*.*.*(..))")
    public void debugPointcut() {
    }

    @Around("debugPointcut()")
    public Object doAround(ProceedingJoinPoint point) throws Throwable {
        long time = System.currentTimeMillis();
        try {
            Object returns = point.proceed();
            debugger(point, returns, System.currentTimeMillis() - time);
            return returns;
        } catch (Throwable e) {
            debugger(point, e, System.currentTimeMillis() - time);
            throw e;
        }
    }

    private void debugger(ProceedingJoinPoint point, Object returns, Long time) {
        Logger log = LoggerFactory.getLogger(point.getTarget().getClass());
        // 记录请求日志
        if (log.isDebugEnabled()) {
            String sign = point.getSignature().toString();

            // 获取相关参数
            WebUtil wu = WebUtil.getInstance();
            HttpServletRequest req = wu.getRequest();// 请求对象
            // 当前用户
            String username = (String) SecurityUtils.getSubject().getPrincipal();
            String qs = req.getQueryString();// 查询参数
            String url = req.getRequestURL().append(qs == null ? "" : "?" + qs).toString();// url
            String ip = wu.getIpAddress();// IP地址
            String sid = wu.getSessionId();// 会话id
            String method = req.getMethod();// 方法
            String status = null;
            String msg = null;
            if (returns != null && returns instanceof Result) {
                Result<?> result = (Result<?>) returns;
                status = result.getCode();
                msg = result.getMsg();
            }

            if (returns != null && returns instanceof PageResultSet) {
                msg = "分页查询返回";
                status = HttpStatus.OK.toString();
            }

            String text = null;
            if (returns != null) {
                String tmp;
                if (returns instanceof CharSequence) {
                    tmp = returns.toString();
                } else if (returns instanceof Throwable) {
                    String m = ((Throwable) returns).getMessage();
                    String n = returns.getClass().getSimpleName();
                    tmp = m == null ? n : n + ": " + m;
                } else {
                    tmp = JsonUtil.getInstance().obj2json(returns);
                }
                text = tmp;
            }
            StringBuilder builder = new StringBuilder();
            builder.append("\n");
            builder.append("/*******************************************************\\");
            builder.append("\n");
            builder.append(String.format(info, username, ip, sid, method, url, sign, time));
            if (!StringUtils.isEmpty(status) && !StringUtils.isEmpty(msg)) {
                builder.append(" | ").append(status + ":" + msg);
            } else if (!StringUtils.isEmpty(status)) {
                builder.append(" | ").append(status);
            } else if (!StringUtils.isEmpty(msg)) {
                builder.append(" | ").append(msg);
            }

            if (log.isTraceEnabled()) {
                // 请求参数
                StringBuffer params = new StringBuffer();
                for (Enumeration<String> e = req.getParameterNames(); e.hasMoreElements(); ) {
                    String k = e.nextElement();
                    params.append(k).append("=").append(req.getParameter(k)).append(";");
                }
                // 请求头
                StringBuffer headers = new StringBuffer();
                for (Enumeration<String> e = req.getHeaderNames(); e.hasMoreElements(); ) {
                    String k = e.nextElement();
                    headers.append(k).append("=").append(req.getHeader(k)).append(";");
                }
                String contentType = req.getContentType();
                String encoding = req.getCharacterEncoding();
                long length = req.getContentLength();
                builder.append("\n");
                builder.append("Response ").append(text);
                builder.append("\n");
                builder.append(String.format(trace, encoding, contentType, length));
                if (params.length() > 0) {
                    builder.append("\n");
                    builder.append("Parameters ").append(params);
                }
                if (headers.length() > 0) {
                    builder.append("\n");
                    builder.append("Headers ").append(headers);
                }
            }
            builder.append("\n");
            builder.append("\\*******************************************************/");
            log.debug(builder.toString());
        }
    }


}
