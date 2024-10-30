#include <stdio.h>
#include <tchar.h>
#include <windows.h>

#define DIR_LEN MAX_PATH+1

int _tmain(int argc, TCHAR* argv[])
{
	STARTUPINFO si = { 0, };
	PROCESS_INFORMATION	pi;

	si.cb = sizeof(si);	// ����ü ������ ����
	si.dwFlags = STARTF_USEPOSITION | STARTF_USESIZE;	// �����ϴ� ��ǥ �� ũ�⸦ ����� ��
	si.dwX = 200;
	si.dwY = 300;
	si.dwXSize = 400;
	si.dwYSize = 400;	// �����Ǵ� ���μ��� ������ ����
	si.lpTitle = LPWSTR("Creat Process Example");		// ���� �߻� �� �ؼ���� �ƴϿ��� ����

	TCHAR command[] = _T("AdderProcess.exe 10 20");		// AdderProcess.exe ���� ��ɾ�
	TCHAR cDir[DIR_LEN];
	BOOL state;

	GetCurrentDirectory(DIR_LEN, cDir);		// ���� ���丮 ���
	_fputts(cDir, stdout);
	_fputts(_T("\n"), stdout);

	SetCurrentDirectory(_T("C:\\Users\\SYPark\\Documents\\Github"));
	// ���丮 ���� AdderProcess.exe�� �� ��ο� �־�� ��

	GetCurrentDirectory(DIR_LEN, cDir);
	_fputts(cDir, stdout);
	_fputts(_T("\n"), stdout);

	state = CreateProcess(
		NULL,
		command, // ���� ��ɾ�
		NULL,
		NULL,
		TRUE,
		CREATE_NEW_CONSOLE, // ���ο� �ܼ��� �����ϴ� �÷���
		NULL,
		NULL,
		&si,
		&pi
	);	// ���μ��� ����

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