import { Board } from 'src/board/board.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

// User 엔티티는 사용자 정보를 나타냄
@Entity()
export class User extends BaseEntity {
  // 사용자의 고유한 식별자인 ID입니다.
  @PrimaryGeneratedColumn()
  id: number;

  // 사용자의 이메일 주소를 저장하는 필드
  @Column()
  email: string;
  
  // 사용자의 이름을 저장하는 필드, nullable 옵션 설정
  @Column({ nullable: true })
  username: string;

  // 사용자의 비밀번호를 저장하는 필드, nullable 옵션 설정
  @Column({ nullable: true })
  password: string;

  // User 엔티티와 Board 엔티티 간의 관계를 정의, 한 사용자는 여러 개의 게시물을 소유, eager 옵션은 연관된 데이터를 즉시 로드
  @OneToMany((type) => Board, (board) => board.user, { eager: true })
  boards: Board[];
}
