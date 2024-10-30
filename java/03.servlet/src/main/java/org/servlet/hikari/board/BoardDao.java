package org.servlet.hikari.board;

import com.zaxxer.hikari.HikariDataSource;
import org.servlet.hikari.DataSourceConfig;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class BoardDao {
    HikariDataSource dataSourceConfig;
    BoardDao() {
        dataSourceConfig = DataSourceConfig.getInstance();
    }

    public BoardDto read(String idx) {
        try {
            Connection connection = dataSourceConfig.getConnection();
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM board WHERE idx='"+idx+"'");
            if (rs.next()) {
                BoardDto dto = new BoardDto(
                        rs.getInt("idx"),
                        rs.getString("title"),
                        rs.getString("contents")
                );
                return dto;
            }
        } catch (SQLException e) { throw new RuntimeException(e); }
        return null;
    }

    Boolean save(BoardDto dto) {
        try {
            Connection connection = dataSourceConfig.getConnection();
            Statement stmt = connection.createStatement();
            Integer result = stmt.executeUpdate(
                "INSERT INTO board (title, contents) " +
                    "VALUES ('"+dto.getTitle()+"', '"+dto.getContents()+"')");
            if (result > 0) { return true; }
        } catch (SQLException e) { throw new RuntimeException(e); }
        return false;
    }
}
