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
			pipeName,				// ������ �̸�
			PIPE_ACCESS_DUPLEX,		// �а� ���� ���
			PIPE_TYPE_MESSAGE | PIPE_READMODE_MESSAGE | PIPE_WAIT,
			PIPE_UNLIMITED_INSTANCES,	// �ִ� �ν��Ͻ� ���� = ���� ���� ������ ����
										// createpipe ó�� ȣ���Ҷ��� ������ ��
										// ������ ȣ���� ���� �����ϴ� ���� ����
			BUF_SIZE,					// ��� ���� ������
			BUF_SIZE,					// �Է� ���� ������
			20000,						// Ŭ���̾�Ʈ Ÿ��-�ƿ�
										// ���� ��û�� ��ٸ��� �ð�(ms)
			NULL						// ���� ����
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
	} // ���� Ŭ���̾�Ʈ�� ���������� �����ϱ� ���� ���� ����
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
	); // ������ ����
	if (!isSuccess || fileNameSize == 0)
	{
		_tprintf(_T("Pipe read message error! \n"));
		return -1;
	}

	FILE* filePtr = _tfopen(fileName, _T("r"));	// ���ŵ� �������� ������ ����

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
	} // open �� ������ �����͸� �о�ͼ� Ŭ���̾�Ʈ�� ������ �۽�

	FlushFileBuffers(hPipe);       // ���۸� �����     
	DisconnectNamedPipe(hPipe);    // �������� �Ҹ�
	CloseHandle(hPipe);
	return 1;
}