#include <stdio.h>
#include <tchar.h>
#include <Windows.h>

int _tmain(int argc, TCHAR * argv[])
{
	DWORD val1, val2;
	val1 = _ttoi(argv[1]);
	val2 = _ttoi(argv[2]);
	// 문자열 데이터 -> 정수형 데이터 변환 (atoi, _wtoi 동시 지원 매크로)

	_tprintf(_T("%d + %d = %d \n"), val1, val2, (val1 + val2));
	_gettchar();

	return 0;
}
