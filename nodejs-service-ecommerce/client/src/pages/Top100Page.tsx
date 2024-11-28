import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productDatas } from '../statics/productData';
import { ProductData } from '../utils/interface';
import Header from '../components/Layout/Header';
import ProductCard from '../components/Product/ProductItem';
import ProductCardDetail from '../components/Product/ProductDetailCard';

function Top100Page() {
  const [productsData, setProductsData] = useState<ProductData[]>();
  const [open, setOpen] = useState<{
    flag: boolean;
    productData: ProductData | null;
  }>();
  useEffect(() => {
    const totalSellProduct = productDatas && productDatas.sort((a, b) => b.total_sell - a.total_sell);
    const top100 = totalSellProduct?.slice(0, 99);
    setProductsData(top100);
  }, []);
  return (
    <div>
      <Header />
      <div className="mx-auto w-11/12">
        <div className="grid grid-cols-1 gap-[20px] xl:grid-cols-2 xl:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {productsData
            && productsData.map((i, index) => (
              <ProductCard
                key={i.id}
                productData={i}
                setOpen={(flag, productData) => setOpen({ flag, productData })}
              />
            ))}
        </div>
        {productsData && productsData.length === 0 ? (
          <h1 className="text-center w-full text-[20px]">
            상품을 찾을 수 없습니다.
          </h1>
        ) : null}
        {open?.flag === true ? (
          <ProductCardDetail
            productData={open.productData}
            setOpen={(flag, productData) => setOpen({ flag, productData })}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Top100Page;
