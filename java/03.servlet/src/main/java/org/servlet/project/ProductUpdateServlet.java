package org.servlet.project;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

@WebServlet("/product/update")
public class ProductUpdateServlet extends HttpServlet {
    ProductDao ProductDao;
    ObjectMapper mapper;
    @Override
    public void init() {
        ProductDao = new ProductDao();
        mapper = new ObjectMapper();
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
    }
    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        BufferedReader reader = req.getReader();
        StringBuilder json = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {json.append(line);}
        PostProductReq postProductReq =  mapper.readValue(json.toString(), PostProductReq.class);
        boolean result = ProductDao.update(postProductReq);
        String jsonResponse;
        if (result) {
            BaseResponse response = new BaseResponse(BaseResponseMessage.POPUP_GOODS_UPDATE_SUCCESS);
            jsonResponse = mapper.writeValueAsString(response);
        } else {
            BaseResponse response = new BaseResponse(BaseResponseMessage.POPUP_GOODS_UPDATE_FAIL);
            jsonResponse = mapper.writeValueAsString(response);
        }
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        resp.getWriter().write(jsonResponse);
    }
}
