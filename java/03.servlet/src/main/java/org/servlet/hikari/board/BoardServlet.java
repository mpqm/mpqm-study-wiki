package org.servlet.hikari.board;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;


@WebServlet("/board-hikari")
public class BoardServlet extends HttpServlet {
    BoardDao dao = new BoardDao();
    @Override
    public void init() throws ServletException {
        dao = new BoardDao();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String idx = req.getParameter("idx");
        BoardDto dto = dao.read(idx);
        resp.setContentType("text/html;charset=UTF-8");

        PrintWriter out = resp.getWriter();

        if(dto != null) {
            out.println(dto.getIdx());
            out.println(dto.getTitle());
            out.println(dto.getContents());
        } else {
            out.println("그런거 없음");
        }

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        BoardDto dto = new BoardDto(req.getParameter("title"), req.getParameter("contents"));
        resp.setContentType("text/html;charset=UTF-8");

        PrintWriter out = resp.getWriter();

        if(dao.save(dto)) {
            out.println("잘 저장됨");
        } else {
            out.println("잘 저장안됨");
        }
    }
}
