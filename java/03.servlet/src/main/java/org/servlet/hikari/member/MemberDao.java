package org.servlet.hikari.member;

import com.zaxxer.hikari.HikariDataSource;
import org.servlet.hikari.DataSourceConfig;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class MemberDao {
    HikariDataSource dataSourceConfig;
    MemberDao() { dataSourceConfig = DataSourceConfig.getInstance(); }
    public Boolean read(MemberDto dto) {;
        try {
            Connection connection = dataSourceConfig.getConnection();
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery("SELECT * FROM member WHERE id='"+dto.getId()+"' AND pw='"+dto.getPw()+"'");
            if (resultSet.next()) { return true;}
        }
        catch (SQLException e) {throw new RuntimeException(e);}
        return false;
    }
    public Boolean create(MemberDto dto) {
        try {
            Connection connection = dataSourceConfig.getDataSource().getConnection();
            Statement statement = connection.createStatement();
            Integer result = statement.executeUpdate("INSERT INTO web.member (id, pw, name) VALUES ('"+dto.getId()+"', '"+dto.getPw()+"', '"+dto.getName()+"')");
            if (result > 0) {return true;}
        }
        catch (SQLException e) { throw new RuntimeException(e); }
        return false;
    };
}