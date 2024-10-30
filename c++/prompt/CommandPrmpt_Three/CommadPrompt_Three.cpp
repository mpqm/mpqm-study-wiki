#include <stdio.h>
#include <stdlib.h>
#include <tchar.h>
#include <locale.h>
#include <windows.h>

#define STR_LEN 256
#define CMD_TOKEN_NUM 10

TCHAR ERROR_CMD[] = _T("'%s'는 실행할 수 있는 PROGRAM 이 아님니다. \n");

TCHAR cmdString[STR_LEN];
TCHAR cmdTokenList[CMD_TOKEN_NUM][STR_LEN];
TCHAR seps[] = _T(" , \t \n");
int CmdReadTokenize(void);
int CmdProcessing(int);
//int CmdProcessing(void);
TCHAR* StrLower(TCHAR*);

int _tmain(int argc, TCHAR* argv[])
{
    _tsetlocale(LC_ALL, _T("korean"));
    //매개변수 전달인자가 있는 경우 처리를 위한것이다.
    //start 명령어를 위한 처리.
    if (argc > 2)
    {
        for (int i = 1; i < argc; i++)
            _tcscpy_s(cmdTokenList[i - 1],_countof(cmdTokenList), argv[i]);
        CmdProcessing(argc - 1);
    }

    DWORD isExit;
    while (1)
    {
        int tokenNum = CmdReadTokenize();
        if (tokenNum == 0)  //enter input을 위한 부분
            continue;

        isExit = CmdProcessing(tokenNum);
        if (isExit == TRUE)
        {
            _fputts(_T("명령어 처리를 종료합니다. \n"), stdout);
            break;
        }
    }
    return 0;
}

int CmdReadTokenize(void)
{
    TCHAR* token;

    _fputts(_T("Best command prompt>> "), stdout);
    _getts_s(cmdString);
    TCHAR* context = NULL;
    token = _tcstok_s(cmdString, seps, &context);

    int tokenNum = 0;

    while (token != NULL)
    {
        _tcscpy_s(cmdTokenList[tokenNum++],_countof(cmdTokenList), StrLower(token));
        token = _tcstok_s(NULL, seps, &context);
    }
    return tokenNum;
}


int CmdProcessing(int tokenNum)
{
    BOOL isRun;
    STARTUPINFO si = { 0, };
    PROCESS_INFORMATION pi;

    TCHAR cmdStringWithOptions[STR_LEN] = { 0, };
    TCHAR optString[STR_LEN] = { 0, };

    si.cb = sizeof(si);
    if (!_tcscmp(cmdTokenList[0], _T("exit")))
    {
        return TRUE;
    }
    else if (!_tcscmp(cmdTokenList[0], _T("Start")))
    {
        //"start wcho test good" 이라는 문자열이 입역되었다고 가정하면
        //이 프로그램의 실행파일 이름이 CmdProject.exe 라고 가정한다.

        if (tokenNum > 1)  //"start echo test good"과 같은 입력 처리를 위해서
        {
            //start를 제외한 나머지 문자열을 재구성한다.
            for (int i = 1; i < tokenNum; i++)
                _stprintf_s(optString, _T("%s %s"), optString, cmdTokenList[i]);
            _stprintf_s(cmdStringWithOptions, _T("%s %s"), _T("CmdPrompt_Three.exe"), optString);
        }
        else  //start만 입력하는 경우 처리
            _stprintf_s(cmdStringWithOptions, _T("%s"), _T("CmdPrompt_Three.exe"));

        isRun = CreateProcess(
            NULL, cmdStringWithOptions, NULL, NULL, TRUE, CREATE_NEW_CONSOLE, NULL, NULL, &si, &pi);

        CloseHandle(pi.hProcess);
        CloseHandle(pi.hThread);
    }
    else if (!_tcscmp(cmdTokenList[0], _T("echo")))
    {
        //입력된 문자열을 그대로 출력하는 echo 명령어
        for (int i = 1; i < tokenNum; i++)
            _stprintf_s(optString, _T("%s %s"), optString, cmdTokenList[0]);
        _tprintf(_T("echo message: %s \n"), optString);
    }
    else
    {
        _tcscpy_s(cmdStringWithOptions, _countof(cmdStringWithOptions), cmdTokenList[0]);

        //Check Point 1: 문자열 처리를 위한 for loof
        for (int i = 1; i < tokenNum; i++)
            _stprintf_s(cmdStringWithOptions, _T("%s %s"), cmdStringWithOptions, cmdTokenList[i]);

        isRun = CreateProcess(NULL, cmdStringWithOptions, NULL, NULL, TRUE, 0, NULL, NULL, &si, &pi);

        CloseHandle(pi.hProcess);
        CloseHandle(pi.hThread);

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