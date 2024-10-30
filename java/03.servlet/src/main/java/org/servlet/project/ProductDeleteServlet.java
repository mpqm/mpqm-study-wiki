package org.servlet.project;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/product/delete")
public class ProductDeleteServlet extends HttpServlet {
    ProductDao ProductDao;
    ObjectMapper mapper;
    @Override
    public void init() {
        ProductDao = new ProductDao();
        mapper = new ObjectMapper();
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
    }
    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Integer product_idx = Integer.parseInt(req.getParameter("product_idx"));
        boolean result = ProductDao.delete(product_idx);
        String jsonResponse;
        if (result) {
            BaseResponse response = new BaseResponse(result);
            jsonResponse = mapper.writeValueAsString(response);
        } else {
            BaseResponse response = new BaseResponse(BaseResponseMessage.REQUEST_SUCCESS);
            jsonResponse = mapper.writeValueAsString(response);
        }
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        resp.getWriter().write(jsonResponse);
    }
}
