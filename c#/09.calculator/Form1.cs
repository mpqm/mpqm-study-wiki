using System;
using System.Windows.Forms;

namespace Calculator
{
    public partial class form_standard : Form
    {
        private bool operand_check = false;      //피연산자 사용 X
        private bool operator_check = false;     //연산자 사용 X
        private bool using_memory_check = false; //메모리 기능 X
        double buffer_value;                     //입력값 임시저장 변수
        double buffer_memory;                    //메모리값 임시저장 변수
        string op;                               //연산자값 임시저장

        //폼(표준)
        public form_standard()
        {
            InitializeComponent();
            button_memoryclear.Enabled = false;  //윈도우 폼 시작시 MC 버튼 비활성화
            button_memoryrecall.Enabled = false; //윈도우 폼 시작시 MR 버튼 비활성화
        }

        //식값과 입력값을 기록하는 메서드
        private void Record()
        {
            richtextbox_record.Multiline = true;
            richtextbox_record.AppendText(label_formula.Text);  //식값 기록
            richtextbox_record.AppendText(Environment.NewLine); //개행문자 대신 사용
            richtextbox_record.AppendText(label_value.Text);    //입력값 기록
            richtextbox_record.AppendText(Environment.NewLine);
        }

        //기록탭의 (clear)버튼 클릭 시 이벤트
        private void Button_recordclear_Click(object sender, EventArgs e)
        {
            richtextbox_record.Clear();//RichTextBox비움
        }


        //입력기능--------------------------------------------------------------------------------------------------------------------------
        //0~9 버튼 클릭 시 이벤트
        private void Button_number_click(object sender, EventArgs e)
        {
            Button button_number = sender as Button;   //0~9까지 눌렀을때 같은 이벤트 처리를 위해 사용

            //소수점자리수가 없는 경우(윈도우 계산기는 입력을 16자리까지만 받음 .,제외하고 16자리)
            if (string.Join("", label_value.Text.Split('.', ',')).Length <= 15)
            {
                //현재입력값없이 0으로 되있거나, 연산자가 입력되어 있거나, 메모리 사용하면 아래 실행
                if (label_value.Text == "0" || operand_check == false || using_memory_check == true)
                {
                    label_value.Text = button_number.Text;     //0~9버튼 클릭 시 입력에 값 출력
                    operand_check = true;                      //피연산자 사용 O
                    operator_check = false;                    //연산자 사용 X
                    using_memory_check = false;                //메모리 사용 X
                }

                //숫자를 계속 입력할때
                else label_value.Text += button_number.Text;    //입력에 전입력값과 버튼값 대입
            }

            else return;

        }

        //(.)버튼 클릭 시 이벤트
        private void Button_dot_Click(object sender, EventArgs e)
        {
            //수식, 입력에 . 이 있으면 추가 안됨
            if (label_value.Text.Contains(".") && label_formula.Text.Contains("."))
            {
                return;
            }

            //수식, 입력에 . 이 없으면 아래 실행
            else
            {
                label_value.Text += "."; //입력값에 .추가
            }
        }

        //∏버튼 클릭시 연산 이벤트
        private void Button_pi_Click(object sender, EventArgs e)
        {
            label_value.Text = Math.PI.ToString(); //입력값에 Math클래스의 파이값 저장
            buffer_value = Math.PI;                //연산을 위해 임시저장값 변경
        }

        //e버튼 클릭시 연산 이벤트
        private void Button_e_Click(object sender, EventArgs e)
        {
            label_value.Text = Math.E.ToString(); //입력값에 Math클래스의 log메서드 계산값 저장
            buffer_value = Math.E;                //연산을 위해 임시저장값 변경
        }

        //(+/-)버튼 클릭 시 이벤트 
        private void Button_negate_Click(object sender, EventArgs e)
        {
            double buffer_negate = double.Parse(label_value.Text); //현재입력값 임시저장
            label_value.Text = (-buffer_negate).ToString();        //입력값에 임시저장한값을 음수처리하고 계산값 저장
        }


        //공학, 연산기능--------------------------------------------------------------------------------------------------------------------
        //(+,-,*,/,x^y, exp, mod)버튼 클릭 시 이벤트
        private void Button_operation_Click(object sender, EventArgs e)
        {
            Button operation_button = sender as Button;     //+, -, *, / 를 눌렀을 때 같은 이벤트 처리를 위해 사용
            op = operation_button.Text;                     //코드 간편화를 위해 선언

            //덧셈 연산
            if (op == "+")
            {
                //피연산자 사용되고, 연산자가 사용된 적이 없으면 실행, 초기사용
                if (operand_check == true && operator_check == false)
                {
                    buffer_value = double.Parse(label_value.Text); //입력값 임시저장, 사칙연산수행시에 임시로 전에 입력값을 저장해야 될 필요가 있음
                    label_formula.Text = buffer_value + op;        //식값에 임시저장값과 연산자 저장
                    operator_check = true;                         //연산자 사용 O
                }

                //기존입력값이 있는상태에서 연산자만 바꾸는 경우
                else if (operand_check == true && operator_check == true)
                {
                    label_formula.Text = buffer_value + op; //식값에 임시저장한값에 연산자를 추가한 값을 저장
                }

                else return;
            }

            //뺄셈 연산
            else if (op == "-")
            {
                if (operand_check == true && operator_check == false)
                {
                    buffer_value = double.Parse(label_value.Text);
                    label_formula.Text = buffer_value + op;
                    operator_check = true;
                }

                else if (operand_check == true && operator_check == true)
                {
                    label_formula.Text = buffer_value + op;
                }

                else return;
            }

            //나눗셈 연산
            else if (op == "/")
            {
                if (operand_check == true && operator_check == false)
                {
                    buffer_value = double.Parse(label_value.Text);
                    label_formula.Text = buffer_value + op;
                    operator_check = true;
                }

                else if (operand_check == true && operator_check == true)
                {
                    label_formula.Text = buffer_value + op;
                }

                else return;
            }

            //곱셈 연산
            else if (op == "*")
            {
                if (operand_check == true && operator_check == false)
                {
                    buffer_value = double.Parse(label_value.Text);
                    label_formula.Text = buffer_value + op;
                    operator_check = true;
                }

                else if (operand_check == true && operator_check == true)
                {
                    label_formula.Text = buffer_value + op;
                }

                else return;
            }

            //x^y제곱 연산
            else if (op == "x^y")
            {
                if (operand_check == true && operator_check == false)
                {
                    buffer_value = double.Parse(label_value.Text);
                    label_formula.Text = buffer_value + "^";
                    operator_check = true;
                }

                else if (operand_check == true && operator_check == true)
                {
                    label_formula.Text = buffer_value + "^";
                }

                else return;
            }

            //exp 연산
            else if (op == "exp")
            {
                if (operand_check == true && operator_check == false)
                {
                    buffer_value = double.Parse(label_value.Text);
                    label_formula.Text = buffer_value + ".e+";
                    operator_check = true;
                }

                else if (operand_check == true && operator_check == true)
                {
                    label_formula.Text = buffer_value + ".e+";
                }

                else return;
            }
            //mod 연산
            else if (op == "mod")
            {
                if (operand_check == true && operator_check == false)
                {
                    buffer_value = double.Parse(label_value.Text);
                    label_formula.Text = buffer_value + "mod";
                    operator_check = true;
                }

                else if (operand_check == true && operator_check == true)
                {
                    label_formula.Text = buffer_value + "mod";
                }

                else return;
            }

            else return;

            label_value.Text = "0"; //연산자 클릭 후 입력 값을 다시 받기 위해 초기화
        }

        //(=)버튼 클릭 시 식계산 이벤트 
        private void Button_equal_Click(object sender, EventArgs e)
        {
            double result = double.Parse(label_value.Text); //현재 입력 값 임시저장
            String formula = label_formula.Text;

            //연산자가 더하기 일 때
            if (op == "+")
            {
                label_value.Text = (result + buffer_value).ToString();               //입력값은 임시저장 값과 result변수값을 연산자에 맞춰 값을 스트링 형식으로저장
                label_formula.Text = (result + "+" + buffer_value + "=").ToString(); //식값은 result값 + buffer값을 스트링형식으로 저장
            }

            //연산자가 빼기 일 때
            else if (op == "-")
            {
                label_value.Text = (result - buffer_value).ToString();
                label_formula.Text = (result + "-" + buffer_value + "=").ToString();
            }

            //연산자가 곱하기 일 때
            else if (op == "*")
            {
                label_value.Text = (result * buffer_value).ToString();
                label_formula.Text = (result + "*" + buffer_value + "=").ToString();
            }

            //연산자가 나누기 일 때
            else if (op == "/")
            {
                label_value.Text = (result / buffer_value).ToString();
                label_formula.Text = (result + "*" + buffer_value + "=").ToString();
            }

            //연산자가 x^y 일 때
            else if (op == "x^y")
            {
                label_value.Text = (Math.Pow(buffer_value, result)).ToString();      //입력값은 임시저장값과 result값의 제곱을 구하고 스트링형식으로 저장
                label_formula.Text = (buffer_value + "^" + result + "=").ToString(); //식값은 임시저장값 + 연산자 + result값을 스트링형식으로 저장
            }

            //연산자가 exp 일 때
            else if (op == "exp")
            {
                label_value.Text = (buffer_value * Math.Pow(10,result)).ToString();    //입력값은 임시저장값과 10의 제곱 result값을 곱한걸 스트링형식으로 저장
                label_formula.Text = (buffer_value + ".e+" + result + "=").ToString(); //식값은 임시저장값 + 연산자 + result값을 스트링형식으로 저장
            }

            //연산자가 mod 일 때
            else if (op == "mod")
            {
                label_value.Text = (buffer_value % result).ToString();    //입력값은 임시저장값과 10의 제곱 result값을 곱한걸 스트링형식으로 저장
                label_formula.Text = (buffer_value + "mod" + result + "=").ToString(); //식값은 임시저장값 + 연산자 + result값을 스트링형식으로 저장
            }

            //연산자외에 단항자 계산일때
            else
            {
                label_value.Text = result.ToString();
                label_formula.Text = (result + "=");
            }


            operator_check = false; //계산이 끝났으므로 연산자 사용 X
            Record();               //식값, 입력값 기록
        }


        //단항연산기능----------------------------------------------------------------------------------------------------------------------
        //(10^x)버튼 클릭 시 이벤트
        private void Button_10powx_Click(object sender, EventArgs e)
        {
            label_formula.Text = ("10 ^" + "(" + label_value.Text + ")");               //식값에 10^(입력값) 저장
            label_value.Text = Math.Pow(10, double.Parse(label_value.Text)).ToString(); //입력값에 Math클래스의 Pow메서드(제곱) 계산값 저장
        }

        //(log)버튼 클릭 시 이벤트
        private void Button_log_Click(object sender, EventArgs e)
        {
            label_formula.Text = ("log" + "(" + label_value.Text + ")");              //식값에 log^(입력값) 저장
            label_value.Text = Math.Log10(double.Parse(label_value.Text)).ToString(); //입력값에 Math클래스의 Log10메서드 계산값 저장
        }

        //(ln)버튼 클릭 시 이벤트
        private void Button_ln_Click(object sender, EventArgs e)
        {
            label_formula.Text = ("ln" + "(" + label_value.Text + ")");             //식값에 ln^(입력값) 저장
            label_value.Text = Math.Log(double.Parse(label_value.Text)).ToString(); //입력값에 Math클래스의 Log메서드(ln) 계산값 저장
        }

        //(|x|)버튼 클릭 시 이벤트
        private void Button_abs_Click(object sender, EventArgs e)
        {
            label_formula.Text = ("Abs" + "(" + label_value.Text + ")");            //식값에 Abs(입력값) 저장
            label_value.Text = Math.Abs(double.Parse(label_value.Text)).ToString(); //입력값에 Math클래스의 Abs메서드(절대값) 계산값 저장
        }

        //(n!)버튼 클릭 시 이벤트
        private void Button_factorial_Click(object sender, EventArgs e)
        {
            label_formula.Text = ("fact" + "(" + label_value.Text + ")"); //식값에 fact(입력값) 저장

            //팩토리얼 알고리즘 구현
            double i = 0, result = 1;
            double n = double.Parse(label_value.Text);
            for (i = 1; i <= n; i++) result *= i;

            label_value.Text = result.ToString(); //팩토리얼 알고리즘 값인 result값을 입력값에 저장               
        }

        //(x^1/2)버튼 클릭 시 이벤트
        private void Button_sqrt_Click(object sender, EventArgs e)
        {
            label_formula.Text = "√(" + label_value.Text + ")";                     //식값에 √(입력값) 저장
            label_value.Text = Math.Sqrt(double.Parse(label_value.Text)).ToString(); //입력값에 Math클래스의 Sqrt(루트) 계산값 저장
        }

        //(x^2)버튼 클릭 시 이벤트
        private void Button_sqr_Click(object sender, EventArgs e)
        {
            label_formula.Text = "sqr(" + label_value.Text + ")";                                            //식갑에 sqr(입력값) 저장
            label_value.Text = (double.Parse(label_value.Text) * double.Parse(label_value.Text)).ToString(); //입력값에 제곱한 계산값 저장                                                                                   //식값, 입력값 기록
        }

        //(1/x)버튼 클릭 시 이벤트 
        private void Button_inverse_Click(object sender, EventArgs e)
        {
            label_formula.Text = " 1/ (" + label_value.Text + ") ";                 //식값에 1/(입력값) 저장
            label_value.Text = (1 / double.Parse(label_value.Text)).ToString();     //입력값에 역수를 취하고 계산값 저장

        }


        //지우기기능------------------------------------------------------------------------------------------------------------------------
        //(CE)버튼 클릭 시 이벤트
        private void Button_clearentry_Click(object sender, EventArgs e)
        {
            label_value.Text = "0"; //입력값을 0으로 바꿈
        }

        //(C)버튼 클릭 시 이벤트
        private void Button_clear_Click(object sender, EventArgs e)
        {
            //변수들 초기설정값으로 변경, 입력하고 있는 값과 저장된 수식 값을 0으로 초기화
            label_value.Text = "0";
            label_formula.Text = "";
            buffer_value = 0;
            op = "";
            operand_check = false;
            operator_check = false;
        }

        //(DEL)버튼 클릭 시 이벤트
        private void Button_del_Click(object sender, EventArgs e)
        {
            label_value.Text = label_value.Text.Remove(label_value.Text.Length - 1); //현재 값의 맨 뒤 한 글자를 지움

            //현재 값의 길이가 0 즉, 값이 존재하지 않으면 0으로 변환
            if (label_value.Text.Length == 0)
            {
                label_value.Text = "0"; //입력값 0으로변경
            }
        }


        //메모리기능------------------------------------------------------------------------------------------------------------------------
        //(MS)버튼 클릭 시 이벤트
        private void Button_memorysave_Click(object sender, EventArgs e)
        {
            buffer_memory = double.Parse(label_value.Text);   //메모리임시저장값에 현재 입력값 저장
            textbox_memory.Text = (buffer_memory.ToString()); //텍스트박스에 메모리임시저장값 출력
            button_memoryclear.Enabled = true;                //MC 버튼 활성화
            button_memoryrecall.Enabled = true;               //MR 버튼 활성화
            button_memorysave.Enabled = false;                //윈도우계산기에서는 메모리 저장하고 다시 저장할 수 있지만 UI적 구현이 어려워서 다시 받지 않음
            using_memory_check = true;                        //메모리 사용 0
        }

        //(MR)버튼 클릭 시 이벤트
        private void Button_memoryrecall_Click(object sender, EventArgs e)
        {
            label_value.Text = buffer_memory.ToString(); //메모리 임시저장값 현재값에 불러옴
            using_memory_check = true;                   //메모리 사용O
        }

        //(MC)버튼 클릭 시 이벤트
        private void Button_memoryclear_Click(object sender, EventArgs e)
        {
            textbox_memory.Clear();              //텍스트박스에 있는값 삭제
            buffer_memory = 0;                   //메모리 임시저장값 초기화
            button_memoryclear.Enabled = false;  //MC버튼 비활성화
            button_memoryrecall.Enabled = false; //MR버튼 비활성화
            button_memorysave.Enabled = true;    //MS버튼 활성화
        }

        //(M)버튼 클릭 시 이벤트
        private void Button_memorylist_Click(object sender, EventArgs e)
        {
            tab.SelectedTab = tab.TabPages[1]; //탭인덱스에따라서 탭이동
        }

        //(M+)버튼 클릭 시 이벤트
        private void Button_memoryadd_Click(object sender, EventArgs e)
        {
            buffer_memory += double.Parse(label_value.Text); //메모리 임시저장값에 현재 입력값 더함
            textbox_memory.Text = buffer_memory.ToString();  //메모리값 출력
        }

        //(M-)버튼 클릭 시 이벤트
        private void Button_memorysubtract_Click(object sender, EventArgs e)
        {
            buffer_memory -= double.Parse(label_value.Text); //메모리 임시저장값에 현재 입력값 뺌
            textbox_memory.Text = buffer_memory.ToString();  //메모리값 출력
        }
    }


}