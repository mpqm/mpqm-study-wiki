import { Button, Form, Modal } from "react-bootstrap";
import { Note } from "../models/note";
import { useForm } from "react-hook-form";
import { NoteInput } from "../network/notes_api";
import * as NotesApi from "../network/notes_api";
import TextInputField from "./form/TextInputField";

interface AddEditNoteDialogProps {
  noteToEdit?: Note; // 편집할 노트 객체
  onDismiss: () => void; // 대화상자 닫기 콜백 함수
  onNoteSaved: (note: Note) => void; // 노트 저장 완료 콜백 함수
}

const AddEditNoteDialog = ({ noteToEdit, onDismiss, onNoteSaved }: AddEditNoteDialogProps) => {
  // react-hook-form의 useForm 훅을 사용하여 폼 관련 기능을 초기화
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NoteInput>({
    defaultValues: {
      title: noteToEdit?.title || "", // 편집할 노트의 제목을 기본값으로 설정
      text: noteToEdit?.text || "", // 편집할 노트의 텍스트를 기본값으로 설정
    },
  });

  // 폼 제출 시 호출되는 콜백 함수
  async function onSubmit(input: NoteInput) {
    try {
      let noteResponse: Note;
      if (noteToEdit) {
        // noteToEdit이 존재하면, 기존 노트를 업데이트
        noteResponse = await NotesApi.updateNote(noteToEdit._id, input);
      } else {
        // noteToEdit이 없으면, 새로운 노트를 생성
        noteResponse = await NotesApi.createNote(input);
      }
      onNoteSaved(noteResponse); // 노트 저장 완료 콜백 함수를 호출하여 새로운 노트를 전달
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>{noteToEdit ? "Edit note" : "Add note"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="addEditNoteForm" onSubmit={handleSubmit(onSubmit)}>
          {/* 제목 입력 필드 */}
          <TextInputField
            name="title"
            label="Title"
            type="text"
            placeholder="Title"
            register={register} // react-hook-form의 register 함수를 전달하여 폼 필드를 등록
            registerOptions={{ required: "Required" }} // 필수 입력 필드로 설정
            error={errors.title} // 에러 객체를 전달하여 필드의 유효성 검사 에러를 표시
          />
          {/* 텍스트 입력 필드 */}
          <TextInputField
            name="text"
            label="Text"
            as="textarea"
            rows={5}
            placeholder="Text"
            register={register} // react-hook-form의 register 함수를 전달하여 폼 필드를 등록
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {/* 폼 제출 버튼 */}
        <Button
          type="submit"
          form="addEditNoteForm"
          disabled={isSubmitting} // 폼이 제출 중인 동안 버튼을 비활성화
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddEditNoteDialog;
