import { ChangeEvent, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ProductData } from '../../utils/interface';
import { productDatas } from '../../statics/productData';
import styles from '../../styles/styles';
import Navbar from './Navbar';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState<ProductData[] | null>();
  const [activeSearchFlag, setActiveSearchFlag] = useState(false);
  const [activeScrollFlag, setActiveScrollFlag] = useState(false);

  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setActiveSearchFlag(true);
    setSearchTerm(term);
    const filteredProducts: ProductData[] = productDatas && productDatas.filter((productData) => productData.name.toLowerCase().includes(term.toLowerCase()));
    setSearchData(filteredProducts);
  };

  window.addEventListener('scroll', () => {
    if (window.scrollY > 70) { setActiveScrollFlag(true);} 
    else { setActiveScrollFlag(false);}
  });

  return (
    <>
      {/* 헤더 */}
      <div className={`${styles.hd_section}`}>
        {/* 제목, 홈페이지 링크 */}
        <div>
          <Link to="/" className={`${styles.n_big_logo}`}> E-COMMERCE </Link>
        </div>
        {/* 상품 검색 */}
        <div className={`${styles.hd_search_container}`}>
          <input value={searchTerm} onChange={handleSearchTermChange} type="text" placeholder="검색" className={`${styles.hd_search_input}`} />
          <AiOutlineSearch size={20} className={`${styles.n_input_icon}`} />
          {activeSearchFlag && searchData && searchData.length !== 0 ? (
            <div onMouseLeave={() => { setActiveSearchFlag(false); }} className={`${styles.hd_search_list}`}>
              {searchData && searchData.map((i: ProductData, idx: any) => (
                <Link key={i.id} to={`/product/${i.id}`}>
                  <div className={`${styles.hd_search_item_container}`}>
                    <img src={`${i.image_Url[0]?.url}`} className={`${styles.hd_search_item_img}`} />
                    <p className={`${styles.hd_search_item_title}`}>{i.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      {/* 네비게이션바 */}
      <div className={`${activeScrollFlag === true ? styles.nb_section_scroll : null} ${styles.nb_section}`}>
        <Navbar />
      </div>
    </>
  );
}

export default Header;
