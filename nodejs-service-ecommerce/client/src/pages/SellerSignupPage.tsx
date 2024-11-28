import SellerSignup from '../components/Auth/SellerSignup'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SellerSignupPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, sellerData } = useSelector((state: RootState) => state.seller);
  useEffect(() => { if (isAuthenticated) { navigate(`/seller/${sellerData?._id}`); } }, []);
  return (
    <div>
        <SellerSignup/>
    </div>
  )
}

export default SellerSignupPage