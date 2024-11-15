/*
	CommandPrmpt_One.cpp
	프로그램 설명: 명령 프롬프트의 골격
*/
#include <stdio.h>
#include <stdlib.h>
#include <tchar.h>
#include <locale.h>
#include <windows.h>

#define STR_LEN 256 //문자열 길이
#define CMD_TOKEN_NUM 10 //입력가능한 최대 문자열 개수

TCHAR ERROR_CMD[] = _T("'%s'은(는) 실행할 수 있는 프로그램이 아닙니다. \n"); //오류메세지

int CmdProcessing(void);
TCHAR* StrLower(TCHAR*);

//int tmain(int agrc, TCHAR* argv[])
int _tmain(int agrc, TCHAR* argv[]) {
	_tsetlocale(LC_ALL, _T("Korean"));//유니코드한글입력가능

	DWORD isExit; 
	while (1) //무한루프
	{
		isExit = CmdProcessing(); //CmdProcessing() 함수의 반환값저장
		if (isExit == TRUE) //CmdProcessing()함수의 반환값이 TRUE라면
		{
			_fputts(_T("명령어 처리를 종료합니다. \n"), stdout);
			break;
		}
	}
	return 0;
}

TCHAR cmdString[STR_LEN];
TCHAR cmdTokenList[CMD_TOKEN_NUM][STR_LEN];
TCHAR seps[] = _T(" ,\t\n");//문자열 구분기준은 공백이다.


int CmdProcessing(void) //명령어를 입력받아서 해당 명령어 실행
{
	_fputts(_T("Best Command Prompt>> "), stdout);
  //_getts(cmdString);
	_getts_s(cmdString); //visual studio 2015부터 _getts를 gett_s로 사용, 명령어 입력받음
	
	TCHAR* context = NULL;//(추가한부분) 분리된 남은 문자열이 들어가는 공간 _tcstok_s 함수를 사용하기 위해서 추가
  //TCHAR* token = _tcstok(cmdString, seps);
	TCHAR* token = _tcstok_s(cmdString, seps, &context); //명령어 분리 ex) I am a boy -> I, am, a, boy
	int tokenNum = 0;//cmdTokenList 배열인덱스표현
	while (token != NULL)
	{
	  //_tcscpy(cmdTokenList[tokenNum++], StrLower(token));
		_tcscpy_s(cmdTokenList[tokenNum++], _countof(cmdTokenList), StrLower(token)); //_countof() windows,h헤더에 있는함수 strcpy나 strcat같은 문자열 함수에서 일어날수있는 BOF를 보완
		//모두 소문자로 변경한 명령어를 cmdTokenList에 저장
	  //token = _tcstok(NULL, seps);
		token = _tcstok_s(NULL, seps, &context); //분리된 문자열이 없을때까지
	}

	if (!_tcscmp(cmdTokenList[0], _T("exit"))) //문자열 exit 입력시 TRUE값이 리턴됨 
	{
		return TRUE;
	}
	else if (!_tcscmp(cmdTokenList[0], _T("추가되는 명령어 1")))//구현X
	{
	}
	else if (!_tcscmp(cmdTokenList[0], _T("추가되는 명령어 2"))) //구현X
	{
	}
	else
	{
		_tprintf(ERROR_CMD, cmdTokenList[0]);//exit이외의 문자열입력시 대문자를 소문자로 변경후 tokenlist[0]번째값을 출력 즉 문자열을 공백으로 구분했을때 저장되는 첫번째 값
	}

	return 0;
}

TCHAR* StrLower(TCHAR* pStr) //문자열 내의 존재하는 모든 대문자를 소문자로 변경하고 변경된 문자열의 포인터를 반환한다.
{
	TCHAR* ret = pStr;

	while (*pStr)//NULL 까지 반복
	{
		if (_istupper(*pStr)) //대문자이면
			*pStr = _totlower(*pStr); //소문자로 변경
		pStr++;
	}

	return ret;
}
