import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { footerLinktData } from '../../statics/footerLinkData';
import styles from '../../styles/styles';

const Footer = () => {
  return (
    <div className={`${styles.ft_section}`}>
      {/* 구독, 관련 SNS */}
      <div className={`${styles.ft_container}`}>
        <input type="text" required placeholder="구독해서 저희의 이벤트와 소식을 제공받아요." className={`${styles.ft_c_input}`} />
        <button className={`${styles.ft_c_btn}`}> 구독 </button>
        <AiFillFacebook size={30} className={`${styles.n_hover}`} />
        <AiOutlineTwitter size={30} className={`${styles.n_hover}`} />
        <AiFillInstagram size={30} className={`${styles.n_hover}`} />
        <AiFillYoutube size={30} className={`${styles.n_hover}`} />
      </div>

      {/* 관련 링크 */}
      <div className={`${styles.ft_container}`}>
        {footerLinktData && footerLinktData.map((i, index) => (
          <Link key={index} to={i.link} className={`${styles.n_hover}`}>{i.name}</Link>
        ))}
      </div>
      {/* 서비스 제공자 정보 */}
      <div className={`${styles.ft_container}`}>
        <span>사업자등록번호: xxx-xx-xxxxx</span>
        <span>통신판매업신고번호: 제xxxx-xxxx-xxxx호</span>
        <span>대표이사: xxx</span>
        <span>사업자등록정보확인</span>
      </div>
      <div className={`${styles.ft_container}`}>
        <span>주소: xx도 xx시 xx구 xx로 xx</span>
        <span>이메일: help@xxx.xxx</span>
        <span>대표전화: xxxx-xxxx</span>
        <span>호스팅 서비스 제공: xxx</span>
      </div>
      <div className={`${styles.ft_container}`}>
        <h1>E-COMMERCE</h1>
        <span>© 2023 MpqM. All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
