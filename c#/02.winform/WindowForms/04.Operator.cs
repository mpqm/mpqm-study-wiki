using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using WindowForms.Helpers;

namespace winform
{

    /*
    연산자 유형     연산자 예시              예제 코드         설명
    ────────────────────────────────────────────────────────────────────────────
    수식 연산자     +, -, *, /, %           a = b + c        수식을 계산합니다.
    증감 연산자     ++, --                  a++              피연산자의 값을 1씩 증가 또는 감소시킵니다.
    할당 연산자     =, +=, -=, *=, /=, %=   a += b           오른쪽 값을 왼쪽 변수에 할당 또는 연산 후 할당합니다.
    논리 연산자     &&, ||, !               a && b           논리곱, 논리합, 논리부정 결과가 true/false인지 판단합니다.
    관계 연산자     <, >, ==, !=, >=, <=    a > b            두 피연산자의 관계를 비교합니다.
    비트 연산자     &, |, ^                 a ^ b            비트 단위로 AND, OR, XOR 연산을 수행합니다.
    시프트 연산자   >>, <<                  a >> 2           지정된 비트 수만큼 왼쪽 또는 오른쪽으로 시프트합니다.
     */
    public partial class Operator : Form
    {
        public Operator()
        {
            InitializeComponent();
        }

        //private void Form_Load(object sender, EventArgs e)
        //{
        //    cbb.SelectedIndexChanged -= cbb_SelectedIndexChanged;
        //    FormHelper.SetupFormComboBox(cbb, 1); // 시작 시 1번 항목 선택
        //    cbb.SelectedIndexChanged += cbb_SelectedIndexChanged;
        //}

        //private void cbb_SelectedIndexChanged(object sender, EventArgs e)
        //{
        //    var selectedItem = cbb.SelectedItem?.ToString();
        //    if (!string.IsNullOrEmpty(selectedItem))
        //    {
        //        FormHelper.NavigateToForm(selectedItem, this);
        //    }
        //}


        private void button1_Click(object sender, EventArgs e)
        {
            int iResult = 0;
            int iTemp = int.Parse(tboxResult.Text);
            int iNumber = int.Parse(tboxNumber.Text);

            iResult = iTemp << iNumber;
            
            tboxResult.Text = iResult.ToString();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            int iResult = 0;
            int iTemp = int.Parse(tboxResult.Text);
            int iNumber = int.Parse(tboxNumber.Text);

            iResult = iTemp >> iNumber;
            
            tboxResult.Text = iResult.ToString();
        }

        private void tboxResult_TextChanged(object sender, EventArgs e)
        {
            tboxResultBit.Text = Convert.ToString(int.Parse(tboxResult.Text), 2);
        }

        private void button8_Click(object sender, EventArgs e)
        {
            int iTemp = int.Parse(tboxResult.Text);

            tboxResult.Text = (++iTemp).ToString();
            tboxResultAfter.Text = iTemp.ToString();
        }

        private void button7_Click(object sender, EventArgs e)
        {
            int iTemp = int.Parse(tboxResult.Text);
            
            //iTempTest++;

            tboxResult.Text = (iTemp++).ToString();
            tboxResultAfter.Text = iTemp.ToString();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            int iTemp = int.Parse(tboxResult.Text);
            int iNumber = int.Parse(tboxNumber.Text);

            iTemp += iNumber;
            // iTemp = iTemp + iNumber;

            tboxResult.Text = iTemp.ToString();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            int iTemp = int.Parse(tboxResult.Text);
            int iNumber = int.Parse(tboxNumber.Text);

            iTemp -= iNumber;

            tboxResult.Text = iTemp.ToString();
        }

        private void button6_Click(object sender, EventArgs e)
        {
            int iTemp1 = int.Parse(tboxResult.Text);
            int iTemp2 = int.Parse(tboxResultAfter.Text);
            int iNumber = int.Parse(tboxNumber.Text);

            bool bResult = (iTemp1 > iNumber && iTemp2 > iNumber);

            tboxAndOr.Text = bResult.ToString();
        }

        private void button5_Click(object sender, EventArgs e)
        {
            int iTemp1 = int.Parse(tboxResult.Text);
            int iTemp2 = int.Parse(tboxResultAfter.Text);
            int iNumber = int.Parse(tboxNumber.Text);

            bool bResult = (iTemp1 > iNumber || iTemp2 > iNumber);

            tboxAndOr.Text = bResult.ToString();

        }
    }
}
