package org.servlet.jdbc;

import java.sql.*;

public class DBJDBCTest {
    public static void main(String[] args) {
        try {
            Connection connection = DriverManager.getConnection(
                    "jdbc:mariadb://123.123.123.3:3306/servlet",
                    "pjs", "qwer1234"
            );
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM board");
            while (rs.next()) {
                String idx = rs.getString("idx");
                String title = rs.getString("title");
                String contents = rs.getString("contents");
                System.out.println(idx + " " + title + " " + contents);
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}