import { Container } from "react-bootstrap";
import NotesPageLoggedInView from "../components/NotesPageLoggedInView";
import NotesPageLoggedOutView from "../components/NotesPageLoggedOutView";
import styles from "../styles/NotePage.module.css";
import { User } from "../models/user";

// NotesPageProps 인터페이스 정의
interface NotesPageProps {
    loggedInUser: User | null; // 로그인된 사용자 정보 또는 null을 받는 loggedInUser 속성
}

// Notepage 컴포넌트 정의
const Notepage = ({ loggedInUser }: NotesPageProps) => {
    return (
        <Container className={styles.notesPage}>
            <>
                {loggedInUser
                    ? <NotesPageLoggedInView /> // loggedInUser가 존재하는 경우 NotesPageLoggedInView 컴포넌트를 렌더링
                    : <NotesPageLoggedOutView /> // loggedInUser가 존재하지 않는 경우 NotesPageLoggedOutView 컴포넌트를 렌더링
                }
            </>
        </Container>
    );
}

export default Notepage;
