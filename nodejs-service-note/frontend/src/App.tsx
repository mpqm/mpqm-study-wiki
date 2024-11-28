import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import LoginModal from './components/LoginModal';
import NavBar from './components/NavBar';
import SignUpModal from './components/SignUpModal';
import { User } from './models/user';
import * as NotesApi from "./network/notes_api";
import NotesPage from './pages/NotesPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
	// 로그인된 사용자 정보를 상태로 관리
	const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

	// 회원 가입 모달 표시 여부 상태 관리
	const [showSignUpModal, setShowSignUpModal] = useState(false);

	// 로그인 모달 표시 여부 상태 관리
	const [showLoginModal, setShowLoginModal] = useState(false);

	// 페이지 로드 시, 로그인된 사용자 정보 가져오기
	useEffect(() => {
		async function fetchLoggedInUser() {
			try {
				const user = await NotesApi.getLoggedInUser(); // 로그인된 사용자 정보를 가져오는 API 호출
				setLoggedInUser(user); // 로그인된 사용자 정보를 상태에 설정
			} catch (error) {
				console.error(error);
			}
		}
		fetchLoggedInUser();
	}, []);

	return (
		<BrowserRouter>
			<div>
				<NavBar
					loggedInUser={loggedInUser}
					onLoginClicked={() => setShowLoginModal(true)}
					onSignUpClicked={() => setShowSignUpModal(true)}
					onLogoutSuccessful={() => setLoggedInUser(null)}
				/>
				<Container>
					<Routes>
						<Route
							path='/'
							element={<NotesPage loggedInUser={loggedInUser} />} // NotesPage 컴포넌트에 로그인된 사용자 정보를 전달
						/>
						<Route
							path='/privacy'
							element={<PrivacyPage />} // PrivacyPage 컴포넌트를 렌더링
						/>
						<Route
							path='/*'
							element={<NotFoundPage />} // NotFoundPage 컴포넌트를 렌더링
						/>
					</Routes>
				</Container>
				{showSignUpModal &&
					<SignUpModal
						onDismiss={() => setShowSignUpModal(false)}
						onSignUpSuccessful={(user) => {
							setLoggedInUser(user); // 회원 가입이 성공하면 로그인된 사용자 정보를 업데이트
							setShowSignUpModal(false); // 회원 가입 모달 닫기
						}}
					/>
				}
				{showLoginModal &&
					<LoginModal
						onDismiss={() => setShowLoginModal(false)}
						onLoginSuccessful={(user) => {
							setLoggedInUser(user); // 로그인이 성공하면 로그인된 사용자 정보를 업데이트
							setShowLoginModal(false); // 로그인 모달 닫기
						}}
					/>
				}
			</div>
		</BrowserRouter>
	);
}

export default App;
