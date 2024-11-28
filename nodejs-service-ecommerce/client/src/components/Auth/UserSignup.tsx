import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { configFormData, configJson, server } from "../../utils/server";
import styles from "../../styles/styles";
import { RxAvatar } from "react-icons/rx";

const UserSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newForm = new FormData();
      newForm.append("name", name);
      newForm.append("email", email);
      newForm.append("password", password);
      const response = await axios.post(`${server}/user/signup`, newForm, configJson);
      toast.success(response.data.result);
    } catch (error: any) { toast.error(error.response.data.message); }
  };

  return (
    <div className={`${styles.au_container}`}>
      {/* 제목 */}
      <div className={`${styles.au_title}`}>
        <h1> E-COMMERCE </h1>
        <h1> 회원가입 </h1>
      </div>
      {/* 회원가입 폼 */}
      <form onSubmit={handleSubmit} className={`${styles.au_form}`}>
        {/* 이름 입력 */}
        <div>
          <label htmlFor="username" className={`${styles.n_input_label}`}>이름</label>
          <input
            onChange={(e) => setName(e.target.value)} value={name}
            type="text" name="text" autoComplete="name" required
            className={`${styles.n_input}`}
          />
        </div>
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
          <label htmlFor="password" className={`${styles.n_input_label}`}> 비밀번호 </label>
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
        {/* 로그인, 회원가입 버튼 */}
        <div className="space-y-3">
          <button type="submit" className={`${styles.n_btn}`}>회원가입</button>
          <Link to="/user/login" className={`${styles.n_btn}`}>로그인 </Link>
        </div>
      </form>
    </div>
  );
}

export default UserSignup;
