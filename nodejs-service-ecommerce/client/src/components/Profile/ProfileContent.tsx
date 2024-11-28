import React, { FormEvent, useState } from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { server } from '../../utils/server';
import { RootState } from '../../redux/store';
import AllOrders from './AllOrder';
import AllRefundOrders from './AllRefundOrder';
import TrackOrder from './TrackOrder';
import PaymentMethod from './PaymentMethod';
import Address from './Address';
import styles from '../../styles/styles';

interface ProfileContenProps { active: number; }

function ProfileContent({ active }: ProfileContenProps) {
  const { isAuthenticated, userData } = useSelector((state: RootState) => state.user,);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); };

  return (
    <div className={`${styles.pf_content_section}`}>
      {/* 프로필  페이지 */}
      {active === 1 && (
        <>
          <form onSubmit={handleSubmit} aria-required>
            <div className={`${styles.pf_privacy_container}`}>
              <div className={`${styles.pf_privacy_input_container}`}>
                <label className={`${styles.n_input_label}`}> 이름 </label>
                <input 
                  value={userData?.name} onChange={(e) => setName(e.target.value)}
                  type="text" required
                  className={`${styles.n_input}`}
                />
              </div>
              <div className={`${styles.pf_privacy_input_container}`}>
                <label className={`${styles.n_input_label}`}> 이메일 </label>
                <input
                  value={userData?.email} onChange={(e) => setEmail(e.target.value)}
                  type="text" required
                  className={`${styles.n_input}`}
                />
              </div>
            </div>
            <div className={`${styles.pf_privacy_container}`}>
              <div className={`${styles.pf_privacy_input_container}`}>
                <label className={`${styles.n_input_label}`}> 전화번호 </label>
                <input
                  value={userData?.phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                  type="text" required
                  className={`${styles.n_input}`}
                />
              </div>
              <div className={`${styles.pf_privacy_input_container}`}>
                <label className={`${styles.n_input_label}`}> 우편번호 </label>
                <input
                  value={zipCode} onChange={(e) => setZipCode(e.target.value)}
                  type="text" required
                  className={`${styles.n_input}`}
                />
              </div>
            </div>
            <div className={`${styles.pf_privacy_container}`}>
              <div className={`${styles.pf_privacy_input_container}`}>
                <label className={`${styles.n_input_label}`}> 주소1 </label>
                <input
                  value={address1} onChange={(e) => setAddress1(e.target.value)}
                  type="text" required
                  className={`${styles.n_input}`}
                />
              </div>
              <div className={`${styles.pf_privacy_input_container}`}>
                <label className={`${styles.n_input_label}`}> 주소2 </label>
                <input
                  value={address2} onChange={(e) => setAddress2(e.target.value)}
                  type="text" required
                  className={`${styles.n_input}`}
                />
              </div>
            </div>
            <button type="submit" className={`${styles.n_btn}`}> 수정</button>
          </form>
          <form />
        </>
      )}
      {/* 주문 페이지 */}
      {active === 2 && (<div> <AllOrders /> </div>)}
      {/* 환불 */}
      {active === 3 && (<div><AllRefundOrders /></div>)}
      {/* 배송추적 */}
      {active === 5 && (<div><TrackOrder /></div>)}
      {/* 결제수단 */}
      {active === 6 && (<div><PaymentMethod /></div>)}
      {/* 배송지정보 */}
      {active === 7 && (<div><Address /></div>)}
    </div>
  );
}

export default ProfileContent;
