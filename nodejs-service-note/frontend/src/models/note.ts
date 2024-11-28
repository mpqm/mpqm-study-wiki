export interface Note {
    _id: string;       // 노트의 고유 식별자
    title: string;     // 노트의 제목
    text?: string;     // 노트의 내용(옵션)
    createdAt: string; // 노트의 생성 일자 및 시간
    updatedAt: string; // 노트의 최근 업데이트 일자 및 시간
}