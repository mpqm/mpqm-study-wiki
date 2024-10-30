package org.servlet.jdbc.member;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/member-jdbc")
public class MemberServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        MemberDto memberDto = new MemberDto(req.getParameter("id"), req.getParameter("pw"));
        MemberDao memberDao = new MemberDao();
        resp.setContentType("text/html;charset=UTF-8");
        PrintWriter out = resp.getWriter();
        if(memberDao.read(memberDto)) { out.println("로그인 성공!!!"); }
        else { out.println("로그인 실패!!!"); }
    }
}
