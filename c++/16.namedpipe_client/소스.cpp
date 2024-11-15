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
			pipeName,						// ������ �̸�
			GENERIC_READ | GENERIC_WRITE,	// �б� ���� ��� ����
			0,
			NULL,
			OPEN_EXISTING,
			0,
			NULL
		);
		if (hPipe != INVALID_HANDLE_VALUE)
			break;	// ������ �Ǿ��ٸ� while�� ��������

		if (GetLastError() != ERROR_PIPE_BUSY)
		{
			_tprintf(_T("Could not open pipe\n"));
			return 0;
		} // ���� ��û �ð��� ���� ���� Ȯ��

		if (!WaitNamedPipe(pipeName, 20000))
		{
			_tprintf(_T("Could not open pipe\n"));
			return 0;
		} // ������ ���� ��û �ð����� ���
		  // �ð� ������ ���ϸ� �������� ������ �ð���ŭ ���
	} // ������ ������ ��û�ϱ� ���� ���� ����

	DWORD pipeMode = PIPE_READMODE_MESSAGE | PIPE_WAIT;  // �д� ��带 �޽��� ��� ��� ����
	BOOL isSuccess = SetNamedPipeHandleState(
		hPipe,		// ������ �ڵ�
		&pipeMode,	// ������ ������ ��� 
		NULL,
		NULL
	); // ���� ������ ����� ����

	if (!isSuccess)
	{
		_tprintf(_T("SetNamedPipeHandleState failed!\n"));
		return 0;
	}

	LPCTSTR fileName = TEXT("news.txt");
	DWORD bytesWritten = 0;
	isSuccess = WriteFile(
		hPipe,			// ������ �ڵ�
		fileName,		// ������ �޽���                  
		(_tcslen(fileName) + 1) * sizeof(TCHAR),	// �޽��� ����
		&bytesWritten,	// ���۵� ����Ʈ ��
		NULL
	); // ������ �۽�
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