package org.servlet.jdbc.board;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

@WebServlet("/board-jdbc")
public class BoardServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            String idx = req.getParameter("titleId");
            Connection connection = DriverManager.getConnection(
                    "jdbc:mariadb://123.123.123.3:3306/servlet",
                    "pjs", "qwer1234"
            );
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM board where idx=" + idx);
            if (rs.next()) {
                String idxx = rs.getString("idx");
                String title = rs.getString("title");
                String contents = rs.getString("contents");
                PrintWriter out = resp.getWriter();
                out.println('|' + idxx + '|' + title + '|' + contents + '|');
            }
        } catch (SQLException e) { throw new RuntimeException(e); }
    }
}
