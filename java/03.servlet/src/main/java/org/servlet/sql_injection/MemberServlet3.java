package org.servlet.sql_injection;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

@WebServlet("/member3")
public class MemberServlet3 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String action = req.getParameter("action");
        String id = req.getParameter("id");
        String pw = req.getParameter("pw");
        resp.setContentType("text/html;charset=UTF-8");
        PrintWriter out = resp.getWriter();
        if (action.equals("login")) {
            Connection connection = null;
            PreparedStatement pstmt = null;
            ResultSet rs = null;
            try {
                connection = DriverManager.getConnection("jdbc:mariadb://10.10.10.10:3306/web", "sjb", "qwer1234");
                pstmt = connection.prepareStatement("SELECT * FROM member WHERE id='?' AND pw='?'");
                pstmt.setString(1, id);
                pstmt.setString(2, pw);
                rs = pstmt.executeQuery();
                if (rs.next()) {
                    req.getSession().setAttribute("isLogin", true);
                    out.println("로그인 성공");
                }
                else { out.println("로그인 실패"); }
            }
            catch (SQLException e) { throw new RuntimeException(e); }
        } else if (action.equals("check")) {
            if (req.getSession().getAttribute("isLogin") != null && (Boolean) req.getSession().getAttribute("isLogin")) { out.println("로그인 한 사람"); }
            else { out.println("로그인 안 한 사람"); }
        }
    }
}
