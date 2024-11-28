import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { fetchSellerData } from './redux/auth/sellerSlice';
import { fetchUserData } from './redux/auth/userSlice';
import { AppDispatch } from './redux/store';
import { FAQPage, HomePage, ProductDetailPage, ProductPage, PromotionPage, Top100Page } from './routes/EcommerceRoute';
import SellerProtectedRoute from './routes/SellerProtectedRoute';
import { ActivationSellerPage, SellerLoginPage, SellerHomePage, SellerSignupPage, SellerDashboardPage } from './routes/SellerRoutes';
import UserProtectedRoute from './routes/UserProtectedRotue';
import { ActivationUserPage, CheckOutPage, OrderSuccessPage, PaymentPage, ProfilePage, UserLoginPage, UserSignupPage } from './routes/UserRoutes';
function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchSellerData());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/login" element={<UserLoginPage />} />
          <Route path="/user/signup" element={<UserSignupPage />} />
          <Route path="/user/activation/:activationToken" element={<ActivationUserPage />} />
          <Route path="/user/profile" element={(<UserProtectedRoute children={<ProfilePage />} />)} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/order/success/:id" element={<OrderSuccessPage />} />
          <Route path="/checkout" element={(<UserProtectedRoute children={<CheckOutPage />} />)} />

          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/top100" element={<Top100Page />} />
          <Route path="/promotion" element={<PromotionPage />} />
          <Route path="/faq" element={<FAQPage />} />

          <Route path="/seller/signup" element={< SellerSignupPage />} />
          <Route path="/seller/login" element={< SellerLoginPage />} />
          <Route path="/seller/activation/:activationToken" element={<ActivationSellerPage />} />
          <Route path='/seller/:id' element={(<SellerProtectedRoute children={<SellerHomePage />} />)} />
          <Route path='/seller/dashboard' element={(<SellerProtectedRoute children={<SellerDashboardPage />} />)} />
        </Routes>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      </BrowserRouter>
    </>
  );
}

export default App;
