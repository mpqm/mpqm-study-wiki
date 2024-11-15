#include <stdio.h>

#include <windows.h>

#include <tchar.h>



DWORD WINAPI ThreadProc(LPVOID lpParam)//매개변수로 포인터

{

    DWORD* nPtr = (DWORD*)lpParam;



    DWORD numOne = *nPtr; //1집어넣음

    DWORD numTwo = *(nPtr + 1);//3집어넣음



    DWORD total = 0;



    for (DWORD i = numOne; i <= numTwo; i++) //1~3

    {

        total += i;//6

    }



    return total;

}





int _tmain(int argc, TCHAR* argv[])

{

    DWORD dwThreadID[3];

    HANDLE hThread[3];



    DWORD paramThread[] = { 1, 3, 4, 7, 8, 10 };

    DWORD total = 0;

    DWORD result = 0;



    hThread[0] =

        CreateThread(

            NULL, 0,

            ThreadProc,

            (LPVOID)(&paramThread[0]), //1

            0, &dwThreadID[0]

        );



    hThread[1] =

        CreateThread(

            NULL, 0,

            ThreadProc,

            (LPVOID)(&paramThread[2]), //4

            0, &dwThreadID[1]

        );



    hThread[2] =

        CreateThread(

            NULL, 0,

            ThreadProc,

            (LPVOID)(&paramThread[4]),

            0, &dwThreadID[2]

        );





    if (hThread[0] == NULL || hThread[1] == NULL || hThread[2] == NULL)

    {

        _tprintf(_T("Thread creation fault! \n"));

        return -1;

    }



    WaitForMultipleObjects(3, hThread, TRUE, INFINITE); //nonsignal->signal



    GetExitCodeThread(hThread[0], &result);

    total += result;



    GetExitCodeThread(hThread[1], &result);

    total += result;



    GetExitCodeThread(hThread[2], &result);

    total += result;



    _tprintf(_T("total (1 ~ 10): %d \n"), total);//1~10까지 더한값



    CloseHandle(hThread[0]);

    CloseHandle(hThread[1]);

    CloseHandle(hThread[2]);



    return 0;

}
