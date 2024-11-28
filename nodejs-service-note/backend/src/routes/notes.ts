import express from "express";
import * as NoteController from "../controller/notes"; // "../controller/notes"에서 NoteController를 가져옴

const router = express.Router(); 

// 루트 경로에 대한 GET 요청 핸들러를 등록, NoteController.getNotes 함수를 실행해 모든 노트를 가져옴
router.get("/", NoteController.getNotes);

// /:noteId 경로에 대한 GET 요청 핸들러를 등록, noteId에 해당하는 노트를 가져오는 NoteController.getNote 함수를 실행
router.get("/:noteId", NoteController.getNote);

// 루트 경로에 대한 POST 요청 핸들러를 등록, 새로운 노트를 생성하는 NoteController.createNote 함수를 실행
router.post("/", NoteController.createNote);

// /:noteId 경로에 대한 DELETE 요청 핸들러를 등록, noteId에 해당하는 노트를 삭제하는 NoteController.deleteNote 함수를 실행
router.delete("/:noteId", NoteController.deleteNote);

// /:noteId 경로에 대한 PATCH 요청 핸들러를 등록, noteId에 해당하는 노트를 업데이트하는 NoteController.updateNote 함수를 실행
router.patch("/:noteId", NoteController.updateNote);

export default router; 
