import styles from "../styles/Note.module.css";
import styleUtils from "../styles/utils.module.css";
import { Note as NoteModel } from "../models/note";
import { Card } from "react-bootstrap";
import { formatDate } from "../utils/formatDate";
import { MdDelete } from "react-icons/md";

interface NoteProps {
  note: NoteModel; // 노트 객체
  onNoteClicked: (note: NoteModel) => void; // 노트 클릭 콜백 함수
  onDeleteNoteClicked: (note: NoteModel) => void; // 노트 삭제 클릭 콜백 함수
  className?: string; // 클래스 이름
}

const Note = ({ note, onNoteClicked, onDeleteNoteClicked, className }: NoteProps) => {
  const { title, text, createdAt, updatedAt } = note;

  let createdAtUpdatedText: string;
  if (updatedAt > createdAt) {
    createdAtUpdatedText = "Updated: " + formatDate(updatedAt); // 노트가 업데이트된 경우 "Updated: [날짜]" 형식의 텍스트
  } else {
    createdAtUpdatedText = "Created: " + formatDate(createdAt); // 노트가 처음 생성된 경우 "Created: [날짜]" 형식의 텍스트
  }

  return (
    <Card className={`${styles.noteCard} ${className}`} onClick={() => onNoteClicked(note)}>
      <Card.Body className={styles.cardBody}>
        {/* 노트 제목 */}
        <Card.Title className={styleUtils.flexCenter}>
          {title} 
          {/* 노트 삭제 아이콘 */}
          <MdDelete
            className="text-muted ms-auto"
            onClick={(e) => {
              onDeleteNoteClicked(note);
              e.stopPropagation();
            }}
          />
        </Card.Title>
        {/*노트 내용*/}
        <Card.Text className={styles.cardText}>{text}</Card.Text> 
      </Card.Body>
       {/* 생성 또는 업데이트 일자 표시 */}
      <Card.Footer className="text-muted">{createdAtUpdatedText}</Card.Footer>

    </Card>
  );
};

export default Note;