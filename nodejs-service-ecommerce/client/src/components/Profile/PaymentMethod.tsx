import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import styles from '../../styles/styles';

function PaymentMethod() {
  return (
    <div>
      <div className={`${styles.n_btn}`}>추가</div>
      <div className={`${styles.pf_delivery_info_item}`}>
        <div className={`${styles.n_flex_center}`}>
          <img
            src="https://s3-ap-northeast-2.amazonaws.com/s3.card-gorilla.com/old_data/1557382073card_globalBrand_5.jpg"
            alt=""
            className={`${styles.pf_payment_method_item_img}`}
          />
          <h1>visa</h1>
          <h1>1234 **** **** ****</h1>
          <h1>08/2028</h1>
        </div>
        <AiOutlineDelete size={25} className={`${styles.n_hover}`} />
      </div>
    </div>
  );
}

export default PaymentMethod;
