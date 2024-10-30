import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './user.dto';
import * as bcrypt from 'bcrypt';

// UserRepository 클래스는 User 엔티티와 데이터베이스 연결을 담당
@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  // 사용자 엔티티 생성 및 저장 후 반환 메서드
  async createUser(userDto: UserDto): Promise<User> {
    const { email, username, password } = userDto;
    const user = this.create({ email, username, password });
    await this.save(user);
    return user;
  }

  // 주어진 이메일을 이용해 사용자 조회 후 반환하는 메서드
  async getUser(email: string): Promise<User | undefined> {
    return await this.findOne({ where: { email } });
  }

  // 모든 사용자 조회 후 반환하는 메서드
  async getAllUser(): Promise<User[]> {
    return await this.find();
  }

  // 사용자 정보 업데이트 메서드
  async updateUser(email: string, userDto: UserDto): Promise<User> {
    const user = await this.getUser(email); // 이메일로 사용자 조회
    if (!user) { // 사용자가 존재하지 않을 경우 예외 처리
      throw new NotFoundException(`Can't find User with email ${email}`);
    }
    const { username, password } = userDto;
    const salt = await bcrypt.genSalt(); // 비밀번호 암호화를 위한 솔트 생성 
    const encryptedPassword = bcrypt.hashSync(password, salt); // 비밀번호 암호화
    user.username = username; // 사용자 이름 업데이트
    user.password = encryptedPassword; // 사용자 비밀번호 업데이트
    await this.update({ email }, user); // 이메일 기준 사용자 정보 업데이트
    user.password = undefined; // 반환에서 비밀번호 제외
    return user;
  }

  // 사용자 삭제 메서드
  async deleteUser(email: string): Promise<void> {
    const result = await this.delete({ email }); // 주어진 이메일을 이용하여 사용자 삭제 시도
    if (result.affected === 0) {  // 삭제된 행의 수가 0일 경우 예외 처리
      throw new NotFoundException(`Can't find User with email ${email}`);
    }
  }
}
