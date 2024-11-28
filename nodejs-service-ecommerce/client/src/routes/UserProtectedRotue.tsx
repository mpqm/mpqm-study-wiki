import { Navigate, Route, RouteProps } from 'react-router-dom';
import { ReactNode } from 'react';
import { UserState } from '../redux/auth/userSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { toast } from 'react-toastify';

interface UserProtectedRouteProps { children: ReactNode; }

const UserProtectedRotue: React.FC<UserProtectedRouteProps> = ({ children, }: UserProtectedRouteProps) => {
  const { loading, isAuthenticated, userData } = useSelector((state: RootState) => state.user,);
  if (loading) { return null; }
  if (!isAuthenticated) { 
    return <Navigate to="/user/login" replace />;
  }
  return <>{children}</>;
};

export default UserProtectedRotue;
