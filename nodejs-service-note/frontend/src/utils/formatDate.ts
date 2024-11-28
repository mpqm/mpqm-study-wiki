// 주어진 날짜 문자열을 형식화해 문자열로 반환
export function formatDate(dateString: string): string{
    return new Date(dateString).toLocaleString("ko-KR", 
    {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
    });
}