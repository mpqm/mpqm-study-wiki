import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { BoardDto } from './board.dto';

@Injectable()
export class BoardValidationPipe implements PipeTransform {
  readonly StatusOptions = ['PRIVATE', 'PUBLIC']; // 게시물 상태 옵션 정의

  // 파이프의 변환 작업을 수행하는 메서드
  transform(value: BoardDto) {
    const { title, desc, status } = value;
    const errors = [];

    // 제목 유효성 검사
    if (title !== null && typeof title !== 'string') {
      errors.push('Title must be a string or null');
    }

    // 설명 유효성 검사
    if (desc !== null && typeof desc !== 'string') {
      errors.push('Desc must be a string or null');
    }

    // 상태 유효성 검사
    if (status !== null) {
      if (typeof status !== 'string') {
        errors.push('Status must be a string or null');
      } else {
        const upperCaseStatus = status.toUpperCase(); // 상태 값을 대문자로 변경해 유효성 검사
        if (!this.isStatusValid(upperCaseStatus)) {
          errors.push(`${status} isn't in the status options`);
        }
        value.status = upperCaseStatus;
      }
    }
    // 검증 오류가 있을 경우 BadRequestException 발생
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    return value;
  }

  // 상태 값이 유효한지 검사하는 메서드
  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
