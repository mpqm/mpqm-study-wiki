#include <stdio.h>
#include <tchar.h>
#include <Windows.h>

#if defined(_WIN64)
typedef unsigned __int64 UINT_PTR;
#else 
typedef unsigned int UINT_PTR;
#endif

UINT CalDistance(UINT a, UINT b)
{
	return a-b;
}

int _tmain() 
{
	INT val1 = 10;
	INT val2 = 20;
	_tprintf(_T("position%ld, %ld\n"),(UINT_PTR)&val1, (UINT_PTR)&val2);
	_tprintf(_T("distance%ld\n"),CalDistance((UINT_PTR)&val1, (UINT_PTR)&val2));
	return 0;
}