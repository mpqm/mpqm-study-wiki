import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { BoardDto } from './board.dto';
import { BoardService } from './board.service';
import { BoardValidationPipe } from './board-validation.pipe';
import { Board } from './board.entity';
import { GetUser } from 'src/auth/auth.decorator';
import { User } from 'src/user/user.entity';
import { JwtAuthGuard } from 'src/auth/auth.guard';


// BoardController 클래스는 게시물 관련 HTTP 요청을 처리하는 컨트롤러
@UseGuards(JwtAuthGuard) // JwtAuthGuard를 통해 유효성 검증
@Controller('board')
export class BoardController {
  private logger = new Logger('BoardController')
  constructor(private boardService: BoardService) {}

  // '/board/' 경로의 HTTP POST 요청을 처리하는 메서드, 게시물 생성을 처리하는 엔드포인트
  @Post('/')
  createBoard( @Body(BoardValidationPipe) boardDto: BoardDto, @GetUser() user: User ): Promise<Board> {
    this.logger.verbose(`User ${user.username} trying to create board PayLoad: ${JSON.stringify(boardDto)}`)
    return this.boardService.createBoard(boardDto, user);
  }

  // '/board/:id' 경로의 HTTP GET 요청을 처리하는 메서드, 특정 게시물 조회를 처리하는 엔드포인트
  @Get('/:id')
  getBoardById(@Param('id', ParseIntPipe) id, @GetUser() user:User): Promise<Board> {
    this.logger.verbose(`User ${user.username} trying to get ${id} board`)
    return this.boardService.getBoardById(id);
  }

  // '/board/' 경로의 HTTP GET 요청을 처리하는 메서드, 모든 게시물 조회를 처리하는 엔드포인트
  @Get('/')
  getAllBoard(@GetUser() user: User): Promise<Board[]> {
    this.logger.verbose(`User ${user.username} trying to get all boards`)
    return this.boardService.getAllBoard(user);
  }

  // '/board/:id' 경로의 HTTP PATCH 요청을 처리하는 메서드, 게시물 업데이트를 처리하는 엔드포인트
  @Patch('/:id')
  updateBoard( @Param('id', ParseIntPipe) id, @Body(BoardValidationPipe) boardDTO: BoardDto, @GetUser() user: User ): Promise<Board> {
    this.logger.verbose(`User ${user.username} trying to upate ${id} board PayLoad: ${JSON.stringify(boardDTO)}`)
    return this.boardService.updateBoard(id, boardDTO, user);
  }

  // '/board/:id' 경로의 HTTP DELETE 요청을 처리하는 메서드, 게시물 삭제를 처리하는 엔드포인트
  @Delete('/:id')
  deleteBoard( @Param('id', ParseIntPipe) id, @GetUser() user: User): Promise<void> {
    this.logger.verbose(`User ${user.username} trying to delete ${id} board`)
    return this.boardService.deleteBoard(id, user);
  }
}
