import React from 'react';
import Header from '../components/Layout/Header';
import PromotionProductCard from '../components/HotDeal/HotDealCard';
import { promotionData } from '../statics/promotionData';

function PromotionPage() {
  return (
    <div>
      <Header />
      {promotionData && promotionData.map((i, index) => (<PromotionProductCard promotionData={i} />))}
    </div>
  );
}

export default PromotionPage;
