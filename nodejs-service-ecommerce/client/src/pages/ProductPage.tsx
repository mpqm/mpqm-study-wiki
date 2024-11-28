import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productDatas } from '../statics/productData';
import { ProductData } from '../utils/interface';
import Header from '../components/Layout/Header';
import ProductCard from '../components/Product/ProductItem';
import ProductCardDetail from '../components/Product/ProductDetailCard';

function ProductPage() {
  const [open, setOpen] = useState<{
    flag: boolean;
    productData: ProductData | null;
  }>();
  const [searchPrams] = useSearchParams();
  const categoryData = searchPrams.get('category')?.split('/');
  const [productsData, setProductsData] = useState<ProductData[]>();

  useEffect(() => {
    let d;
    switch (categoryData?.length) {
      case 1:
        d = productDatas
          && productDatas
            .filter((i) => i.category[0] === categoryData[0])
            .sort((a, b) => a.total_sell - b.total_sell);
        setProductsData(d);
        break;
      case 2:
        d = productDatas
          && productDatas
            .filter(
              (i) => i.category[0] === categoryData[0]
                && i.category[1] === categoryData[1],
            )
            .sort((a, b) => a.total_sell - b.total_sell);
        setProductsData(d);
        break;
      case 3:
        d = productDatas
          && productDatas
            .filter(
              (i) => i.category[0] === categoryData[0]
                && i.category[1] === categoryData[1]
                && i.category[2] === categoryData[2],
            )
            .sort((a, b) => a.total_sell - b.total_sell);
        setProductsData(d);
        break;
      default:
        d = productDatas
          && productDatas.sort((a, b) => a.total_sell - b.total_sell);
        setProductsData(d);
        break;
    }
    window.scrollTo(0, 0);
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

export default ProductPage;
