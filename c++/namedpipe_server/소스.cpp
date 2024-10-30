#include <stdio.h>
#include <tchar.h>
#include <windows.h>

#define BUF_SIZE 1024

int CommToClinet(HANDLE);

int _tmain(int argc, _TCHAR* argv[])
{
	LPCTSTR pipeName = TEXT("\\\\.\\pipe\\simple_pipe");
	HANDLE hPipe;

	while (1)
	{
		hPipe = CreateNamedPipe(
			pipeName,				// 파이프 이름
			PIPE_ACCESS_DUPLEX,		// 읽고 쓰기 모드
			PIPE_TYPE_MESSAGE | PIPE_READMODE_MESSAGE | PIPE_WAIT,
			PIPE_UNLIMITED_INSTANCES,	// 최대 인스턴스 갯수 = 보유 가능 파이프 갯수
										// createpipe 처음 호출할때만 설정이 됨
										// 다음에 호출할 때도 유지하는 것이 좋음
			BUF_SIZE,					// 출력 버퍼 사이즈
			BUF_SIZE,					// 입력 버퍼 사이즈
			20000,						// 클라이언트 타임-아웃
										// 연결 요청을 기다리는 시간(ms)
			NULL						// 보안 설정
		);
		if (hPipe == INVALID_HANDLE_VALUE)
		{
			_tprintf(_T("Create pipe failed"));
			return -1;
		}

		BOOL isSuccess = 0;
		isSuccess = ConnectNamedPipe(hPipe, NULL) ? TRUE : (GetLastError() == ERROR_PIPE_CONNECTED);

		if (isSuccess)
			CommToClinet(hPipe);
		else
			CloseHandle(hPipe);
	} // 여러 클라이언트가 순차적으로 접속하기 위해 무한 루프
	return 1;
}

int CommToClinet(HANDLE hPipe)
{
	TCHAR fileName[MAX_PATH];
	TCHAR dataBuf[BUF_SIZE];
	BOOL isSuccess;
	DWORD fileNameSize;
	isSuccess = ReadFile(
		hPipe,
		fileName,
		MAX_PATH * sizeof(TCHAR),
		&fileNameSize,
		NULL
	); // 데이터 수신
	if (!isSuccess || fileNameSize == 0)
	{
		_tprintf(_T("Pipe read message error! \n"));
		return -1;
	}

	FILE* filePtr = _tfopen(fileName, _T("r"));	// 수신된 데이터의 파일을 열기

	if (filePtr == NULL)
	{
		_tprintf(_T("File open error!!\n"));
		return -1;
	}

	DWORD bytesWritten = 0;
	DWORD bytesRead = 0;

	while (!feof(filePtr))
	{
		bytesRead = (fread(dataBuf, sizeof(TCHAR), BUF_SIZE, filePtr)) * sizeof(TCHAR);

		WriteFile(
			hPipe,
			dataBuf,
			bytesRead,
			&bytesWritten,
			NULL
		);
		if (bytesRead != bytesWritten)
		{
			_tprintf(_T("Pipe write message error!!!\n"));
			break;
		}
	} // open 한 파일의 데이터를 읽어와서 클라이언트에 데이터 송신

	FlushFileBuffers(hPipe);       // 버퍼를 비워줌     
	DisconnectNamedPipe(hPipe);    // 파이프를 소멸
	CloseHandle(hPipe);
	return 1;
}