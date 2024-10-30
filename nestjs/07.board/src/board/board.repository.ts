import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { DataSource, Repository } from 'typeorm';
import { BoardDto } from './board.dto';
import { Board } from './board.entity';

// BoardRepository 클래스는 게시물 엔티티와 데이터베이스 연결을 담당
@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(private dataSource: DataSource) {
    super(Board, dataSource.createEntityManager());
  }

  // 게시물 엔티티 생성 및 저장 후 반환 메서드
  async createBoard(boardDto: BoardDto, user: User): Promise<Board> {
    const { title, desc, status } = boardDto;
    const board = this.create({ title, desc, status, user });
    await this.save(board);
    return board;
  }

  // 특정 ID의 게시물을 조회하고 반환하는 메서드
  async getBoardById(id: number): Promise<Board> {
    const found = await this.findOne({ where: { id } }); // id로 게시물 조회
    if (!found) { // 해당 id 게시물 없으면 예외처리
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }

  // 모든 게시물을 조회하는 메서드
  async getAllBoard(user: User): Promise<Board[]> {
    const query = this.createQueryBuilder('board'); // 쿼리 빌더 생성
    query.where('board.userId = :userId', { userId: user.id }); // 현재 사용자의 ID와 일치하는 게시물들을 조회
    return await query.getMany(); // 조회한 모든 게시물 객체를 배열로 반환
  }

  // 게시물을 삭제하는 메서드
  async deleteBoard(id: number, user: User): Promise<void> {
    const boards = await this.getAllBoard(user); // 유저에 속한 게시물 목록을 가져옴
    const isUserBoard = boards.some((board) => board.id === id); // 유저가 가진 게시물의 id와 파라미터 id를 순회 비교
    if (!isUserBoard) { // 현재 사용자의 게시물이 아닌 경우 삭제 권한이 없다는 예외를 발생
      throw new ForbiddenException(`You don't have permission to delete this board`);
    }
    const result = await this.delete(id); // 유저가 가진 게시물을 id 기준으로 삭제
    if (result.affected === 0) { // 삭제된 게시물의 개수가 0인 경우 예외를 발생
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }

  // 게시물을 업데이트하는 메서드
  async updateBoard( id: number, boardDto: BoardDto, user: User ): Promise<Board> {
    const boards = await this.getAllBoard(user); // 유저에 속한 게시물 목록을 가져옴
    const isUserBoard = boards.some((board) => board.id === id); // 유저가 가진 게시물의 id와 파라미터 id를 순회 비교
    if (!isUserBoard) { // 현재 사용자의 게시물이 아닌 경우 업데이트 권한이 없다는 예외를 발생
      throw new ForbiddenException(`You don't have permission to delete this board`);
    }
    const board = await this.getBoardById(id); // 업데이트할 게시물을 조회
    const { title, desc, status } = boardDto;
    board.title = title;
    board.desc = desc;
    board.status = status;
    await this.update(id, board); // 게시물 정보를 업데이트
    return board;
  }
}
