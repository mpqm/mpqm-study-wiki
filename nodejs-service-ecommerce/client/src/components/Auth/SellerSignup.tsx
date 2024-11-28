import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { configFormData, configJson, server } from "../../utils/server";
import styles from "../../styles/styles";
import { RxAvatar } from "react-icons/rx";

const SellerSignup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [shopName, setShopName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [avatar, setAvatar] = useState<File | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const newForm = new FormData();
            newForm.append("name", name);
            newForm.append("email", email);
            newForm.append("password", password);
            newForm.append("shopName", shopName);
            newForm.append("phoneNumber", phoneNumber);
            newForm.append("address", address);
            newForm.append("zipCode", zipCode);
            const response = await axios.post(`${server}/seller/signup`, newForm, configJson);
            toast.success(response.data.result);
        } catch (error: any) { toast.error(error.response.data.message); }
    };

    return (
        <div className={`${styles.au_container}`}>
            {/* 제목 */}
            <div className={`${styles.au_title}`}>
                <h1> E-COMMERCE </h1>
                <h1> 판매자 회원가입 </h1>
            </div>
            {/* 로그인 폼 */}
            <form onSubmit={handleSubmit} className={`${styles.au_form}`}>
                {/* 판매자 이름 입력*/}
                <div>
                    <label htmlFor="-name" className={`${styles.n_input_label}`}>판매자 이름</label>
                    <input
                        onChange={(e) => setName(e.target.value)} value={name}
                        type="name" name="name" required
                        className={`${styles.n_input}`}
                    />
                </div>
                {/* 판매자 이메일 입력 */}
                <div>
                    <label htmlFor="email" className={`${styles.n_input_label}`}>판매자 이메일</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)} value={email}
                        type="email" name="email" autoComplete="email" required
                        className={`${styles.n_input}`}
                    />
                </div>
                {/* 비밀번호 입력 */}
                <div>
                    <label htmlFor="password" className={`${styles.n_input_label}`}>판매자 비밀번호</label>
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
                {/* 쇼핑몰 이름 입력 */}
                <div>
                    <label htmlFor="shop-name" className={`${styles.n_input_label}`}>판매자 쇼핑몰 이름</label>
                    <input
                        onChange={(e) => setShopName(e.target.value)} value={shopName}
                        type="name" name="shop-name" required
                        className={`${styles.n_input}`}
                    />
                </div>
                {/* 판매자 연락처 입력 */}
                <div>
                    <label htmlFor="phone-number" className={`${styles.n_input_label}`}>판매자 연락처</label>
                    <input
                        onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}
                        type="number" name="phone-number" required
                        className={`${styles.n_input}`}
                    />
                </div>
                {/* 판매자 주소 */}
                <div>
                    <label htmlFor="address" className={`${styles.n_input_label}`}>판매자 주소</label>
                    <input
                        onChange={(e) => setAddress(e.target.value)} value={address}
                        type="address" name="address" required
                        className={`${styles.n_input}`}
                    />
                </div>
                {/* 판매자 우편번호 */}
                <div>
                    <label htmlFor="zipcode" className={`${styles.n_input_label}`}>판매자 우편번호</label>
                    <input
                        onChange={(e) => setZipCode(e.target.value)} value={zipCode}
                        type="number" name="zipcode" required
                        className={`${styles.n_input}`}
                    />
                </div>
                {/* 프로필업로드
                <div className={`${styles.n_flex_center}`}>
                    {avatar
                        ? (<img src={URL.createObjectURL(avatar)} alt="avatar" className={`${styles.au_img}`} />)
                        : (<RxAvatar className={`${styles.au_img}`} />)
                    }
                    <label htmlFor="file-input" className={`${styles.n_btn}`}>
                        <span>판매자 대표 이미지 업로드</span>
                        <input
                            onChange={handleFileChange}
                            type="file" name='avatar' id='file-input' accept='.jpg, .jpeg, .png'
                            className="sr-only"
                        />
                    </label>
                </div> */}
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
                    <button type="submit" className={`${styles.n_btn}`}>판매자 회원가입</button>
                    <Link to="/seller/login" className={`${styles.n_btn}`}>판매자 로그인</Link>
                </div>


            </form>
        </div>
    );
}

export default SellerSignup;
