package org.servlet.hikari.member;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/member-session")
public class MemberSessionServlet extends HttpServlet {
    MemberDao memberDao;
    @Override
    public void init() throws ServletException { memberDao = new MemberDao(); }
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        MemberDto memberDto = new MemberDto(req.getParameter("id"), req.getParameter("pw"));
        String action = req.getParameter("action");
        resp.setContentType("text/html;charset=UTF-8");
        PrintWriter out = resp.getWriter();
        if(action.equals("login")){
            if(memberDao.read(memberDto)){
                req.getSession().setAttribute("isLogin", true); // 세션 저장
                out.println("로그인 성공!!!");
            }
        } else if (action.equals("check")){
            if(req.getSession().getAttribute("isLogin") != null){ out.println("로그인 한 사람!!!"); }
            else { out.println("로그인 안 한 사람!!!"); }
        } else { out.println("로그인 실패!!!"); }
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        MemberDto userDto = new MemberDto(req.getParameter("id"), req.getParameter("pw"), req.getParameter("name"));
        resp.setContentType("text/html;charset=UTF-8");
        PrintWriter out = resp.getWriter();
        if(memberDao.create(userDto)) { out.println("회원 가입 성공!!!");}
        else {out.println("회원 가입 실패!!!");}
    }
}