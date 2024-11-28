import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import UserLogin from '../components/Auth/UserLogin';
import { RootState } from '../redux/store';

const UserLoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  useEffect(() => { if (isAuthenticated) { navigate('/'); } }, [isAuthenticated]);

  return (<div><UserLogin /></div>);
}

export default UserLoginPage;
