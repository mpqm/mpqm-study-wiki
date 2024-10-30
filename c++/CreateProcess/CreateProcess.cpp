#include <stdio.h>
#include <tchar.h>
#include <windows.h>

#define DIR_LEN MAX_PATH+1

int _tmain(int argc, TCHAR* argv[])
{
	STARTUPINFO si = { 0, };
	PROCESS_INFORMATION	pi;

	si.cb = sizeof(si);	// 구조체 사이즈 설정
	si.dwFlags = STARTF_USEPOSITION | STARTF_USESIZE;	// 세팅하는 좌표 및 크기를 사용할 것
	si.dwX = 200;
	si.dwY = 300;
	si.dwXSize = 400;
	si.dwYSize = 400;	// 생성되는 프로세스 윈도우 설정
	si.lpTitle = LPWSTR("Creat Process Example");		// 에러 발생 시 준수모드 아니오로 설정

	TCHAR command[] = _T("AdderProcess.exe 10 20");		// AdderProcess.exe 실행 명령어
	TCHAR cDir[DIR_LEN];
	BOOL state;

	GetCurrentDirectory(DIR_LEN, cDir);		// 현재 디렉토리 경로
	_fputts(cDir, stdout);
	_fputts(_T("\n"), stdout);

	SetCurrentDirectory(_T("C:\\Users\\SYPark\\Documents\\Github"));
	// 디렉토리 변경 AdderProcess.exe는 이 경로에 있어야 함

	GetCurrentDirectory(DIR_LEN, cDir);
	_fputts(cDir, stdout);
	_fputts(_T("\n"), stdout);

	state = CreateProcess(
		NULL,
		command, // 실행 명령어
		NULL,
		NULL,
		TRUE,
		CREATE_NEW_CONSOLE, // 새로운 콘솔을 생성하는 플래그
		NULL,
		NULL,
		&si,
		&pi
	);	// 프로세스 생성

	if (state != 0)
	{
		_fputts(_T("Creation OK! \n"), stdout);
	}
	else
	{
		_fputts(_T("Creation Error \n"), stdout);
	}

	return 0;
}