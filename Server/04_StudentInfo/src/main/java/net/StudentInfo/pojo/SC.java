package net.StudentInfo.pojo;

public class SC implements java.io.Serializable {
    /**
     *  序列化
     */
    private static final long serialVersionUID = 1L;
    //id主键
    private Integer id;
    //学号
    private String sid;
    //课程编号
    private String cid;

    /**
     * 默认构造方法
     */
    public SC() {

    }

    /**
     *  置取方法
     */
    public Integer getId() {
        return id;
    }


    public void setId(Integer id) {
        this.id = id;
    }


    public String getSid() {
        return sid;
    }

    public void setSid(String sid) {
        this.sid = sid;
    }

    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid;
    }


}


