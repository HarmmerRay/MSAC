package net.StudentInfo.service;

import net.StudentInfo.pojo.Grade;

import java.util.List;

public interface GradeService {
	
	/**
     * 	 添加成绩
     * @param grand   成绩
     * @return  插入结果 !=0则插入成功
     */
    public int insertGrade(Grade grade);
    /**
     * 	查询学生自己的总学分
     */
    public String queryCreditsSum(String sid);
    /**
     * 	学生查看本人已修改课程
     */
    public List<Grade> getEedCourseBySid(int pageNo, int pageSize, String sid);

}
