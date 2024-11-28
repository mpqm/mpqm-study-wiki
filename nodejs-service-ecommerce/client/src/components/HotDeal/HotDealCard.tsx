import { PromotionData } from '../../utils/interface';
import CountDown from './CountDown';

interface PromotionProductCardProps {
  promotionData: PromotionData;
}

const HotDealCard = ({ promotionData }: PromotionProductCardProps) => {
  return (
    <div className="w-full block bg-white rounded-md xl:flex p-2 my-10">
      <div className="w-full xl:w-[50%] m-auto ">
        <img src={promotionData.image_Url[0].url} alt="" />
      </div>

      <div className="w-full xl:[w-50%] flex flex-col justify-center mr-[70px]">
        <h1 className="text-[25px] font-[600] font-Roboto text-[#333]">
          {promotionData.name}
          {' '}
        </h1>
        <p className="mb-3">{promotionData.description}</p>
        <div className="flex justify-between font-bold text-[20px] mb-3">
          <div className="flex">
            <h1 className="mr-2">
              {promotionData.price === 0
                ? promotionData.price
                : promotionData.discount_price}
              {' '}
              원
            </h1>
            <h1 className="text-[#ff0000] line-through">
              {promotionData.price ? `${promotionData.price}원` : null}
            </h1>
          </div>
          <h1 className="text-[20px]">
            {promotionData.total_sell}
            {' '}
            판매
          </h1>
        </div>

        <div className="flex justify-center">
          <CountDown promotionData={promotionData} />
        </div>
      </div>
    </div>
  );
}

export default HotDealCard;
