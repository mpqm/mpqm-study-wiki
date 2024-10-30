import { User } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

// Board 엔티티 클래스는 게시물 정보를 담당
@Entity()
export class Board extends BaseEntity {
  // 자동 생성되는 기본 키
  @PrimaryGeneratedColumn()
  id: number;
  
  // 게시물 제목을 나타내는 열
  @Column()
  title: string;
  
  // 게시물 내용을 나타내는 열
  @Column()
  desc: string;
  
  // 게시물 상태를 나타내는 열
  @Column()
  status: string;
  
  // 다대일 관계로 User 엔티티와 관계를 맺음, 한 사용자는 여러 개의 게시물을 가짐
  // eager 옵션은 즉시 로딩을 하지 않도록 설정. 필요한 경우에만 로딩
  @ManyToOne((type) => User, (user) => user.boards, { eager: false })
  user: User;
}
