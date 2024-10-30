package org.servlet.jdbc.member;

import java.sql.*;
public class MemberDao {
    public Boolean read(MemberDto dto) {
        try {
            Connection connection = DriverManager.getConnection(
                    "jdbc:mariadb://123.123.123.3:3306/servlet",
                    "pjs", "qwer1234"
            );
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM member WHERE id='"+dto.getId()+"' AND pw='"+dto.getPw()+"'");
            if (rs.next()) { return true; }
        } catch (SQLException e) { throw new RuntimeException(e); }
        return false;
    }
}
