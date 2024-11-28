import React, { useState } from 'react';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';
import { IoBagHandleOutline } from 'react-icons/io5';
import { CartData } from '../../utils/interface';
import styles from '../../styles/styles';

interface WishListItemProps {
  cartData: CartData;
}
function WishListItem({ cartData }: WishListItemProps) {
  const [value, setValue] = useState(1);
  const totalPrice = cartData.price * value;
  return (
<div className={`${styles.rt_item_container}`}>
      {/* 장바구니 이동 버튼 */}
      <div className={`${styles.rt_item_count_container}`}>
        <IoBagHandleOutline className={`${styles.n_hover}`} />
      </div>
      <img src="https://shopping-phinf.pstatic.net/main_3902233/39022339335.1.jpg?type=f300" className={`${styles.rt_item_img}`}/>
      <div className={`${styles.rt_item_content}`}>
        <p>{cartData.name}</p>
        <p>{cartData.price} 원</p>
      </div>
      <div className={`${styles.n_center_align} ${styles.n_hover}`}><RxCross1 /></div>
    </div>
  );
}

export default WishListItem;
