import React, { useState } from 'react'
import DashboardHeader from '../components/Seller/DashboardHeader'
import styles from '../styles/styles';

const SellerDashboardPage = () => {
  const [active, setActive] = useState(1);
  return (
    <div><DashboardHeader />
      <div className={`${styles.db_section} `}>
        <div className={`${styles.dbsb_section}`}></div>
      </div>
    </div>
  )
}

export default SellerDashboardPage