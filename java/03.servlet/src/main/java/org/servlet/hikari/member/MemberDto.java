package org.servlet.hikari.member;

public class MemberDto {
    private Integer idx;
    private String id;
    private String pw;
    private String name;
    public MemberDto(Integer idx, String id, String pw, String name) {
        this.idx = idx;
        this.id = id;
        this.pw = pw;
        this.name = name;
    }
    public MemberDto(String id, String pw, String name) {
        this.id = id;
        this.pw = pw;
        this.name = name;
    }
    public MemberDto(String id, String pw) {
        this.id = id;
        this.pw = pw;
    }
    public Integer getIdx() { return idx; }
    public void setIdx(Integer idx) { this.idx = idx; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public void setId(String id) { this.id = id; }
    public void setPw(String pw) { this.pw = pw; }
    public String getId() { return id; }
    public String getPw() { return pw; }
}
