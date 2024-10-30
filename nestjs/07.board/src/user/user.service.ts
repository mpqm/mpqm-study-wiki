import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserDto } from './user.dto';
import { User } from './user.entity';

// UserService는 애플리케이션에서 사용자와 관련된 비즈니스 로직을 처리하는 서비스
@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  private logger = new Logger('UserService');

  // 사용자 생성을 위한 메서드, userDto에 담긴 정보를 이용해 사용자를 생성하고 결과를 반환
  createUser(userDto: UserDto): Promise<User> {
    this.logger.verbose(`CreateUser PayLoad: ${JSON.stringify(userDto)}`);
    return this.userRepository.createUser(userDto);
  }

  // 이메일을 기반으로 사용자 정보를 조회하는 메서드, 조회한 사용자 정보를 반환하거나 없을 경우 undefined를 반환
  getUser(email: string): Promise<User | undefined> {
    this.logger.verbose(`GetUser PayLoad: ${JSON.stringify(email)}`);
    return this.userRepository.getUser(email);
  }

  // 모든 사용자 정보를 조회하는 메서드, 모든 사용자의 정보를 배열로 반환
  getAllUser(): Promise<User[]> {
    return this.userRepository.getAllUser();
  }

  // 이메일을 기반으로 사용자 정보를 업데이트하는 메서드, 업데이트한 사용자 정보를 반환
  updateUser(email: string, userDto: UserDto): Promise<User> {
    return this.userRepository.updateUser(email, userDto);
  }

  // 이메일을 기반으로 사용자 정보를 삭제하는 메서드, 반환 없음
  deleteUser(email: string): Promise<void> {
    return this.userRepository.deleteUser(email);
  }
}
