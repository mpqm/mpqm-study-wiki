import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // TypeORM을 이용하여 User 엔티티와 관련된 모듈을 가져옴
  controllers: [UserController], // User와 관련된 HTTP 요청을 처리하는 컨트롤러 클래스를 등록
  providers: [UserService], // User와 관련된 비즈니스 로직을 처리하는 서비스 클래스를 등록
  exports: [UserService], // UserService를 다른 모듈에서 사용할 수 있도록 export
})
export class UserModule {}
