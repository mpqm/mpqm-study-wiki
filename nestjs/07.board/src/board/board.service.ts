import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { BoardDto } from './board.dto';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';

// BoardService 클래스는 게시물과 관련된 비즈니스 로직을 처리
@Injectable()
export class BoardService {
  constructor(private boardRepository: BoardRepository) {}

  // 게시물 생성 메서드, BoardRepository를 통해 새 게시물 생성 후 반환
  createBoard(boardDto: BoardDto, user: User): Promise<Board> {
    return this.boardRepository.createBoard(boardDto, user);
  }

  // 특정 게시물 조회 메서드, BoardRepository를 통해 특정 ID의 게시물 정보를 조회해 반환
  getBoardById(id: number): Promise<Board> {
    return this.boardRepository.getBoardById(id);
  }

  // 모든 게시물 조회 메서드, BoardRepository를 통해 모든 게시물 정보를 조회해 반환
  getAllBoard(user: User): Promise<Board[]> {
    return this.boardRepository.getAllBoard(user);
  }

  // 게시물 업데이트 메서드, BoardRepository를 통해 특정 ID의 게시물 정보를 업데이트 후 반환
  updateBoard(id: number, boardDto: BoardDto, user: User): Promise<Board> {
    return this.boardRepository.updateBoard(id, boardDto, user);
  }

  // 게시물 삭제 메서드, BoardRepository를 통해 특정 ID의 게시물을 삭제
  deleteBoard(id: number, user: User): Promise<void> {
    return this.boardRepository.deleteBoard(id, user);
  }
}
