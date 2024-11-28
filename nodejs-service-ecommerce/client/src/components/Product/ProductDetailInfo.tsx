import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductData } from '../../utils/interface';

interface ProductDetailCardInfo {
  productData: ProductData;
}
function ProductDetailInfo({ productData }: ProductDetailCardInfo) {
  const [active, setActive] = useState(1);

  return (
    <div className="border-[1px] border-black px-5 xl:px-10 my-10 xl:my-10 rounded-md text-sm xl:text-base">
      <div className="w-full flex space-x-5 border-b pt-10 pb-2">
        <div className="relative">
          <h1
            className="px-1 font-bold cursor-pointer text-sm xl:text-base"
            onClick={() => setActive(1)}
          >
            {' '}
            상품 상세 정보
            {' '}
          </h1>
          {active === 1 ? (
            <div className="absolute bottom-[-27%] left-0 h-[3px] w-full bg-[black]" />
          ) : null}
        </div>
        <div className="relative">
          <h1
            className="px-1 font-bold cursor-pointer text-sm xl:text-base"
            onClick={() => setActive(2)}
          >
            {' '}
            상품 리뷰
            {' '}
          </h1>
          {active === 2 ? (
            <div className="absolute bottom-[-27%] left-0 h-[3px] w-full bg-[black]" />
          ) : null}
        </div>
        <div className="relative">
          <h1
            className="px-1 font-bold cursor-pointer text-sm xl:text-base"
            onClick={() => setActive(3)}
          >
            {' '}
            판매자 정보
            {' '}
          </h1>
          {active === 3 ? (
            <div className="absolute bottom-[-27%] left-0 h-[3px] w-full bg-[black]" />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <p className="py-2 text-[18px] pb-10 whitespace-pre-line">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          laboriosam error id omnis explicabo? Dolorum commodi est totam non,
          iure ad eius aliquid similique, ex nemo vitae ab voluptatum
          recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor laboriosam error id omnis explicabo? Dolorum commodi est totam
          non, iure ad eius aliquid similique, ex nemo vitae ab voluptatum
          recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor laboriosam error id omnis explicabo? Dolorum commodi est totam
          non, iure ad eius aliquid similique, ex nemo vitae ab voluptatum
          recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor laboriosam error id omnis explicabo? Dolorum commodi est totam
          non, iure ad eius aliquid similique, ex nemo vitae ab voluptatum
          recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor laboriosam error id omnis explicabo? Dolorum commodi est totam
          non, iure ad eius aliquid similique, ex nemo vitae ab voluptatum
          recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor laboriosam error id omnis explicabo? Dolorum commodi est totam
          non, iure ad eius aliquid similique, ex nemo vitae ab voluptatum
          recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor laboriosam error id omnis explicabo? Dolorum commodi est totam
          non, iure ad eius aliquid similique, ex nemo vitae ab voluptatum
          recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor laboriosam error id omnis explicabo? Dolorum commodi est totam
          non, iure ad eius aliquid similique, ex nemo vitae ab voluptatum
          recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor laboriosam error id omnis explicabo? Dolorum commodi est totam
          non, iure ad eius aliquid similique, ex nemo vitae ab voluptatum
          recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor laboriosam error id omnis explicabo? Dolorum commodi est totam
          non, iure ad eius aliquid similique, ex nemo vitae ab voluptatum
          recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor laboriosam error id omnis explicabo? Dolorum commodi est totam
          non, iure ad eius aliquid similique, ex nemo vitae ab voluptatum
          recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor laboriosam error id omnis explicabo? Dolorum commodi est totam
          non, iure ad eius aliquid similique, ex nemo vitae ab voluptatum
          recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor laboriosam error id omnis explicabo? Dolorum commodi est totam
          non, iure ad eius aliquid similique, ex nemo vitae ab voluptatum
          recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor laboriosam error id omnis explicabo? Dolorum commodi est totam
          non, iure ad eius aliquid similique, ex nemo vitae ab voluptatum
          recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor laboriosam error id omnis explicabo? Dolorum commodi est totam
          non, iure ad eius aliquid similique, ex nemo vitae ab voluptatum
          recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor laboriosam error id omnis explicabo? Dolorum commodi est totam
          non, iure ad eius aliquid similique, ex nemo vitae ab voluptatum
          recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor laboriosam error id omnis explicabo? Dolorum commodi est totam
          non, iure ad eius aliquid similique, ex nemo vitae ab voluptatum
          recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor laboriosam error id omnis explicabo? Dolorum commodi est totam
          non, iure ad eius aliquid similique, ex nemo vitae ab voluptatum
          recusandae?
        </p>
      ) : null}
      {active === 2 ? (
        <div className="w-full justify-center min-h-[40vh] flex items-center">
          <p>등록된 리뷰가 없습니다.</p>
        </div>
      ) : null}
      {active === 3 ? (
        <div className="w-full block xl:flex p-5">
          <div className="w-full xl:w-[50%]">
            <div className="flex items-center">
              <div className="flex mb-5">
                <img
                  src={productData.shop.shop_avatar.url}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full mr-2"
                />
                <h1 className="p-3 text-[15px]">
                  {productData.shop.name}
                  {' '}
                  (
                  {productData.shop.ratings}
                  )
                </h1>
              </div>
            </div>
            <p className="pt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              deleniti sit, architecto ad vero iusto distinctio omnis porro
              voluptate voluptatem in fugiat? Consectetur saepe, obcaecati
              deserunt exercitationem nesciunt assumenda error!
            </p>
          </div>
          <div className="w-full xl:w-[50%] mt-5 xl:mt-0 xl:flex flex-col items-end">
            <div className="text-left">
              <h1 className="font-md">판매자 가입일: 2024.1.20</h1>
              <h1 className="font-md">등록된 상품수: 2024</h1>
              <h1 className="font-md">등록된 리뷰수: 2024</h1>
              <Link to="/">
                <div className="w-full bg-white h-[40px] px-2 border-[1px] border-[black] flex items-center justify-center cursor-pointer rounded-md  mt-3">
                  스토어 방문
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProductDetailInfo;
