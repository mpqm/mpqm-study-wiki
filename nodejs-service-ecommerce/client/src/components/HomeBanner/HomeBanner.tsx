import { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { heroData } from '../../statics/heroData';
import styles from '../../styles/styles';

const HomeBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prev = () => setCurrentIndex((curr) => (curr === 0 ? heroData.length - 1 : curr - 1));
  const next = () => setCurrentIndex((curr) => (curr === heroData.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const slideInterval = setInterval(next, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className={`${styles.sd_section}`}>
      {/* 홈배너 이미지 */}
      <div style={{ backgroundImage: `url(${heroData[currentIndex].url})` }} className={`${styles.sd_img}`} />
      {/* 왼쪽 넘기기 */}
      <div className={`${styles.sd_lbtn}`}> <BsChevronCompactLeft size={25} onClick={prev} /></div>
      {/* 오른쪽 넘기기 */}
      <div className={`${styles.sd_rbtn}`}><BsChevronCompactRight size={25} onClick={next} /></div>
      {/* 슬라이드 인덱스 표시기 */}
      <div className={`${styles.sd_idx_view}`}>
        {heroData.map((i, slideIndex) => (<div key={i.id} className={`${currentIndex === slideIndex ? 'p-1' : 'bg-opacity-25'} ${styles.sd_idx_dot}`} />))}
      </div>
    </div>
  );
}

export default HomeBanner;
