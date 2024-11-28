import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import { productDatas } from '../statics/productData';
import { ProductData } from '../utils/interface';
import ProductDetail from '../components/Product/ProductDetail';
import ProductRelate from '../components/Product/ProductRelate';

function ProductDetailPage() {
  const { productId } = useParams();
  const [productData, setProductData] = useState<ProductData>();
  useEffect(() => {
    const productData = productDatas.find((i) => i.id === Number(productId));
    setProductData(productData);
  });
  return (
    <div>
      <Header />
      <ProductDetail productData={productData!} />
      <ProductRelate productData={productData!} />
    </div>
  );
}

export default ProductDetailPage;
