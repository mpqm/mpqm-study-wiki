import { RequestHandler } from "express"; 
import createHttpError from "http-errors";
import mongoose from "mongoose";
import NoteModel from "../models/note"; // "../models/note"에서 NoteModel 가져옴
import { assertIsDefined } from "../utils/assertIsDefined"; // //지정된 값이 정의되어 있는지 확인하고, 정의되지 않은 경우 에러


// 인증된 사용자의 모든 노트를 가져오는 요청 핸들러
export const getNotes: RequestHandler = async (req, res, next) => {
  const authenticatedUserId = req.session.userId; // 세션에서 인증된 사용자의 ID를 가져옴
  try {
    assertIsDefined(authenticatedUserId); // 사용자 ID가 정의되었는지 확인
    const notes = await NoteModel.find({ userId: authenticatedUserId }); // 인증된 사용자의 모든 노트를 찾음
    res.status(200).json(notes); // 노트를 JSON 응답으로 전송
  } catch (error) {
    next(error); // 발생한 오류를 오류 처리 미들웨어에 전달
  }
};

// 인증된 사용자의 특정 노트를 가져오는 요청 핸들러
export const getNote: RequestHandler = async (req, res, next) => {
  const noteId = req.params.noteId; // 노트의 ID를 요청 매개변수에서 가져옴
  const authenticatedUserId = req.session.userId; // 세션에서 인증된 사용자의 ID를 가져옴
  try {
    assertIsDefined(authenticatedUserId); // 사용자 ID가 정의되었는지 확인

    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "유효하지 않은 노트 ID입니다."); // 유효하지 않은 노트 ID일 경우 에러 발생
    }

    const note = await NoteModel.findById(noteId).exec(); // 주어진 ID로 노트를 찾음

    if (!note) {
      throw createHttpError(404, "노트를 찾을 수 없습니다."); // 노트를 찾을 수 없을 경우 에러 발생
    }

    if (!note.userId.equals(authenticatedUserId)) {
      throw createHttpError(401, "이 노트에 접근할 수 없습니다."); // 다른 사용자의 노트에 접근할 경우 에러 발생
    }

    res.status(200).json(note); // 노트를 JSON 응답으로 전송
  } catch (error) {
    next(error); // 발생한 오류를 오류 처리 미들웨어에 전달
  }
};

interface CreateNoteBody {
  title?: string;
  text?: string;
}

// 새로운 노트를 생성하는 요청 핸들러
export const createNote: RequestHandler<unknown, unknown, CreateNoteBody, unknown> = async (req, res, next) => {
  const title = req.body.title; // 요청 본문에서 제목을 가져옴
  const text = req.body.text; // 요청 본문에서 텍스트를 가져옴
  const authenticatedUserId = req.session.userId; // 세션에서 인증된 사용자의 ID를 가져옴

  try {
    assertIsDefined(authenticatedUserId); // 사용자 ID가 정의되었는지 확인

    if (!title) {
      throw createHttpError(400, "노트 제목을 입력해야 합니다."); // 제목이 없을 경우 에러 발생
    }

    const newNote = await NoteModel.create({
      userId: authenticatedUserId,
      title: title,
      text: text,
    }); // 새로운 노트를 생성
    
    res.status(201).json(newNote); // 생성된 노트를 JSON 응답으로 전송
  } catch (error) {
    next(error); // 발생한 오류를 오류 처리 미들웨어에 전달
  }
};

interface UpdateNoteParams {
  noteId: string;
}

interface UpdateNoteBody {
  title?: string;
  text?: string;
}

// 노트를 업데이트하는 요청 핸들러
export const updateNote: RequestHandler<UpdateNoteParams, unknown, UpdateNoteBody, unknown> = async (req, res, next) => {
  const noteId = req.params.noteId; // 노트의 ID를 요청 매개변수에서 가져옴
  const newTitle = req.body.title; // 요청 본문에서 새로운 제목을 가져옴
  const newText = req.body.text; // 요청 본문에서 새로운 텍스트를 가져옴
  const authenticatedUserId = req.session.userId; // 세션에서 인증된 사용자의 ID를 가져옴
  try {
    assertIsDefined(authenticatedUserId); // 사용자 ID가 정의되었는지 확인
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "유효하지 않은 노트 ID입니다."); // 유효하지 않은 노트 ID일 경우 에러 발생
    }
    if (!newTitle) {
      throw createHttpError(400, "노트는 제목을 가져야 합니다."); // 새로운 제목이 없을 경우 에러 발생
    }
    const note = await NoteModel.findById(noteId).exec(); // 주어진 ID로 노트를 찾음
    if (!note) {
      throw createHttpError(404, "노트를 찾을 수 없습니다."); // 노트를 찾을 수 없을 경우 에러 발생
    }
    if (!note.userId.equals(authenticatedUserId)) {
      throw createHttpError(401, "이 노트에 접근할 수 없습니다."); // 다른 사용자의 노트에 접근할 경우 에러 발생
    }
    note.title = newTitle; // 새로운 제목으로 노트 업데이트
    note.text = newText; // 새로운 텍스트로 노트 업데이트

    const updatedNote = await note.save(); // 업데이트된 노트 저장
    res.status(200).json(updatedNote); // 업데이트된 노트를 JSON 응답으로 전송
  } catch (error) {
    next(error); // 발생한 오류를 오류 처리 미들웨어에 전달
  }
};

// 노트를 삭제하는 요청 핸들러
export const deleteNote: RequestHandler = async (req, res, next) => {
  const noteId = req.params.noteId; // 노트의 ID를 요청 매개변수에서 가져옴
  const authenticatedUserId = req.session.userId; // 세션에서 인증된 사용자의 ID를 가져옴
  try {
    assertIsDefined(authenticatedUserId); // 사용자 ID가 정의되었는지 확인
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "유효하지 않은 노트 ID입니다."); // 유효하지 않은 노트 ID일 경우 에러 발생
    }
    const note = await NoteModel.findById(noteId).exec(); // 주어진 ID로 노트를 찾음

    if (!note) {
      throw createHttpError(404, "노트를 찾을 수 없습니다."); // 노트를 찾을 수 없을 경우 에러 발생
    }

    await note.deleteOne(); // 노트 삭제

    res.sendStatus(204); // No Content 상태 코드 전송
  } catch (error) {
    next(error); // 발생한 오류를 오류 처리 미들웨어에 전달
  }
};
