// namedpipe_client.cpp

#include <stdio.h>
#include <tchar.h>
#include <windows.h>

#define BUF_SIZE 1024

int _tmain(int argc, _TCHAR* argv[])
{
	HANDLE hPipe;
	TCHAR readDataBuf[BUF_SIZE + 1];
	LPCTSTR pipeName = TEXT("\\\\.\\pipe\\simple_pipe");

	while (1)
	{
		hPipe = CreateFile(
			pipeName,						// 파이프 이름
			GENERIC_READ | GENERIC_WRITE,	// 읽기 쓰기 모드 설정
			0,
			NULL,
			OPEN_EXISTING,
			0,
			NULL
		);
		if (hPipe != INVALID_HANDLE_VALUE)
			break;	// 연결이 되었다면 while을 빠져나옴

		if (GetLastError() != ERROR_PIPE_BUSY)
		{
			_tprintf(_T("Could not open pipe\n"));
			return 0;
		} // 연결 요청 시간이 지난 것을 확인

		if (!WaitNamedPipe(pipeName, 20000))
		{
			_tprintf(_T("Could not open pipe\n"));
			return 0;
		} // 설정한 연결 요청 시간동안 대기
		  // 시간 설정을 안하면 서버에서 설정한 시간만큼 대기
	} // 서버에 연결을 요청하기 위한 무한 루프

	DWORD pipeMode = PIPE_READMODE_MESSAGE | PIPE_WAIT;  // 읽는 모드를 메시지 기반 모드 설정
	BOOL isSuccess = SetNamedPipeHandleState(
		hPipe,		// 파이프 핸들
		&pipeMode,	// 변경할 파이프 모드 
		NULL,
		NULL
	); // 위에 설정한 모드대로 변경

	if (!isSuccess)
	{
		_tprintf(_T("SetNamedPipeHandleState failed!\n"));
		return 0;
	}

	LPCTSTR fileName = TEXT("news.txt");
	DWORD bytesWritten = 0;
	isSuccess = WriteFile(
		hPipe,			// 파이프 핸들
		fileName,		// 전송할 메시지                  
		(_tcslen(fileName) + 1) * sizeof(TCHAR),	// 메시지 길이
		&bytesWritten,	// 전송된 바이트 수
		NULL
	); // 데이터 송신
	if (!isSuccess)
	{
		_tprintf(_T("WriteFile failed!\n"));
		return 0;
	}

	DWORD bytesRead = 0;

	while (1)
	{
		isSuccess = ReadFile(
			hPipe,
			readDataBuf,
			BUF_SIZE * sizeof(TCHAR),
			&bytesRead,
			NULL
		);

		if (!isSuccess && GetLastError() != ERROR_MORE_DATA)
			break;

		readDataBuf[bytesRead / sizeof(TCHAR)] = 0;
		_tprintf(_T("%s\n"), readDataBuf);
	}

	CloseHandle(hPipe);
	return 0;
}