import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

// 인증 여부를 확인하고 처리하는 메서드
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(ctx: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        return super.canActivate(ctx) // 부모 클래스의 canActivate 메서드를 호출하여 JWT 인증 수행
    }
}