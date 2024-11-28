import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import { IoBagHandleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { cartData } from '../../statics/cartData';
import WishListItem from './WishListItem';
import styles from '../../styles/styles';

interface WishListProps {
  setActiveWishList: (activeWishList: boolean) => void;
}
function WishList({ setActiveWishList }: WishListProps) {
  return (
    <div className={`${styles.rt_bg}`}>
      <div className={`${styles.rt_container}`}>
        {/* 관심목록 탭 헤더 */}
        <div className={`${styles.rt_header}`}>
          <div className={`${styles.n_lr_align}`}>
            <AiOutlineHeart />
            <h1>{cartData.length}</h1>
          </div>
          <RxCross1 onClick={() => setActiveWishList(false)} className="cursor-pointer"
          />
        </div>
        {/* 관심목록 아이템 */}
        {cartData && cartData.map((i, index) => <WishListItem key={index} cartData={i} />)}
      </div>
    </div>
  );
}

export default WishList;
