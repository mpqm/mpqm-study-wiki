import React from 'react';
import { RxPerson } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from 'react-icons/hi';
import { MdOutlineTrackChanges } from 'react-icons/md';
import { AiOutlineCreditCard, AiOutlineLogout, AiOutlineMessage } from 'react-icons/ai';
import { TbAddressBook } from 'react-icons/tb';
import axios from 'axios';
import { toast } from 'react-toastify';
import { server } from '../../utils/server';
import styles from '../../styles/styles';

interface ProfileSidebarProps { active: number; setActive: (active: number) => void; }

function ProfleSidebar({ active, setActive }: ProfileSidebarProps) {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.get(`${server}/user/logout`, { withCredentials: true, });
      toast.success(response.data.message);
      navigate('/user/login');
      window.location.reload();
    } catch (error: any) { toast.error(error.response.data.message); }
  };

  return (
    <div className={`${styles.pf_sidebar_container}`}>
      <div className={`${styles.pf_sidebar_menu} ${active === 1 ? `${styles.n_opacity}` : ''}`} onClick={() => setActive(1)}>
        <RxPerson />
        <span className={`${styles.n_show_hidden}`}>회원정보</span>
      </div>
      <div className={`${styles.pf_sidebar_menu} ${active === 2 ? `${styles.n_opacity}` : ''}`} onClick={() => setActive(2)}>
        <HiOutlineShoppingBag />
        <span className={`${styles.n_show_hidden}`}>주문</span>
      </div>
      <div className={`${styles.pf_sidebar_menu} ${active === 3 ? `${styles.n_opacity}` : ''}`} onClick={() => setActive(3)}>
        <HiOutlineReceiptRefund />
        <span className={`${styles.n_show_hidden}`}>환불</span>
      </div>
      <div className={`${styles.pf_sidebar_menu} ${active === 4 ? `${styles.n_opacity}` : ''}`} onClick={() => { setActive(4); navigate('/inobx'); }}>
        <AiOutlineMessage />
        <span className={`${styles.n_show_hidden}`}>문의</span>
      </div>
      <div className={`${styles.pf_sidebar_menu} ${active === 5 ? `${styles.n_opacity}` : ''}`} onClick={() => setActive(5)}>
        <MdOutlineTrackChanges />
        <span className={`${styles.n_show_hidden}`}>주문조회</span>
      </div>
      <div className={`${styles.pf_sidebar_menu} ${active === 6 ? `${styles.n_opacity}` : ''}`} onClick={() => setActive(6)}>
        <AiOutlineCreditCard />
        <span className={`${styles.n_show_hidden}`}>결제수단</span>
      </div>
      <div className={`${styles.pf_sidebar_menu} ${active === 7 ? `${styles.n_opacity}` : ''}`} onClick={() => setActive(7)}>
        <TbAddressBook />
        <span className={`${styles.n_show_hidden}`}>배송지정보</span>
      </div>
      <div className={`${styles.pf_sidebar_menu} ${active === 8 ? `${styles.n_opacity}` : ''}`} onClick={() => { setActive(8); handleLogout(); }}>
        <AiOutlineLogout />
        <span className={`${styles.n_show_hidden}`}>로그아웃</span>
      </div>
    </div>
  );
}

export default ProfleSidebar;
