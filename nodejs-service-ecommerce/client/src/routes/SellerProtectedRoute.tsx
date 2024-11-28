import { Navigate, Route, RouteProps } from 'react-router-dom';
import { ReactNode } from 'react';
import { SellerState } from '../redux/auth/sellerSlice';
import { SellerData } from '../utils/interface';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { toast } from 'react-toastify';

interface SellerProtectedRouteProps { children: ReactNode; }

const SellerProtectedRoute: React.FC<SellerProtectedRouteProps> = ({ children, }: SellerProtectedRouteProps) => {
  const { loading, isAuthenticated, sellerData } = useSelector((state: RootState) => state.seller,);
  if (loading) { return null }
  if (!sellerData) { 
    return <Navigate to={`/seller/login`} replace />;
}
  return <>{children}</>;
};

export default SellerProtectedRoute;