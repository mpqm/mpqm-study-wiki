import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db'); // config 모듈을 사용해 db 설정 정보를 가져옴

// TypeORM 설정 정보를 정의
export const typeORMConfig: TypeOrmModuleOptions = {
  // 데이터베이스 유형을 설정 파일로부터 가져옴
  type: dbConfig.type,

  // 호스트 주소를 환경 변수 또는 설정 파일로부터 가져오거나 기본 값으로 설정
  host: process.env.RDS_HOSTNAME || dbConfig.host,

  // 포트 번호를 환경 변수 또는 설정 파일로부터 가져오거나 기본 값으로 설정
  port: process.env.RDS_PORT || dbConfig.port,

  // 데이터베이스 사용자명을 환경 변수 또는 설정 파일로부터 가져오거나 기본 값으로 설정
  username: process.env.RDS_USERNAME || dbConfig.username,

  // 데이터베이스 비밀번호를 환경 변수 또는 설정 파일로부터 가져오거나 기본 값으로 설정
  password: process.env.RDS_PASSWORD || dbConfig.password,

  // 데이터베이스 이름을 환경 변수 또는 설정 파일로부터 가져오거나 기본 값으로 설정
  database: process.env.RDS_DB_NAME || dbConfig.database,

  // 엔티티들의 경로를 지정합니다. 모든 엔티티 파일을 인식
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  
  // 데이터베이스 쿼리 로깅 활성화
  // logging: true,

  // 애플리케이션 실행 시 데이터베이스 스키마를 자동으로 동기화할지 여부를 설정
  synchronize: dbConfig.synchronize,
};
