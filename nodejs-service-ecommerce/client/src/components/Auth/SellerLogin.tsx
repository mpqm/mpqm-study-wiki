import React, { FormEvent, useEffect, useState } from 'react'
import styles from '../../styles/styles'
import axios from 'axios';
import { toast } from 'react-toastify';
import { server } from '../../utils/server';
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const SellerLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await axios.post(`${server}/seller/login`, { email, password }, { withCredentials: true });
        toast.success("login successful");
        window.location.reload();
      } catch (error: any) { toast.error(error.response.data.message); }
    };
  return (
    <div className={`${styles.au_container}`}>
      {/* 제목 */}
      <div className={`${styles.au_title}`}>
        <h1> E-COMMERCE </h1>
        <h1> 판매자 로그인 </h1>
      </div>
      {/* 로그인 폼 */}
      <form onSubmit={handleSubmit} className={`${styles.au_form}`}>
        {/* 이메일 입력 */}
        <div>
          <label htmlFor="email" className={`${styles.n_input_label}`}>이메일</label>
          <input
            onChange={(e) => setEmail(e.target.value)} value={email}
            type="email" name="email" autoComplete="email" required
            className={`${styles.n_input}`}
          />
        </div>
        {/* 비밀번호 입력 */}
        <div>
          <label htmlFor="password" className={`${styles.n_input_label}`}>비밀번호</label>
          <div className="relative">
            <input
              onChange={(e) => setPassword(e.target.value)} value={password}
              type={visible ? "text" : "password"} name="password" autoComplete="current-password" required
              className={`${styles.n_input}`}
            />
            <div className={`${styles.au_visible} ${styles.n_hover}`}>
              {visible
                ? (<AiOutlineEye onClick={() => setVisible(false)} size={25} />)
                : (<AiOutlineEyeInvisible onClick={() => setVisible(true)} size={25} />)
              }
            </div>
          </div>
        </div>
        {/* 자동로그인, ID/PW 찾기 */}
        <div className={`${styles.n_lr_align}`}>
          <div className={`${styles.n_lr_align} ${styles.n_hover} `}>
            <input type="checkbox" name="remember-me" id="remember-me" />
            <label htmlFor="remember-me">자동로그인</label>
          </div>
          <div className={`${styles.n_lr_align} ${styles.n_hover}`}>
            <a href="/forgot-password">아이디 ∙ 비밀번호 찾기</a>
          </div>
        </div>
        {/* 로그인, 회원가입 버튼 */}
        <div className="space-y-3">
          <button type="submit" className={`${styles.n_btn}`}>판매자 로그인</button>
          <Link to="/seller/signup" className={`${styles.n_btn}`}>판매자 회원가입</Link>
        </div>
      </form>
    </div>
  )
}

export default SellerLogin