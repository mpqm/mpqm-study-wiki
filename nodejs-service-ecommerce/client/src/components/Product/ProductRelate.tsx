import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { productDatas } from '../../statics/productData';
import { ProductData } from '../../utils/interface';
import ProductCard from './ProductItem';
import ProductCardDetailCard from './ProductDetailCard';
import { customRenderBullet } from '../../styles/styles';

interface ProductRelateProps {
  productData: ProductData | null;
}

function ProductRelate({ productData }: ProductRelateProps) {
  const [open, setOpen] = useState<{
    flag: boolean;
    productData: ProductData | null;
  }>();
  const [products, setProducts] = useState<ProductData[]>();
  const navigate = useNavigate();
  const handleSubmit = (i: ProductData) => {
    navigate(`/product/${i.id}`);
  };
  useEffect(() => {
    const sameCategory = productData?.category ?? [];
    switch (productData?.category?.length) {
      case 1:
        setProducts(
          productDatas
            .filter((i) => i.category[0] === sameCategory[0])
            .sort((a, b) => a.total_sell - b.total_sell),
        );
        break;
      case 2:
        setProducts(
          productDatas
            .filter(
              (i) => i.category[0] === sameCategory[0]
                && i.category[1] === sameCategory[1],
            )
            .sort((a, b) => a.total_sell - b.total_sell),
        );
        break;
      case 3:
        setProducts(
          productDatas
            .filter(
              (i) => i.category[0] === sameCategory[0]
                && i.category[1] === sameCategory[1]
                && i.category[2] === sameCategory[2],
            )
            .sort((a, b) => a.total_sell - b.total_sell),
        );
        break;
      default:
        setProducts(productDatas.sort((a, b) => a.total_sell - b.total_sell));
        break;
    }
  }, [productData?.category]);

  return (
    <div>
      {productData ? (
        <div className="w-11/12 mx-auto mb-20">
          <h1 className="text-center xl:text-start pb-3 text-xl font-bold border-b mb-5">
            {' '}
            관련 상품
          </h1>
          <Swiper
            breakpoints={{
              200: { slidesPerView: 2, spaceBetween: 3 },
              768: { slidesPerView: 5, spaceBetween: 3 },
            }}
            pagination={{ clickable: true, renderBullet: customRenderBullet }}
            modules={[Pagination]}
            className="w-11/12 mx-auto mb-3 border-[1px] border-black rounded-md cursor-pointer relative"
          >
            {products
              && products.map((i, index) => (
                <SwiperSlide key={i.id}>
                  {' '}
                  <ProductCard
                    productData={i}
                    setOpen={(flag, productData) => setOpen({ flag, productData })}
                  />
                  {' '}
                </SwiperSlide>
              ))}
          </Swiper>
          {open?.flag === true ? (
            <ProductCardDetailCard
              productData={open.productData}
              setOpen={(flag, productData) => setOpen({ flag, productData })}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default ProductRelate;
