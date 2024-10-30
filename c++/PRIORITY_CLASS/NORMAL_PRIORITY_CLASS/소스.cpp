#include <stdio.h>

#include <windows.h>

#include <tchar.h>



int _tmain(int argc, TCHAR* argv[])

{

    SetPriorityClass(GetCurrentProcess(), NORMAL_PRIORITY_CLASS);



    while (1)

    {

        //for(DWORD i=0; i<10000; i++)

        //      for(DWORD i=0; i<10000; i++); //Busy Waiting!!



        Sleep(10);



        _fputts(_T("NORMAL_PRIORITY_CLASS Process \n"), stdout);

    }



    return 0;

}
