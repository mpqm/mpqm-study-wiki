/*
	CommandPrmpt_One.cpp
	���α׷� ����: ��� ������Ʈ�� ���
*/
#include <stdio.h>
#include <stdlib.h>
#include <tchar.h>
#include <locale.h>
#include <windows.h>

#define STR_LEN 256 //���ڿ� ����
#define CMD_TOKEN_NUM 10 //�Է°����� �ִ� ���ڿ� ����

TCHAR ERROR_CMD[] = _T("'%s'��(��) ������ �� �ִ� ���α׷��� �ƴմϴ�. \n"); //�����޼���

int CmdProcessing(void);
TCHAR* StrLower(TCHAR*);

//int tmain(int agrc, TCHAR* argv[])
int _tmain(int agrc, TCHAR* argv[]) {
	_tsetlocale(LC_ALL, _T("Korean"));//�����ڵ��ѱ��Է°���

	DWORD isExit; 
	while (1) //���ѷ���
	{
		isExit = CmdProcessing(); //CmdProcessing() �Լ��� ��ȯ������
		if (isExit == TRUE) //CmdProcessing()�Լ��� ��ȯ���� TRUE���
		{
			_fputts(_T("��ɾ� ó���� �����մϴ�. \n"), stdout);
			break;
		}
	}
	return 0;
}

TCHAR cmdString[STR_LEN];
TCHAR cmdTokenList[CMD_TOKEN_NUM][STR_LEN];
TCHAR seps[] = _T(" ,\t\n");//���ڿ� ���б����� �����̴�.


int CmdProcessing(void) //��ɾ �Է¹޾Ƽ� �ش� ��ɾ� ����
{
	_fputts(_T("Best Command Prompt>> "), stdout);
  //_getts(cmdString);
	_getts_s(cmdString); //visual studio 2015���� _getts�� gett_s�� ���, ��ɾ� �Է¹���
	
	TCHAR* context = NULL;//(�߰��Ѻκ�) �и��� ���� ���ڿ��� ���� ���� _tcstok_s �Լ��� ����ϱ� ���ؼ� �߰�
  //TCHAR* token = _tcstok(cmdString, seps);
	TCHAR* token = _tcstok_s(cmdString, seps, &context); //��ɾ� �и� ex) I am a boy -> I, am, a, boy
	int tokenNum = 0;//cmdTokenList �迭�ε���ǥ��
	while (token != NULL)
	{
	  //_tcscpy(cmdTokenList[tokenNum++], StrLower(token));
		_tcscpy_s(cmdTokenList[tokenNum++], _countof(cmdTokenList), StrLower(token)); //_countof() windows,h����� �ִ��Լ� strcpy�� strcat���� ���ڿ� �Լ����� �Ͼ���ִ� BOF�� ����
		//��� �ҹ��ڷ� ������ ��ɾ cmdTokenList�� ����
	  //token = _tcstok(NULL, seps);
		token = _tcstok_s(NULL, seps, &context); //�и��� ���ڿ��� ����������
	}

	if (!_tcscmp(cmdTokenList[0], _T("exit"))) //���ڿ� exit �Է½� TRUE���� ���ϵ� 
	{
		return TRUE;
	}
	else if (!_tcscmp(cmdTokenList[0], _T("�߰��Ǵ� ��ɾ� 1")))//����X
	{
	}
	else if (!_tcscmp(cmdTokenList[0], _T("�߰��Ǵ� ��ɾ� 2"))) //����X
	{
	}
	else
	{
		_tprintf(ERROR_CMD, cmdTokenList[0]);//exit�̿��� ���ڿ��Է½� �빮�ڸ� �ҹ��ڷ� ������ tokenlist[0]��°���� ��� �� ���ڿ��� �������� ���������� ����Ǵ� ù��° ��
	}

	return 0;
}

TCHAR* StrLower(TCHAR* pStr) //���ڿ� ���� �����ϴ� ��� �빮�ڸ� �ҹ��ڷ� �����ϰ� ����� ���ڿ��� �����͸� ��ȯ�Ѵ�.
{
	TCHAR* ret = pStr;

	while (*pStr)//NULL ���� �ݺ�
	{
		if (_istupper(*pStr)) //�빮���̸�
			*pStr = _totlower(*pStr); //�ҹ��ڷ� ����
		pStr++;
	}

	return ret;
}
