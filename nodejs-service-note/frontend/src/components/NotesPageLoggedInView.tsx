import React, { useEffect, useState } from 'react';
import { Note as NoteModel } from '../models/note';
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import styleUtils from "../styles/utils.module.css";
import AddEditNoteDialog from "./AddEditNoteDialog";
import styles from "../styles/NotePage.module.css";
import * as NotesApi from "../network/notes_api";
import Note from './Note';

const NotesPageLoggedInView = () => {
    const [notes, setNotes] = useState<NoteModel[]>([]); // 노트 목록 상태 변수
    const [notesLoading, setNotesLoading] = useState(true); // 노트 로딩 상태 변수
    const [showNotesLoadingError, setShowNotesloadingError] = useState(false); // 노트 로딩 오류 상태 변수
    const [showAddNoteDialog, setShowAddNoteDialog] = useState(false); // 노트 추가 대화상자 표시 상태 변수
    const [noteToEdit, setNoteToEdit] = useState<NoteModel | null>(null); // 편집할 노트 상태 변수

    useEffect(() => {
        async function loadNotes() {
            try {
                setShowNotesloadingError(false);
                setNotesLoading(true);
                const notes = await NotesApi.fetchNotes(); // 노트 목록을 가져오는 API 호출
                setNotes(notes);
            } catch (error) {
                console.error(error);
                setShowNotesloadingError(true);
            } finally {
                setNotesLoading(false);
            }
        }

        loadNotes();
    }, []);

    async function deleteNote(note: NoteModel) {
        try {
            await NotesApi.deleteNote(note._id); // 노트 삭제 API 호출
            setNotes(notes.filter((existingNote) => existingNote._id !== note._id)); // 삭제된 노트를 제외한 나머지 노트만 유지
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    const notesGrid = (
        <Row xs={1} md={2} x1={3} className={`g-4 ${styles.notesGrid}`}>
            {notes.map((note) => (
                <Col key={note._id}>
                    <Note
                        note={note}
                        className={styles.note}
                        onNoteClicked={(note) => setNoteToEdit(note)}
                        onDeleteNoteClicked={deleteNote}
                    />
                </Col>
            ))}
        </Row>
    );

    return (
        <>
            <Button
                className={`mb-4 ${styleUtils.blockCenter} ${styleUtils.flexCenter}`}
                onClick={() => setShowAddNoteDialog(true)}
            >
                <FaPlus />
                Add new note
            </Button>
            {/* 노트 로딩 중인 경우 스피너 표시 */}
            {notesLoading && <Spinner animation="border" variant="primary" />}

            {/* 노트 로딩 오류 발생 시 오류 메시지 표시 */}
            {showNotesLoadingError && <p>Something went wrong. Please refresh the page</p>}


            {!notesLoading && !showNotesLoadingError && (
                <>
                    {/* 노트가 있는 경우 노트 그리드 표시, 없는 경우 메시지 표시 */}
                    {notes.length > 0 ? notesGrid : <p>You don't have any notes yet</p>}

                </>
            )}

            {showAddNoteDialog && (
                <AddEditNoteDialog
                    onDismiss={() => setShowAddNoteDialog(false)}
                    onNoteSaved={(newNote) => {
                        setNotes([...notes, newNote]); // 새로운 노트를 노트 목록에 추가
                        setShowAddNoteDialog(false);
                    }}
                />
            )}

            {noteToEdit && (
                <AddEditNoteDialog
                    noteToEdit={noteToEdit}
                    onDismiss={() => setNoteToEdit(null)}
                    onNoteSaved={(updatedNote) => {
                        setNotes(
                            notes.map((existingNote) =>
                                existingNote._id === updatedNote._id ? updatedNote : existingNote
                            )
                        ); // 편집된 노트를 노트 목록에 업데이트
                        setNoteToEdit(null);
                    }}
                />
            )}
        </>
    );
};

export default NotesPageLoggedInView;
