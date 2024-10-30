package org.servlet.hikari;


import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DBHikariTest {
    public static void main(String[] args) {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:mariadb://123.123.123.3:3306/servlet");
        config.setUsername("pjs");
        config.setPassword("qwer1234");
        config.setMaximumPoolSize(10);
        config.setMinimumIdle(5);
        HikariDataSource dataSource = new HikariDataSource(config);
        try {
            Connection connection = dataSource.getConnection();
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM board");
            while (rs.next()) {
                String idx = rs.getString("idx");
                String title = rs.getString("title");
                String contents = rs.getString("contents");
                System.out.println(idx);
                System.out.println(title);
                System.out.println(contents);
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}