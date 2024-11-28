import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from '../../styles/styles';
import { Link } from 'react-router-dom';
import { AiOutlineGift } from 'react-icons/ai';
import { AiFillShopping } from 'react-icons/ai';
import { MdOutlineLocalOffer, MdOutlineShoppingBag, MdShoppingBag, MdStoreMallDirectory } from 'react-icons/md';
import { TbMessage, TbPackage } from 'react-icons/tb';
import { BsPersonRolodex } from 'react-icons/bs';
import { CiShop } from 'react-icons/ci';

const DashboardHeader = () => {
  const { isAuthenticated, sellerData } = useSelector((state: RootState) => state.seller);
  return (
    <div className={`${styles.dbhd_section}`}>
      <div>
        <Link to="/seller/dashboard" className={`${styles.n_big_logo}`}>E-COMMERCE Seller</Link>
      </div>
      <div>
        <div className={`${styles.n_flex_center}`}>
          <Link to='/seller/dashboard/cupouns'className={`${styles.n_flex_center}`}>
            <AiOutlineGift className={`${styles.dbhd_icon}`} />
          </Link>
          <Link to='/seller/dashboard/events'className={`${styles.n_flex_center}`}>
            <MdOutlineLocalOffer className={`${styles.dbhd_icon}`} />
          </Link>
          <Link to='/seller/dashboard/products'className={`${styles.n_flex_center}`}>
            <MdOutlineShoppingBag className={`${styles.dbhd_icon}`}/>
          </Link>
          <Link to='/seller/dashboard/orders'className={`${styles.n_flex_center}`}>
            <TbPackage className={`${styles.dbhd_icon}`} />
          </Link>
          <Link to='/seller/dashboard/message'className={`${styles.n_flex_center}`}>
            <TbMessage className={`${styles.dbhd_icon}`}/>
          </Link>
          <Link to={`/seller/shop/${sellerData?._id}`} className={`${styles.n_flex_center}`}>
            <MdStoreMallDirectory className={`${styles.dbhd_icon}`}/>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default DashboardHeader