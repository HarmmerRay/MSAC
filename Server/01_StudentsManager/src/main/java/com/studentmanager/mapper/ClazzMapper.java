package com.studentmanager.mapper;

import com.studentmanager.domain.Clazz;

import java.util.List;
import java.util.Map;

/**
 * @Classname ClazzMapper
 * @Description None
 * @Created by Harmmer
 */
public interface ClazzMapper {
    List<Clazz> queryList(Map<String, Object> paramMap);

    Integer queryCount(Map<String, Object> paramMap);

    int addClazz(Clazz clazz);

    int deleteClazz(List<Integer> ids);

    int editClazz(Clazz clazz);

    Clazz findByName(String clazzName);
}
