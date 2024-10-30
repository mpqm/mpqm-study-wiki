import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { User } from "src/user/user.entity";

// GetUser 커스텀 데코레이터, 현재 인증된 사용자 정보를 파라미터로 제공
export const GetUser = createParamDecorator((data, ctx:ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest(); // ExecutionContext를 사용해 현재 HTTP 요청 정보 가져오기
    return req.user; // 요청 객체에 저장된 사용자 정보 반환
})
