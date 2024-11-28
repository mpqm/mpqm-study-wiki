import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { server } from '../utils/server';

const ActivationSellerPage = () => {
  const { activationToken } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activationToken) {
      const sendRequest = async () => {
        try {
          const response = await axios.post(`${server}/seller/activation`, { activationToken, });
          toast.success('판매자 계정이 성공적으로 활성화 되었습니다.');
        } catch (error: any) { toast.error(error.response.data.message); }
      };
      sendRequest();
    }
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      {error
        ? (<p>토큰이 만료되었습니다.</p>)
        : (<p>계정이 성공적으로 활성화 되었습니다.</p>)
      }
      <p><Link to="/seller/login">판매자 로그인하러가기</Link></p>
    </div>
  );
}

export default ActivationSellerPage;
