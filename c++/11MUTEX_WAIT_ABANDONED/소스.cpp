#include <stdio.h>
#include <tchar.h>
#include <Windows.h>
#include <process.h>

LONG gTotalCount = 0;
HANDLE hMutex;

unsigned int WINAPI increaseCountOne(LPVOID Ipparam)
{
	WaitForSingleObject(hMutex, INFINITE);
	gTotalCount++;
	return 0;
}
unsigned int WINAPI increaseCountTwo(LPVOID Ipparam)
{
	DWORD dwWaitResult = 0;
	dwWaitResult = WaitForSingleObject(hMutex, INFINITE);
	WaitForSingleObject(hMutex, INFINITE);
	
	switch (dwWaitResult)
	{
		case WAIT_OBJECT_0:
			ReleaseMutex(hMutex);
			break;
		case WAIT_ABANDONED:
			_tprintf(_T("WAIT_ABANDONED\n"));
			break;
	}
	gTotalCount++;
	ReleaseMutex(hMutex);
	return 0;
}

int _tmain(int argc, TCHAR* argv[]) {
	DWORD dwThreadIDOne;
	DWORD dwThreadIDTwo;

	HANDLE hThreadOne;
	HANDLE hThreadTwo;

	hMutex = CreateMutex(NULL, FALSE, NULL);

	if (hMutex == NULL)
		_tprintf(_T("CreateMutex error :%d\n"), GetLastError());
	hThreadOne = (HANDLE)_beginthreadex(NULL, 0, increaseCountOne, NULL, 0, (unsigned*)&dwThreadIDOne);
	hThreadTwo = (HANDLE)_beginthreadex(NULL, 0, increaseCountOne, NULL, CREATE_SUSPENDED, (unsigned*)&dwThreadIDOne);
	
	Sleep(1000);
	ResumeThread(hThreadTwo);
	WaitForSingleObject(hThreadTwo, INFINITE);
	_tprintf(_T("total count : %d\n"), gTotalCount);
	CloseHandle(hThreadOne);
	CloseHandle(hThreadTwo);
	CloseHandle(hMutex);
	return 0;
}