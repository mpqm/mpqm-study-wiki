import React, { useEffect } from 'react'
import SellerLogin from '../components/Auth/SellerLogin'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const SellerLoginPage = () => {
    const navigate = useNavigate();
    const { loading, isAuthenticated, sellerData } = useSelector((state: RootState) => state.seller);
    useEffect(() => { 
      // if (sellerData) { navigate(`/seller/shop/${sellerData?._id}`);}
      if (sellerData) { navigate(`/seller/dashboard`);} 
    }, [loading, isAuthenticated]);
  return (
    <div><SellerLogin/></div>
  )
}

export default SellerLoginPage