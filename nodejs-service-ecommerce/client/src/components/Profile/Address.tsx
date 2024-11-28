import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import styles from '../../styles/styles';

function Address() {
  return (
    <div>
      <div className={`${styles.n_btn}`}>추가</div>
      <div className={`${styles.pf_delivery_info_item}`}>
        <div className={`${styles.n_flex_col}`}>
          <h1>기본</h1>
          <h1>주소: 494 abqfqfda, newewe</h1>
          <h1>상세주소: 494 abqfqfda, newewe</h1>
          <h1>전화번호: (82) 010-1234-1234</h1>
        </div>
        <AiOutlineDelete size={25} className={`${styles.n_hover}`} />
      </div>

    </div>
  );
}

export default Address;
