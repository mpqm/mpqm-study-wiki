import { useState } from 'react';
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { CiSearch, CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { ProductData } from '../../utils/interface';

interface ProductDetailCardProps {
  productData: ProductData | null;
  setOpen: (i: boolean, productData: ProductData | null) => void;
}

function ProductDetailCard({
  setOpen,
  productData,
}: ProductDetailCardProps) {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(false);

  const handleMessageSubmit = () => {};

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
    <div className="bg-[#ffffff]">
      gggggggggggggg
      {productData ? (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
          <div className="w-[95%] h-[75vh] xl:w-[70%] xl:h-[75vh] overflow-y-scroll bg-[#ffffff] rounded-md  relative p-3">
            <RxCross1
              size={25}
              onClick={() => setOpen(false, null)}
              className="absolute right-3 top-3 z-50"
            />
            <div className="w-full xl:flex block">
              <div className="w-full xl:w-[50%]">
                <img src={productData.image_Url[0].url} alt="" />
              </div>

              <div className="w-full xl:w-[50%] p-5">
                <h1 className="font-extrabold text-[20px] mb-1">
                  {productData.name}
                </h1>
                <p>{productData.description}</p>
                <br />
                <div className="flex flex-col">
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
                <div className="flex font-bold text-[20px] mb-5 space-x-2">
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
                  <h1 className="text-[20px] ">
                    {productData.total_sell}
                    {' '}
                    판매
                  </h1>
                </div>

                <div className="flex tems-center justify-between flex-col space-y-1 w-full text-center">
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
                    onClick={() => setClick(!click)}
                  >
                    {click ? (
                      <AiFillHeart
                        size={25}
                        color={click ? 'red' : 'black'}
                        title="Remove from wishlist"
                        className="mr-3 cursor-pointer"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={25}
                        color={click ? 'red' : 'black'}
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
                  <Link
                    to={`/product/${productData.id}`}
                    className=" flex w-full justify-center bg-white p-3 rounded-md cursor-pointer hover:opacity-50 border-[1px] border-black"
                  >
                    {' '}
                    <CiSearch size={25} className="mr-3" />
                    {' '}
                    상품보기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProductDetailCard;
