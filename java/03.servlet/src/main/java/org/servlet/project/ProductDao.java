package org.servlet.project;
import com.zaxxer.hikari.HikariDataSource;


import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProductDao {
    HikariDataSource dataSourceConfig;
    ProductDao() { dataSourceConfig = DataSourceConfig.getInstance(); }
    public List<GetProductRes> findAll() {
        Connection connection = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;
        try {
            connection = dataSourceConfig.getConnection();
            pstmt = connection.prepareStatement("SELECT * FROM test.popup_goods");
            rs = pstmt.executeQuery();
            List<GetProductRes> result = new ArrayList<>();
            while (rs.next()) {
                GetProductRes getProductRes = new GetProductRes(
                        rs.getInt("product_idx"),
                        rs.getString("product_name"),
                        rs.getInt("product_price"),
                        rs.getString("product_content"),
                        rs.getString("product_img"),
                        rs.getInt("product_amount"),
                        rs.getInt("store_idx")
                );
                result.add(getProductRes);
            }
            return result;
        }
        catch (SQLException e) { throw new RuntimeException(e);}
        finally {
            if (pstmt != null) {
                try {pstmt.close();}
                catch (SQLException sqlEx) {} // ignore
                pstmt = null;
            }
            if (connection != null) {
                try { connection.close(); }
                catch (SQLException sqlEx) {} // ignore
                connection = null;
            }
            if (rs != null) {
                try { rs.close(); }
                catch (SQLException sqlEx) {} // ignore
                rs = null;
            }
        }
    }
    public GetProductRes find(String product_name) {
        Connection connection = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;
        try {
            connection = dataSourceConfig.getConnection();
            pstmt = connection.prepareStatement("SELECT * FROM test.popup_goods WHERE product_name= ? ;");
            pstmt.setString(1, product_name);
            rs = pstmt.executeQuery();
            GetProductRes getProductRes = null;
            if (rs.next()) {
                getProductRes = new GetProductRes(
                        rs.getInt("product_idx"),
                        rs.getString("product_name"),
                        rs.getInt("product_price"),
                        rs.getString("product_content"),
                        rs.getString("product_image"),
                        rs.getInt("product_amount"),
                        rs.getInt("store_idx")
                );
            }
            return getProductRes;
        }
        catch (SQLException e) { throw new RuntimeException(e);}
        finally {
            if (pstmt != null) {
                try {pstmt.close();}
                catch (SQLException sqlEx) {} // ignore
                pstmt = null;
            }
            if (connection != null) {
                try { connection.close(); }
                catch (SQLException sqlEx) {} // ignore
                connection = null;
            }
            if (rs != null) {
                try { rs.close(); }
                catch (SQLException sqlEx) {} // ignore
                rs = null;
            }
        }
    }
    public boolean create(PostProductReq postProductReq) {
        Connection connection = null;
        PreparedStatement pstmt = null;
        Integer result = null;
        try {
            connection = dataSourceConfig.getConnection();
            pstmt = connection.prepareStatement("INSERT INTO test.popup_goods (product_name, product_price, product_content, product_image, product_amount, store_idx) VALUES (?, ?, ?, ?, ?, ?);");
            pstmt.setString(1, postProductReq.getProduct_name());
            pstmt.setInt(2, postProductReq.getProduct_price());
            pstmt.setString(3, postProductReq.getProduct_content());
            pstmt.setString(4, postProductReq.getProduct_image());
            pstmt.setInt(5, postProductReq.getProduct_amount());
            pstmt.setInt(6, postProductReq.getStore_idx());
            result = pstmt.executeUpdate();
            if (result > 0) { return true; }
        }
        catch (SQLException e) { throw new RuntimeException(e); }
        finally {
            if (pstmt != null) {
                try {pstmt.close();}
                catch (SQLException sqlEx) {} // ignore
                pstmt = null;
            }
            if (connection != null) {
                try { connection.close(); }
                catch (SQLException sqlEx) {} // ignore
                connection = null;
            }
        }
        return false;
    }
    public boolean update(PostProductReq postProductReq) {
        Connection connection = null;
        PreparedStatement pstmt = null;
        Integer result = null;
        GetProductRes getProductRes = this.find(postProductReq.getProduct_name());
        try {
            connection = dataSourceConfig.getConnection();
            pstmt = connection.prepareStatement("UPDATE test.popup_goods SET product_name = ?, product_price = ?, product_content = ?, product_image = ?, product_amount = ? WHERE product_idx = ?;");
            pstmt.setString(1, postProductReq.getProduct_name());
            pstmt.setInt(2, postProductReq.getProduct_price());
            pstmt.setString(3, postProductReq.getProduct_content());
            pstmt.setString(4, postProductReq.getProduct_image());
            pstmt.setInt(5, postProductReq.getProduct_amount());
            pstmt.setInt(6, getProductRes.getProduct_idx());
            result = pstmt.executeUpdate();
            if (result > 0) { return true; }
        }
        catch (SQLException e) { throw new RuntimeException(e);}
        finally {
            if (pstmt != null) {
                try {pstmt.close();}
                catch (SQLException sqlEx) {} // ignore
                pstmt = null;
            }
            if (connection != null) {
                try { connection.close(); }
                catch (SQLException sqlEx) {} // ignore
                connection = null;
            }
        }
        return false;
    }
    public boolean delete(Integer product_idx) {
        Connection connection = null;
        PreparedStatement pstmt = null;
        Integer result = null;
        try {
            connection = dataSourceConfig.getConnection();
            pstmt = connection.prepareStatement("DELETE FROM test.popup_goods WHERE product_idx = ?;");
            pstmt.setInt(1, product_idx);
            result = pstmt.executeUpdate();
            if (result > 0) { return true; }
        }
        catch (SQLException e) { throw new RuntimeException(e);}
        finally {
            if (pstmt != null) {
                try {pstmt.close();}
                catch (SQLException sqlEx) {} // ignore
                pstmt = null;
            }
            if (connection != null) {
                try { connection.close(); }
                catch (SQLException sqlEx) {} // ignore
                connection = null;
            }
            return false;
        }
    }
}