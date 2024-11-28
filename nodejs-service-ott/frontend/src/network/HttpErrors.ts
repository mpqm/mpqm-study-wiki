// Error 클래스를 상속받은 사용자 정의 오류 클래스
class HttpError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = this.constructor.name;
    }
}

// HttpError 클래스를 상속받음 인증되지 않은 요청을 나타내는 HTTP 오류를 처리하기 위해 사용
export class UnauthorizedError extends HttpError { }
// ttpError 클래스를 상속받음, 서버에서 요청 충돌이 발생한 경우를 나타내는 HTTP 오류를 처리하기 위해 사용
export class ConflictError extends HttpError { }