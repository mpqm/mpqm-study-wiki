import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Signup from '../components/Auth/UserSignup';
import { RootState } from '../redux/store';

const UserSignupPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  useEffect(() => { if (isAuthenticated) { navigate('/'); } }, [isAuthenticated]);

  return (<div><Signup /> </div>);
}

export default UserSignupPage;
