import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([BoardRepository]), AuthModule], // TypeOrmModule.forFeature()를 사용하여 BoardRepository 주입 가능한 모듈로 등록
  controllers: [BoardController],
  providers: [BoardService, BoardRepository],
})
export class BoardModule {}
