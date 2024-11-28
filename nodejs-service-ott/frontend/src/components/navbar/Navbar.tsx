import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
import { UserModel } from "../../network/Model";
import * as UserApi from "../../network/OttApi";
import "./navbar.scss";

interface NavbarProps {
    type?: string; // 현재 활성화된 탭의 유형(영화 | 시리즈)
    setGenre: (genre: string) => void; // 선택한 장르 값을 설정하는 콜백함수
    loggedInUser?: UserModel | null; // UserModel형식의 로그인 사용자정보
    onLogoutSuccessful: () => void; // 로그아웃이 이루어지면 호출되는 콜백 함수
}

const Navbar = ({ type, loggedInUser, setGenre, onLogoutSuccessful }: NavbarProps) => {
    // 로그아웃 버튼을 클릭했을 때 실행되는 함수
    async function logout() {
        try {
            await UserApi.logout(); 
            onLogoutSuccessful(); 
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    return (
        < div className="navbar" >
            <div className="container">
                <div className="left">
                    <h1>OTT</h1>
                    {/* 홈페이지 링크 */}
                    <Link
                        to="/"
                        className="link">
                        <span style={{ border: type === "home" ? "2px solid white" : "none" }}>홈페이지</span>
                    </Link>
                    {/* 검색 링크 */}
                    <Link
                        to="/search"
                        className="link"
                    >
                        <span style={{ border: type === "search" ? "2px solid white" : "none" }}> 검색 </span>
                    </Link>
                    {/* 시리즈 링크 */}
                    <Link
                        to="/series"
                        className="link">
                        <span style={{ border: type === "series" ? "2px solid white" : "none" }}>시리즈 </span>
                    </Link>
                    {/* 영화 링크 */}
                    <Link
                        to="/movies"
                        className="link">
                        <span style={{ border: type === "movies" ? "2px solid white" : "none" }}> 영화 </span>
                    </Link>
                     {/* 장르 선택 셀렉트 박스 */}
                    <div className='category' style={{ display: type === "home" || type === "search" ? "none" : "block" }}>
                        <select
                            name="genre"
                            id="genre"
                            onChange={(e) => setGenre(e.target.value)}
                        >
                            <option value="">장르</option>
                            <option value="adventure">모험</option>
                            <option value="comedy">코미디</option>
                            <option value="crime">범죄</option>
                            <option value="fantasy">판타지</option>
                            <option value="historical">역사</option>
                            <option value="horror">공포</option>
                            <option value="romance">로맨스</option>
                            <option value="sci-fi">SF</option>
                            <option value="thriller">스릴러</option>
                            <option value="animation">애니</option>
                            <option value="drama">드라마</option>
                            <option value="documentary">다큐</option>
                        </select>
                    </div>
                </div>
                <div className="right">
                    {/* 사용자 이름 표시 */}
                    <span className="username">{loggedInUser?.username}</span>
                    {/* 프로필 아이콘과 로그아웃 옵션 */}
                    <div className="profile">
                        <img src={loggedInUser?.profile || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDw0QDw8PDxAPDg8PDw8PDhUQDw8PFRUWFhUVFRYYHSggGBonHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQFy0dHR0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLSstLSsrLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAQIFBgQDBwj/xAA9EAACAQIEAgcECAUEAwAAAAABAgADEQQSITEFQQYTIlFhcYEyQpGhBxQjUoKxwdEVJGJy8DOSsuElQ6L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQMCBAX/xAAiEQEBAAICAQQDAQAAAAAAAAAAAQIRAzEhBBJBUSIycRT/2gAMAwEAAhEDEQA/APqQjEQkhIoElEI4BHCEocICMQghCOAo4QgEI5516yorO7BURSzMdlUC5JgTnjiMVSp26ypTp5ts7hb+V958x6QdMsXiGdcPUGFoC4Ugfb1B3k3uv9o25mY3G06jEuzXv2jVqMcx8RrdpleWfDacN1uv0IrAgEEEHYg3Bkp+fOEdMa+DqKaRzAOoqLmciprzzMbXududjrabTBfSsRVAxWGCUGt9pRJdk8SD7Q30GunOdTOfLi8d+H02KQwmJp1qaVaTrUp1FDI6m6sp2IM9J24KKOEKUI4oBAQiMIIo4QpQhHCCEIQHC0IQHCEIHnGIhJSKI4RiARwtGIQCOEJQQjhAIQhAJ89+lXj/AFa08EjFTUUVax2+zuQijvuVJ9BPoU+afSNwJq/EcM6qTnw4UgG2ZlZrC/LcXmfJdYtOKbyYFKdWs1OjhXY1iO2UQNl/E23oJf4LoDibZ61S7bnP2jceJm76FdE1wVLM+Vq9TV2GoFzewPdrNBi0NrDczCS6em5TenxHH9Cqqsz5wbm5NraiZziPD6lJrMSUttuJ9r4nh2Oh1F9bTC9LcEDTew2/UTiZ2Xy7uGNx8L/6Fce/V4nCsxalTK1KNzfLnvmUeGl/Xxn06fNPoUwY6nFV9e06URfa9PMCR+Ep859Mnsw6eHPtGEcVp05KEIQFCOIwFFHCAo4RwFGIWhCiEIQhxRwgeckJESQkU4xEIxAlCEcqCEI4BCEIBCEcAmf4vQdsdgXC9hOtVj4shZfTsn4TQTjxdEl6bg2Cklh97Qgf8jOOTppxfsxPS3iGLVnCNjLKt1TCU8id1jVIuW77WtedXR2pXGCqVXatmRSyis/WNoTfU6maniZoqmaoFIHJgD+c5MRiaPVuhZFOQXpggFVO1xymF/r1Y9dPlnEsVi3JqGri8jOFCUqmQai/dtCrnOFrMzVWtSYgV1tVW19CbDN57zU8GxFB2NJwj2uabAA6a6X5HSHF1Q3UKLWIsLC42t85lvcaa1XX9FNUpg1wzU8joHrMc18wqVGtcW7OgA57cpt5lPo/wNRKVWpVOZmIpK290RnO51Iu1r88pmrnr47bjNvFzSTOyFCORM0ZCKMxQCIxxQpQjihBGIoxADCEICjijgOKOEK8xJCREkJBIQhCA5KREYlQxHFCA44o4BCEIBEy3BEcYgZTi+FxD1EdAlUUgWSg7mmrvc7tY2O1ri1x6yHFUrVkGalhxys9dlPLfs8rn4S2xT5KpzeyTv3XkOJ4dHUZntfmCNZ5LO3uwz6fNAlZayUqSIQCDUrK5yILA2BI7Ta29DNT0fwi18RaqM6WdiLkXAFht46zm4h1dLMAQLGwF5ZdBqgatV7xS09WG05wm8o75cvxtjYU6aqqqoCqosANgI44T2vnEZGSkTAUIGEBRGOKA4oxCArRwihTihCEOEIQHaEIQPMSd5GEipCOIRwGI4o5Q4RRwhwijgOEUC0BwJtOaliw405EgjmCNJGoTca7kDyncw+3NycRqo9SvSb2kKtY7mm4ureV8w/CZVcV4WpXsVHTL7ofQeQnR0kUIKeKV1p1qTLSGY2FdajACl/dmIy+JPeZxvj1rU7glSy6d4M8nNj7a9fDluTTIYqgFdgWLkHUk3MXR3ijjiNPqh9nh6btWN9GzdlUPnqfwzrrcLYB8vaax7TaBRzZjyA1uZX4LG0KWDL0Fft1HGeoMr4iqGKK1uSaaDkL+Men4vdlv6deo5NY6+313A46lXQPScMCNveHmOU6J8u4Qj0xSCMwZVF2BIN+ZvNdw3j1S1qqhwPeWwb9j8p7Lx34eKZNFEZzUeJUX2ceRuLec6ZxrTpGF4zFIpQhCAQijEAhHFAUI4QCO0UcIlaEjCB5iSEQjkUxHFHAcIQEoccUIQxHFAnQwIltfCc9Ryp1NgdjPZfO4+Y/eeNYBgV01Gh8P+prJpnXBSYpVqL94hx433/zxljfT01lC1Y2INzUwx7XeaR09eR9Zb0q16dxzGk7scyqbplg2qYSrlKhqb0MTTz+yKlGor9q+mU5dfOVWKwy9cGB/wBTtVFGmSodTz1ve+mhvcTZIoIF9dLHuN95U18PdkJ1ZVakT6XRj8CPWZ54TOarTDkuF3GZ6S4kPTGHw4c3zCpVFxSUWvcn3rAE277So4Zws1epsuWjh6SqgPvOBq5/L49813ScilhqdNQM9Y9Xe1iRdb6eU6MJhBTw5sALLNMZMcZI4yyuV3VQ2HKgDvlvhMIALW3GsK1EFafmCbSywqgLc8tfSW1FXYiotFTZiDUqnmqch5mdWHx5osuY3pMSLfd13HzldwKqan1rE7mrWZE/sTsKPU3PrPTjzpTFLNrlAyoPaqVCLACSzfglaq8U4eCVS1EBrZqZKMBsDobfAgek7jMLNVtAYoQkUoxCAgSiMLwhBCOEBRxRwHCKEDzkpESUinGJGSEBxxRyoIQihUpFzy74xI1OUs7c3pBTcdxErcY3VC/u3LeRO/pr853VibesruIUc9NktlO4YcjyM2jKqrGYsLi8JU3TEBsM/drYqT/uHwEsMExRmpHkTbymMrpVFJVqML0eJqDlJIUMiEWvqL728e6bXiFO+SoN7A6d/OaZTpzFjRPLlaVuJxgGLFBRq9JnY+C2/eduBrZgD6fvKHGsf4thrc8LiBb8VL9xOI6ePSc/zPD1PJqjfpLtx9kfGUnHgTjsKn3UIOnvasfzEvcVpTNuVjL9DxPs256CQ49ivq+EfXtdWbeJtOrBoNzpbXWZTp7jC4NNDcWUE8hmIG/rEm6lWvRJAuCwgb7gY950LX+YkMPhzXxVStUNxS2F7qltlH6nmfC05uF16hqVKFMf6Qp0VY7A9TSZm8lFvVxLLiBWhhXVNh2S50Lud/SWkefRzHfzDp7tXMfxrrf4X+AmomG4AyrVo1G0DVBTTxZrzcGYck1WuF8FCEU4dnHFCA4CKOEShIx3gMwijgEIQgeQkhIiSEinHFCESjkY5VO8IrwhEp51hp6Sci5285ce0y6c7uMpYmwA2G517ucrfryOxphwGAuA4KNfwvvPfGaE3quut1BQZB4A21+M5eKserIZ1ZeZXstby1mXJy5S+Ph6OLiws8+dsz0mrC1YAXZk7Vgcpq0galNr/hZfNhNZhKoqUaLcmRT6FQZRfUw91C3pnRkI1XyvPPAcSp4ZqWE7Rpm6UnZr5HUD7Jr66i9j/T4iacfqPdPbl2z5fT+38sel9g7o5HI6/EyqxVQfxfDAbjC4gm3fmo/uJaVm7OYbiZDA42/FEZvaOHxA8u3RtPTJvy8vS6x4/wDJUj/cfXq6c0QPZlBxAgYnD1e+oUP+xLS7w3s+rfmYvUI8aq+98f0mT6TU+y9tgFuRyswM1mPfKpNnb+lELsfQTBYzpJQql6WVzcMpXIzZhsRpvEyk7X229NT0ZbO+Ma9/two02tTpjfnreLpH9tWoYRDYKOtqnkqjmZXfRcGTB4g1WLFcVXJZgVNtG1BAI0I0llSoHLVdxmq4lgXUjZN0pnwtYkeNu+O7tOvCtBVqiVtqVPs4RNiwHtVj4HW3eNdrTemY7EYSxJY5mO5/aarB1c1Km3egv57H5zPkaYPWEITJocIoQJRQhAcIQhDhCOAQhCB4iSvIxyKlHI3hAleOKEocIoQiV4m2v3awhA5HpkBm7OpuAW5ecz3FLMtRsjF1BOelUFgTtfUg28RLXFYY2KjRFBaobkZreygPK/OcuDdalIMf/Wz5FUZFdlFrheS3LWvroCddZpnxTPunHzXDqODgyVChbK7G3timVDg8hyNrcpx47gFevm+yy5muSXCsbA2K66HY+k1NCrbInNaaO3ddjYj5T2NTfS9tRpvMf82P21vqsviRmOA8N4kl0xT0iguFYPmZh3kAaH1nvR6IouK+tNXY2VwEVQAM1ibkk9w5S8aswUd+utv39Z5VsRlTa+blcC9p6pbHlvmoYnhCOUzu2VWVly2BzC9wSb+HwnYpVRYC45X1/wAMqW4xVGhwzsp0vTqIx+BIjXiV7/Y1qYJ0aoqqNj/V4co8otmrmVHEXAYjQhhz5Ebic2J4kVBubW+JmfxvF3qtkpJUrOGHZpC5W+l2Oy785ny4bxa8Weslzw7EhWxNIWsyrU12HusT4Wt8JcUNbNY3a+QHQ23v4k7yg4XwbErU66qaa3UIFN3IObTNsCL2PpLp8EbXZsz++6s1Oow7sysNByB8JeKWYSVOWy52xzYyogJDtYgeyNWPw2ltwJ74dPN/+RmcfqedZra2zduxGhs2/LYy/wCj5/l1/uf85eTpzh2s4QEJi1OEUcAjgI4QQhCA4QkhALQheEDnBjkRJCRTjijgOEUcoI4oQhwBiheFcHFc1iL9lgdP6pUH7L6nT5sHZh3A6D9ZosTSzoV+HnMdjK3VVGctmO3aOoty1m/HdzTLOarsosTUr3JvlCjyWQ+sZR3qANtddt5Svxc3NrAkm5J0nj/ErEMSajLqo1FNLeG5PwnenK9+vAfaVX6pToi27bAcwPXnK7GdIFY2W7AaBQGOnpaVtesWOep29PeBKi3h3Tir8VoqBeooBvlVCFB8gN4Fm/G6+yjqhtqwT5Lczg4pxdqdPOzsdVFk7OYk25nMfiB4SrSpVrMUDLh6bFbuyZnsDyb3Zp8J0coPTbO4ruQMrkgkZTcW5CIVTUMFi8ay9ZmoUGJBAN3qrYbnkNTtN3wzh9PD01p0lCBRsotee+HwoVFG2UD0nrWqog7TgeF9fgJB51ajEMCbAr6qeRlRisY7+Dpoyg6EeH+c48ZxKmdFuxPos4Kle5BuM1tbTqRzXitI9ZVBPZdQ9u6oNCfMi1/KbTo+lsNS8cx/+jMhTqa7G+x9dLzd4Wl1dOmn3VA9QNZly3xppxvaOIRzFqI4o4Q44pIQCEIQGBCKOAQjhA5RJCeYMmJFSjkRJShwhCAQiihDvHI3gDCpiU/GOE4eqSz0lLW1NypJ7zYiW4M4sW/tH0+E7w7cZdMfW4TTBsi89TcnScHEOE5rhSUGuqkjvmuoUL68544qjc7W75vtk+cfwd3z0mLsL6XJP5yufo8yXUizDVLjRx3T6d9RF721kMZglZbMNDz7jHhd1i8DwVUQOoKN1ZY5Tltpe09XwVVO0rv6kftNPh8GOrqgm7LTCjT2gUOs6alFFF7X21OwvLuJ5YoYvHC2b2O9qhX5WkKfEqrE9k278x7XpaXGLXrW12ty/Kc5wlj3SjnR2vqSAd5d8K4C+JFTLWCFMuhQ2N79x8JWdT+81nQ5u1VHein4H/ucZ2yOsfNS4R0cqU2U1nplUNwEJbMfG4FvnNLAmIGee5W9tZNJiSEgIxIqYhEI7whiSEjHAlCKOAo4rxwCEIQOMSQMUJFTBkhHCA7xRwlCMiY4QiN44QhTJlfW1W3fCE0wZ5vPDDRh42ienCE0cPMLPDFURl9RCEI5mQKw/wA0uRacWLxBK00G7KAfTT844TqDnWgEGu/PznJVF+Q3hCdI82GkvOiptWI76bj5g/pCE5z/AFdY9tXGIoTyt0hGIQgSEcIQiUIQgOF4QgEYhCA4QhA//9k="}
                            alt=""
                        />
                        <ExpandMoreIcon className="hideIcon" />
                        <div className="options"><span onClick={logout}>로그아웃</span></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar