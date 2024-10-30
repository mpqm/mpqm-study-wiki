import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // TypeORM 엔티티로 정의
export class User {
  @PrimaryGeneratedColumn() // 자동 생성되는 기본 키 (Primary Key)
  id?: number; // 선택적으로 id 필드를 정의 (예: 기존 데이터베이스와 연동할 때 유용)

  @Column() // 컬럼으로 정의
  username: string; // 사용자명

  @Column({ unique: true }) // 유니크 제약 조건이 있는 컬럼으로 정의
  email: string; // 이메일

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' }) // 컬럼으로 정의, 기본값 설정
  createdDt: Date = new Date(); // 생성 일시, 기본값으로 현재 시간을 사용

  @Column({ nullable: true }) // 컬럼으로 정의, 널값 허용
  password: string; // 비밀번호

  @Column({ nullable: true }) // 컬럼으로 정의, 널값 허용
  providerId: string; // Google OAuth providerId
}
