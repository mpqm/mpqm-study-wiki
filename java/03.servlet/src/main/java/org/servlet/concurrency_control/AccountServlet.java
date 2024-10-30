package org.servlet.concurrency_control;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

@WebServlet("/account")
public class AccountServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String action = req.getParameter("action");
        String userName = req.getParameter("userName");
        Integer money = Integer.parseInt(req.getParameter("money"));
        try {
            Connection connection = DriverManager.getConnection( "jdbc:mariadb://123.123.123.3:3306/servlet", "pjs", "qwer1234" );
            Statement statement = connection.createStatement();
            // DB 동시성 제어
            // 쓰레드 세이프: 각각의 스레드가 순차적으로 작업을 수행했을 때와 동시에 작업을 수행했을 때 결과가 같은 것
            synchronized (this) {
                ResultSet resultSet = statement.executeQuery("SELECT money FROM accounts WHERE username='" + userName + "'");
                if (resultSet.next()) {
                    Integer myMoney = resultSet.getInt("money");
                    if (action.equals("입금")) {
                        money = myMoney + money;
                        statement.executeUpdate("UPDATE accounts SET money=" + money + " WHERE username='" + userName + "'");
                    } else {
                        money = myMoney - money;
                        statement.executeUpdate("UPDATE accounts SET money=" + money + " WHERE username='" + userName + "'");
                    }
                    PrintWriter out = resp.getWriter();
                    out.println(money);
                }
            }
        }
        catch (SQLException e) { throw new RuntimeException(e);}
    }
}
