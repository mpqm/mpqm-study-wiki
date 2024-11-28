import { ConflictError, UnauthorizedError } from "../errors/http_errors";
import { Note } from "../models/note";
import { User } from "../models/user";

// 데이터를 가져오는 함수
async function fetchData(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);
    
    if (response.ok) {
        return response; // 응답이 성공적인 경우 응답 객체 반환
    } else {
        const errorBody = await response.json();
        const errorMessage = errorBody.error;
        
        if (response.status === 401) {
            throw new UnauthorizedError(errorMessage); // 401 Unauthorized 오류 발생시 UnauthorizedError 예외를 throw
        } else if (response.status === 409) {
            throw new ConflictError(errorMessage); // 409 Conflict 오류 발생시 ConflictError 예외를 throw
        }
        
        throw Error("Request failed with status: " + response.status + ", message: " + errorMessage); // 기타 오류 발생시 일반적인 Error 예외를 throw
    }
}

// 현재 로그인한 사용자를 가져오는 함수
export async function getLoggedInUser(): Promise<User> {
    const response = await fetchData("/api/users", { method: "GET" });
    return response.json(); // 응답의 JSON 데이터를 파싱하여 사용자 정보 반환
}

// 회원 가입 정보 타입
export interface SignUpCredentials {
    username: string;
    email: string;
    password: string;
}

// 회원 가입을 처리하는 함수
export async function signUp(credentials: SignUpCredentials): Promise<User> {
    const response = await fetchData("/api/users/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    return response.json(); // 응답의 JSON 데이터를 파싱하여 새로 가입한 사용자 정보 반환
}

// 로그인 정보 타입
export interface LoginCredentials {
    username: string;
    password: string;
}

// 로그인을 처리하는 함수
export async function login(credentials: LoginCredentials): Promise<User> {
    const response = await fetchData("/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    return response.json(); // 응답의 JSON 데이터를 파싱하여 로그인한 사용자 정보 반환
}

// 로그아웃을 처리하는 함수
export async function logout() {
    await fetchData("/api/users/logout", { method: "POST" });
}

// 노트를 가져오는 함수
export async function fetchNotes(): Promise<Note[]> {
    const response = await fetchData("/api/notes", { method: "GET" });
    return response.json(); // 응답의 JSON 데이터를 파싱하여 노트 정보 배열 반환
}

// 노트 생성을 처리하는 함수
export interface NoteInput {
    title: string;
    text?: string;
}

export async function createNote(note: NoteInput): Promise<Note> {
    const response = await fetchData("/api/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
    });
    return response.json(); // 응답의 JSON 데이터를 파싱하여 생성된 노트 정보 반환
}

// 노트 업데이트를 처리하는 함수
export async function updateNote(noteId: string, note: NoteInput): Promise<Note> {
    const response = await fetchData("/api/notes/" + noteId, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
    });
    return response.json(); // 응답의 JSON 데이터를 파싱하여 업데이트된 노트 정보 반환
}

// 노트 삭제를 처리하는 함수
export async function deleteNote(noteId: string) {
    await fetchData("/api/notes/" + noteId, { method: "DELETE" });
}
