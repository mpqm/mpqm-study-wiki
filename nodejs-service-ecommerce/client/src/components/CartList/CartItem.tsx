import React, { useState } from 'react';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';
import { CartData } from '../../utils/interface';
import styles from '../../styles/styles';

interface CartItemProps { cartData: CartData; }

const CartItem = ({ cartData }: CartItemProps) => {
  const [value, setValue] = useState(1);
  const totalPrice = cartData.price * value;

  return (
    <div className={`${styles.rt_item_container}`}>
      {/* 수량 선택 */}
      <div className={`${styles.rt_item_count_container}`}>
        <CiCirclePlus onClick={() => setValue(value + 1)} className={`${styles.rt_item_count_btn}`} />
        <span>{value}</span>
        <CiCircleMinus onClick={() => setValue(value === 1 ? 1 : value - 1)} className={`${styles.rt_item_count_btn}`} />
      </div>
      {/* 상품 이미지 */}
      <img src="https://shopping-phinf.pstatic.net/main_3902233/39022339335.1.jpg?type=f300" className={`${styles.rt_item_img}`} />
      {/* 상품 이름, 가격, 가격 * 수량 */}
      <div className={`${styles.rt_item_content}`}>
        <p>{cartData.name}</p>
        <p> {totalPrice} 원 ( {cartData.price}원 *{value} )</p>
      </div>
      {/* 상품 삭제 */}
      <div className={`${styles.n_center_align} ${styles.n_hover}`}><RxCross1 /></div>
    </div>
  );
}

export default CartItem;
