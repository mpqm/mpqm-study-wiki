import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import { UserModel } from './network/Model';
import * as OttApi from "./network/OttApi";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Player from './pages/player/Player';
import Register from './pages/register/Register';

function App() {
  const [isAuth, setIsAuth] = useState<boolean>()
  const [loggedInUser, setLoggedInUser] = useState<UserModel | null>(null);

  useEffect(() => {
    async function fetchLoggedInUser() {
      try {
        // 사용자 정보를 불러오는 API를 호출하여 로그인된 사용자 정보를 가져옴
        const user = await OttApi.getAuth();
        setLoggedInUser(user);
        setIsAuth(true) // 인증 상태를 true로 설정하여 로그인 상태를 확인
      } catch (error) {
        console.error(error);
        setIsAuth(false) // 인증 상태를 false로 설정하여 로그인 상태를 확인
      }
    }
    fetchLoggedInUser();
  }, []);

  // 로그인 상태 확인 중이라면, 페이지를 그대로 유지
  if (isAuth === undefined) { return null; }

  return (
    <BrowserRouter>
      {/* 로그인 페이지 라우트 설정 */}
      <Routes>
        < Route
          path="/login"
          element={!isAuth
            ? <Login
              onLoginSuccessful={() => setIsAuth(true)}
              onLoginUser={(user) => { setLoggedInUser(user) }} />
            : <Navigate to="/" />}
        />
        {/* 회원가입 페이지 라우트 설정 */}
        <Route
          path="/register"
          element={<Register onSignUpSuccessful={(user) => setLoggedInUser(user)} />}
        />
        {/* 홈 페이지 라우트 설정 */}
        <Route
          path="/"
          element={isAuth
            ? <Home
              type="home"
              loggedInUser={loggedInUser}
              onLogoutSuccessful={() => setIsAuth(false)} />
            : <Navigate to="/login" />}
        />
        <>
          {/* 시리즈 페이지 라우트 설정 */}
          <Route
            path="series"
            element={isAuth
              ? <Home
                type="series"
                loggedInUser={loggedInUser}
                onLogoutSuccessful={() => { setIsAuth(false) }} />
              : <Navigate to="/login" />}
          />
          {/* 영화 페이지 라우트 설정 */}
          <Route
            path="movies"
            element={isAuth
              ? <Home
                type="movies"
                loggedInUser={loggedInUser}
                onLogoutSuccessful={() => { setIsAuth(false) }} />
              : <Navigate to="/login" />}
          />
          {/* 검색 페이지 라우트 설정 */}
          <Route
            path="search"
            element={isAuth
              ? <Home
                type="search"
                loggedInUser={loggedInUser}
                onLogoutSuccessful={() => { setIsAuth(false) }} />
              : <Navigate to="/login" />}
          />
          {/* 플레이어 페이지 라우트 설정 */}
          <Route
            path="player"
            element={isAuth
              ? <Player />
              : <Navigate to="/login" />}
          />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
