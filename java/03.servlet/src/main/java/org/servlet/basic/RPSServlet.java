package org.servlet.basic;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;


@WebServlet("/rps")
public class RPSServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html; charset=utf-8");
        PrintWriter out = resp.getWriter();
        String rpsInput = req.getParameter("input");
        Integer rpsU;
        if(rpsInput.equals("가위")){ rpsU = 0; }
        else if (rpsInput.equals("바위")) { rpsU = 1; }
        else if (rpsInput.equals("보")) { rpsU = 2; }
        else {rpsU = 3;}
        Integer rpsC = (int)(Math.random()*3);
        if (rpsU == rpsC) {
            out.printf("너가 낸거 %d 컴퓨터가 낸거 %d : 비겼음", rpsU, rpsC);
        }
        else if (rpsU == 0 && rpsC == 1 || rpsU == 1 && rpsC == 2 || rpsU == 2 && rpsC == 0){
            out.printf("너 %d 컴퓨터 %d : 컴퓨터가 이김", rpsU, rpsC);
        }else{
            out.printf("너 %d 컴퓨터 %d : 너가 이김", rpsU, rpsC);
        }
    }
}
