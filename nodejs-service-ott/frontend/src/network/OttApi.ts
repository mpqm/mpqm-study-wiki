import { ConflictError, UnauthorizedError } from "./HttpErrors";
import { ContentModel, MovieModel, UserModel } from "./Model";
// API 요청을 보내는 fetchData 함수를 정의
async function fetchData(input: RequestInfo, init?: RequestInit) {
    // fetch 함수를 사용해 API 요청을 보내고 응답을 받음
    const response = await fetch(input, init);
    // 응답이 성공적인 경우, 해당 응답을 반환
    if (response.ok) { return response; }
    else {
        // 응답이 실패한 경우, 에러 메시지를 파싱해 errorMesaage에 저장
        const errorBody = await response.json();
        const errorMessage = errorBody.error;
        // 응답 상태 코드에 따라 적절한 에러 발생
        if (response.status === 401) { throw new UnauthorizedError(errorMessage); }
        else if (response.status === 409) { throw new ConflictError(errorMessage); }
        throw Error("Request failed with status: " + response.status + ", message: " + errorMessage); // 일반 에러
    }
}

// 인증된 사용자 정보를 가져오는 ApiCall 함수
export async function getAuth(): Promise<UserModel> {
    const response = await fetchData("/api/auth/getauth", { method: "GET", });
    return response.json();
}

// 회원 인터페이스
export interface RegisterCredentials {
    username: string;
    email: string;
    password: string;
}

// 회원 가입을 요청하는 ApiCall 함수
export async function register(credentials: RegisterCredentials): Promise<UserModel> {
    const response = await fetchData("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(credentials),
    });
    return response.json();
}

// 로그인 인터페이스
export interface LoginCredentials {
    email: string;
    password: string;
}

// 로그인을 요청하는 ApiCall 함수
export async function login(credentials: LoginCredentials): Promise<UserModel> {
    const response = await fetchData("/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    return response.json();
}

// 로그아웃을 요청하는 ApiCall 함수
export async function logout() {
    await fetchData("/api/auth/logout", { method: "POST" });
}

// 콘텐츠를 가져오는 ApiCall 함수, type과 genre를 매개변수로 받으며, 해당 값을 기반으로 콘텐츠를 필터링
export async function getContent(type?: string, genre?: string): Promise<ContentModel> {
    let url = "/api/content/getcontent";
    // type 또는 genre가 주어진 경우, 쿼리 파라미터로 추가
    if (type || genre) {
        const queryParams = new URLSearchParams();
        if (type) queryParams.append("type", type);
        if (genre) queryParams.append("genre", genre);
        url += "?" + queryParams.toString();
    }
    // 쿼리 파라미터가 추가된 url로 API 요청을 보내고 응답을 반환
    const response = await fetchData(url, { method: "GET" });
    return response.json();
}

// 특정 영화 정보를 가져오는 ApiCall 함수 url 매개변수(movie의 _id)로 해당 영화의 URL을 전달
export async function getMovie(url: string): Promise<MovieModel> {
    const response = await fetchData("api/movie/getmovie/" + url, { method: "GET" });
    return response.json();
}

// 모든 영화 정보를 가져오는 함수
export async function getAllMovie(): Promise<MovieModel> {
    const response = await fetchData("api/movie/getAllmovie/", { method: "GET" });
    return response.json();
}

// 영화 제목을 기반으로 영화 정보를 검색하는 ApiCall 함수, url(제목) 매개변수로 검색할 영화의 제목을 전달
export async function getMovieByTitle(url: string): Promise<MovieModel[]> {
    // 제목에 포함된 한국어나 특수 문자 등을 인코딩해 URL에 사용
    const encodedTitle = encodeURIComponent(url)
    const response = await fetchData("api/movie/getmoviebytitle?title=" + encodedTitle, { method: "GET" });
    return response.json();
}
