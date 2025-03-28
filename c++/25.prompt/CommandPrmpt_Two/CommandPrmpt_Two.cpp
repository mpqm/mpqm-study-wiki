/*
    CommandPrmpt_Two.cpp
    프로그램 설명: 명령 프롬프트 2차.
*/

#include <stdio.h>
#include <stdlib.h>
#include <tchar.h>
#include <locale.h>
#include <windows.h> 

#define STR_LEN    256
#define CMD_TOKEN_NUM  10

TCHAR ERROR_CMD[]= _T("'%s'은(는) 실행할 수 있는 프로그램이 아닙니다. \n");

int CmdProcessing(void);
TCHAR* StrLower(TCHAR*);

//int tmain(int agrc, TCHAR* argv[])
int _tmain(int agrc, TCHAR* argv[]) 
{
    _tsetlocale(LC_ALL, _T("Korean"));

    DWORD isExit;
    while (1)
    {
        isExit = CmdProcessing();
        if (isExit == TRUE)
        {
            _fputts(_T("명령어 처리를 종료합니다. \n"), stdout);
            break;
        }
    }

    return 0;
}

TCHAR cmdString[STR_LEN];
TCHAR cmdTokenList[CMD_TOKEN_NUM][STR_LEN];
TCHAR seps[] = _T(" ,\t\n");

int CmdProcessing(void)
{
    _fputts(_T("Best command prompt>> "), stdout);
    //_getts(cmdString);
    _getts_s(cmdString);
    TCHAR* context = NULL;
    //TCHAR* token = _tcstok(cmdString, seps);
    TCHAR* token = _tcstok_s(cmdString, seps, &context);
    
    int tokenNum = 0;
    while (token != NULL)
    {
        //_tcscpy(cmdTokenList[tokenNum++], StrLower(token));
        _tcscpy_s(cmdTokenList[tokenNum++], _countof(cmdTokenList), StrLower(token));
        //token = _tcstok(NULL, seps);
        token = _tcstok_s(NULL, seps, &context);
    }

    if (!_tcscmp(cmdTokenList[0], _T("exit")))
    {
        return TRUE;
    }
    else if (!_tcscmp(cmdTokenList[0], _T("추가 되는 명령어 1")))
    {
    }
    else if (!_tcscmp(cmdTokenList[0], _T("추가 되는 명령어 2")))
    {
    }
    else
    {
        STARTUPINFO si = { 0, };//프로세스의 속성을 지정하는용도
        PROCESS_INFORMATION pi;

        si.cb = sizeof(si);//구조체변수의크기
        BOOL isRun = CreateProcess(NULL, cmdTokenList[0], NULL, NULL, TRUE, 0, NULL, NULL, &si, &pi);//두번째 인자에 실행파일을 전달할경우 표준검색경로에 존재하는 실행파일로 간주하고 프로세스 생성
        CloseHandle(pi.hThread);  //추가한부분
        CloseHandle(pi.hProcess); //추가한부분
        if (isRun == FALSE)
            _tprintf(ERROR_CMD, cmdTokenList[0]);
    }

    return 0;
}

TCHAR* StrLower(TCHAR* pStr)
{
    TCHAR* ret = pStr;

    while (*pStr)
    {
        if (_istupper(*pStr))
            *pStr = _totlower(*pStr);
        pStr++;
    }

    return ret;
}