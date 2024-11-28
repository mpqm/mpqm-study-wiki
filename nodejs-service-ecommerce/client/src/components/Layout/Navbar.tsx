import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { NavigationData } from '../../utils/interface';
import { RootState } from '../../redux/store';
import { navigationData } from '../../statics/navigationData';
import Cart from '../CartList/Cart';
import WishList from '../WishList/WishList';
import styles from '../../styles/styles';
import CategoryDropDown from './CategoryDropDown';
import { categoryData } from '../../statics/categoryData';

const Navbar =() =>{
  const { isAuthenticated, userData } = useSelector((state: RootState) => state.user,);
  const [activeCart, setActiveCart] = useState(false);
  const [activeWishList, setActiveWishList] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState(false);

  return (
    <>
      {/* 카테고리 드롭다운 */}
      <div className={`${styles.nb_item_category}`}>
        <button onClick={() => setActiveDropDown(!activeDropDown)} className={`${styles.nb_item_category_btn}`}>
          <CiMenuBurger />
          <span className={`${styles.n_show_hidden}`}>카테고리</span>
        </button>
        {activeDropDown
          ? (<CategoryDropDown categoryData={categoryData} setDropDown={setActiveDropDown} />)
          : null
        }
      </div>
      {/* 네비게이션 아이템 */}
      <div className={`${styles.n_overflow_x_scroll}`}>
        {navigationData && navigationData.map((i: NavigationData, index: any) => (
          <Link key={i.id} to={i.url} className={`${styles.nb_item}`}>
            <span>{i.title}</span>
          </Link>
        ))}
        <Link to="/seller/login" className={`${styles.nb_item}`}>
          <span className={`${styles.n_flex_center}`}> 판매자</span>
        </Link>
        <div onClick={() => setActiveCart(true)} className={`${styles.nb_item}`}>
          <span className={`${styles.n_flex_center}`}> 장바구니</span>
        </div>
        <div onClick={() => setActiveWishList(true)} className={`${styles.nb_item}`}>
          <span className={`${styles.n_flex_center}`}> 관심</span>
        </div>
        {isAuthenticated
          ? (
            <Link to="/user/profile" className={`${styles.nb_item}`}>
              <span className={`${styles.n_flex_center}`}>{userData?.name}</span>
            </Link>
          ) : (
            <Link to="/user/login" className={`${styles.nb_item}`}>
              <span className={`${styles.n_flex_center}`}> 로그인</span>
            </Link>
          )}
        {activeCart ? <Cart setActiveCart={setActiveCart} /> : null}
        {activeWishList ? (<WishList setActiveWishList={setActiveWishList} />) : null}
      </div>
    </>
  );
}

export default Navbar;
