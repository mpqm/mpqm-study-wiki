package org.servlet.project;

public class GetProductRes {
    Integer product_idx;
    String product_name;
    Integer product_price;
    String product_content;
    String product_image;
    Integer product_amount;
    Integer store_idx;
    public GetProductRes(){}
    public GetProductRes(Integer product_idx, String product_name, Integer product_price, String product_content, String product_image, Integer product_amount, Integer store_idx) {
        this.product_idx = product_idx;
        this.product_name = product_name;
        this.product_price = product_price;
        this.product_content = product_content;
        this.product_image = product_image;
        this.product_amount = product_amount;
        this.store_idx = store_idx;
    }
    public Integer getProduct_idx() { return product_idx;}
    public void setProduct_idx(Integer product_idx) {this.product_idx = product_idx;}
    public String getProduct_name() { return product_name; }
    public void setProduct_name(String product_name) { this.product_name = product_name; }
    public Integer getStore_idx() { return store_idx; }
    public void setStore_idx(Integer store_idx) { this.store_idx = store_idx; }
    public String getProduct_image() { return product_image; }
    public void setProduct_image(String product_image) { this.product_image = product_image; }
    public Integer getProduct_amount() { return product_amount; }
    public void setProduct_amount(Integer product_amount) { this.product_amount = product_amount; }
    public String getProduct_content() { return product_content; }
    public void setProduct_content(String product_content) { this.product_content = product_content;}
    public Integer getProduct_price() { return product_price; }
    public void setProduct_price(Integer product_price) { this.product_price = product_price; }
}