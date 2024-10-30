package org.servlet.project;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

@WebServlet("/product/search")
public class ProductSearchServlet extends HttpServlet {
    ProductDao ProductDao;
    ObjectMapper mapper;
    @Override
    public void init() {
        ProductDao = new ProductDao();
        mapper = new ObjectMapper();
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
    }
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String product_name = req.getParameter("product_name");
        GetProductRes getProductRes = ProductDao.find(product_name);
        String jsonResponse;
        if (getProductRes != null) {
            BaseResponse response = new BaseResponse(getProductRes);
            jsonResponse = mapper.writeValueAsString(response);
        } else {
            BaseResponse response = new BaseResponse(BaseResponseMessage.POPUP_GOODS_SEARCH_FAIL);
            jsonResponse = mapper.writeValueAsString(response);
        }
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        resp.getWriter().write(jsonResponse);
    }
}
