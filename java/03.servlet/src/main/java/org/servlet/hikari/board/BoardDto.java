package org.servlet.hikari.board;

public class BoardDto {
    private Integer idx;
    private String title;
    private String contents;

    public BoardDto(String title, String contents) {
        this.title = title;
        this.contents = contents;
    }
    public BoardDto(Integer idx, String title, String contents) {
        this.idx = idx;
        this.title = title;
        this.contents = contents;
    }
    public Integer getIdx() {
        return idx;
    }

    public void setIdx(Integer idx) {
        this.idx = idx;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }
}
