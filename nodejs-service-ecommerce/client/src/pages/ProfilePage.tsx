import React, { useState } from 'react';
import Header from '../components/Layout/Header';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import ProfileContent from '../components/Profile/ProfileContent';
import styles from '../styles/styles';

function ProfilePage() {
  const [active, setActive] = useState(1);
  return (
    <div>
      <Header />
      <div className={`${styles.pf_section} `}>
        <div className={`${styles.pf_sidebar_section}`}><ProfileSidebar active={active} setActive={setActive} /></div>
        <ProfileContent active={active} />
      </div>
    </div>
  );
}

export default ProfilePage;
