import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { ProductData } from '../../utils/interface';
import ProductDetailInfo from './ProductDetailInfo';

interface ProductDetailProps {
  productData: ProductData;
}
function ProductDetail({ productData }: ProductDetailProps) {
  const [count, setCount] = useState(1);
  const [clickImage, setClickImage] = useState(false);
  const [clickHeart, setClickHeart] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  const calCount = (flag: string) => {
    if (flag === '-') {
      if (count > 1) {
        setCount(count - 1);
      }
    } else if (flag === '+') {
      setCount(count + 1);
    }
  };

  return (
    <div className="bg-white">
      kkkkkkkkkk
      {productData ? (
        <div className="w-11/12 mx-auto">
          <div className="w-full py-4">
            <div className="block w-full xl:flex">
              <div className="w-full xl:w-[50%] ">
                <img
                  src={productData.image_Url[select].url}
                  className="w-full xl:w-[75%] h-[400px] xl:h-[500px] mb-1"
                />
                <div className="w-full flex">
                  <div
                    className={`${select === 0 ? 'border-[1px] border-black' : 'null'} cursor-pointer`}
                  >
                    <img
                      src={productData?.image_Url[0].url}
                      className="h-[100px] xl:h-[200px]"
                      onClick={() => setSelect(0)}
                    />
                  </div>
                  <div
                    className={`${select === 1 ? 'border-[1px] border-black' : 'null'} cursor-pointer`}
                  >
                    <img
                      src={productData?.image_Url[1].url}
                      className="h-[100px] xl:h-[200px]"
                      onClick={() => setSelect(1)}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-[50%]">
                <div className="flex my-5">
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
                <h1 className="font-bold text-[20px]">{productData?.name}</h1>
                <p>{productData.description}</p>
                <div className="flex font-bold text-[20px] mb-5 space-x-3 text-sm xl:text-base">
                  <h1>
                    {productData.price === 0
                      ? productData.price
                      : productData.discount_price}
                    {' '}
                    원
                  </h1>
                  <h1 className="text-[#ff0000] line-through">
                    {productData.price ? `${productData.price}원` : null}
                  </h1>
                  <h1>
                    {productData.total_sell}
                    {' '}
                    판매
                  </h1>
                </div>
                <div className="flex tems-center justify-between flex-col space-y-1 w-full text-center text-sm xl:text-base">
                  <div className="flex">
                    <button
                      onClick={() => calCount('-')}
                      className="bg-white flex-1 items-center  hover:opacity-75 rounded-l-md border-[1px] border-black"
                    >
                      <CiCircleMinus size={25} className="text-center w-full" />
                    </button>
                    <span className="bg-white flex-1 items-center  hover:opacity-75  tex-black font-medium p-2 border-y-[1px] border-black">
                      {count}
                    </span>
                    <button
                      onClick={() => calCount('+')}
                      className="bg-white flex-1 items-center  hover:opacity-75 rounded-r-md border-[1px] border-black"
                    >
                      <CiCirclePlus size={25} className="text-center w-full" />
                    </button>
                  </div>
                  <div className=" flex w-full justify-center bg-white p-3 rounded-md cursor-pointer hover:opacity-50 border-[1px] border-black">
                    {' '}
                    <AiOutlineShoppingCart size={25} className="mr-3" />
                    {' '}
                    장바구니
                    {' '}
                  </div>
                  <div
                    className=" flex w-full justify-center bg-white p-3 rounded-md cursor-pointer hover:opacity-50 border-[1px] border-black"
                    onClick={() => setClickHeart(!clickHeart)}
                  >
                    {clickHeart ? (
                      <AiFillHeart
                        size={25}
                        color={clickHeart ? 'red' : 'black'}
                        title="Remove from wishlist"
                        className="mr-3 cursor-pointer"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={25}
                        color={clickHeart ? 'red' : 'black'}
                        title="Add to wishlist"
                        className="mr-3 cursor-pointer"
                      />
                    )}
                    관심목록
                  </div>
                  <div className=" flex w-full justify-center bg-white p-3 rounded-md cursor-pointer hover:opacity-50 border-[1px] border-black">
                    {' '}
                    <AiOutlineMessage
                      size={25}
                      className="mr-3"
                    />
                    {' '}
                    문의하기
                    {' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductDetailInfo productData={productData} />
        </div>
      ) : null}
    </div>
  );
}

export default ProductDetail;
