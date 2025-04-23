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
    - 메소드 (Method) : 클래스 내에서 일련의 코드 블록을 실행시키는 함수
    - 메소드의 형태: 접근제어자 반환형 이름(인자 선언) { } 
     */
    public partial class BasicStructureAndMethod : Form
    {
        public BasicStructureAndMethod()
        {
            InitializeComponent();
        }

        private void Form_Load(object sender, EventArgs e)
        {
            cbb.SelectedIndexChanged -= cbb_SelectedIndexChanged;
            FormHelper.SetupFormComboBox(cbb, 1); // 시작 시 1번 항목 선택
            cbb.SelectedIndexChanged += cbb_SelectedIndexChanged;
        }

        private void cbb_SelectedIndexChanged(object sender, EventArgs e)
        {
            var selectedItem = cbb.SelectedItem?.ToString();
            if (!string.IsNullOrEmpty(selectedItem))
            {
                FormHelper.NavigateToForm(selectedItem, this);
            }
        }

        private void btnPlus_Click(object sender, EventArgs e)
        {
            tboxResult.Text = fPlus(int.Parse(tboxNum1.Text), int.Parse(tboxNum2.Text)).ToString();
        }

        private void btnMinus_Click(object sender, EventArgs e)
        {
            int iNumA = int.Parse(tboxNum1.Text);
            int iNumB = int.Parse(tboxNum2.Text);
            int iResult = iNumA - iNumB;
            tboxResult.Text = iResult.ToString();
        }

        private void btnMulti_Click(object sender, EventArgs e)
        {
            int iNumA = int.Parse(tboxNum1.Text);
            int iNumB = int.Parse(tboxNum2.Text);
            int iResult = iNumA * iNumB;
            tboxResult.Text = iResult.ToString();
        }

        private void btnDivision_Click(object sender, EventArgs e)
        {
            int iNumA = int.Parse(tboxNum1.Text);
            int iNumB = int.Parse(tboxNum2.Text);
            if (iNumB == 0)
            {
                MessageBox.Show("0으로 나눌 수 없습니다.", "오류", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            double dResult = (double)iNumA / iNumB;
            tboxResult.Text = dResult.ToString();
        }

        private int fPlus(int iA, int iB)
        {
            int iResult = 0;
            iResult = iA + iB;
            return iResult;
        }

    }
}
