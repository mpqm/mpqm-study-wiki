import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { promotionData } from '../../statics/promotionData';
import PromotionProductCard from './HotDealCard';

const HotDeal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((curr) => (curr === 0 ? promotionData.length - 1 : curr - 1));
  const next = () => setCurrentIndex((curr) => (curr === promotionData.length - 1 ? 0 : curr + 1));

  return (
    <div>
      <h1 className="w-11/12 mx-auto border-[1px] border-black font-medium rounded-md text-[20px] mb-3 text-center">
        이벤트
      </h1>

      <div className="w-11/12 mx-auto mb-3 relative group rounded-md border-[1px] border-black">
        <div className="w-full h-full bg-center bg-cover duration-500 rounded-md">
          <PromotionProductCard promotionData={promotionData[currentIndex]} />
        </div>

        <div className="hidden group-hover:block absolute top-[20%] xl:top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-3 border-[1px] border-black bg-white  cursor-pointer">
          <BsChevronCompactLeft size={25} onClick={prev} />
        </div>

        <div className="hidden group-hover:block absolute top-[20%] xl:top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-3 border-[1px] border-black bg-white  cursor-pointer ">
          <BsChevronCompactRight size={25} onClick={next} />
        </div>

        <div className="absolute bottom-2 right-0 left-0 flex items-center justify-center gap-2">
          {promotionData.map((i, slideIndex) => (
            <div
              key={i.id}
              className={`transition-all w-3 h-3 bg-black rounded-full ${currentIndex === slideIndex ? 'p-1' : 'bg-opacity-25'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotDeal;
