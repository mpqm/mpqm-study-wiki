export interface UserModel {
    username: string, // User 이름
    email: string, // User 이메일
    profile: string // User 프로필 사진링크
}

export interface ContentModel {
    [x: string]: any; //인덱싱용
    type: string,   // 타입
    genre: string,  // 장르
    content: string[], // 콘텐츠 배열 안에는 movie의 몽고DB 오브젝트 id가 존재
}

export interface MovieModel {
    title: string, // 제목
    desc: string, // 설명
    img: string, // 사진
    trailer: string, // 트레일러
    video: string, // 비디오
    year: string, // 연도
    limit: string, // 시청제한
    genre: string, // 장르
    isSeries: boolean // 영화인지 시리즈인지
}

