// Handlebars 템플릿에서 사용할 커스텀 헬퍼 함수들
module.exports = {
    lengthOfList: (list = []) => list.length, // 리스트의 길이를 반환
    eq: (val1, val2) => val1 === val2, // 두 값이 같은지 여부를 확인
    dateString: (isoString) => new Date(isoString).toLocaleDateString(), // ISO 형식의 날짜 문자열을 받아서 현지 시간의 날짜 문자열로 변환
}