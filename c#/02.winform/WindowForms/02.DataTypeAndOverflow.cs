using WindowForms.Helpers;

namespace winform
{
    /*
        자료형     키워드     비트수    값 범위
        ────────────────────────────────────────────────────────────
        불린형     bool       1         True, False (참/거짓)

        정수형     sbyte      8         -128 ~ 127 (signed)
                  byte       8         0 ~ 255 (unsigned)
                  short      16        -32,768 ~ 32,767 (signed)
                  ushort     16        0 ~ 65,535 (unsigned)
                  int        32        -2,147,483,648 ~ 2,147,483,647 (signed)
                  uint       32        0 ~ 4,294,967,295 (unsigned)
                  long       64        -9,223,372,036,854,775,808 ~
                                       9,223,372,036,854,775,807 (signed)
                  ulong      64        0 ~ 18,446,744,073,709,551,615 (unsigned)

        실수형     float      32        ±1.5 × 10⁻⁴⁵ ~ ±3.4 × 10³⁸ (단정밀도)
                  double     64        ±5.0 × 10⁻³²⁴ ~ ±1.7 × 10³⁰⁸ (배정밀도)
                  decimal    128       ±7.9 × 10⁻²⁸ ~ ±7.9 × 10²⁸ (소수점 최대 28자리)

        문자형     char       16        0 ~ 65,535 (유니코드 문자)
     */
    public partial class DataTypeAndOverflow02 : Form
    {
        public DataTypeAndOverflow02()
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

        private void btnShort_Click(object sender, EventArgs e)
        {
            try
            {
                short sNumber = short.Parse(tboxNumber.Text);
                lblShort.Text = sNumber.ToString();
                lblException.Text = "-";
            }
            catch (Exception ex)
            {
                lblException.Text = ex.ToString();
            }

        }

        private void btnInt_Click(object sender, EventArgs e)
        {
            try
            {
                int iNumber = int.Parse(tboxNumber.Text);
                lblInt.Text = iNumber.ToString();
                lblException.Text = "-";
            }
            catch (Exception ex)
            {
                lblException.Text = ex.ToString();
            }
        }

        private void btnDouble_Click(object sender, EventArgs e)
        {
            try
            {
                double dNumber = double.Parse(tboxNumber.Text);
                lblDouble.Text = dNumber.ToString();
                lblException.Text = "-";
            }
            catch (Exception ex)
            {
                lblException.Text = ex.ToString();
            }
        }

        private void btnAuto_Click(object sender, EventArgs e)
        {
            try
            {
                short sNumber = 0;
                int iNumber = 0;
                double dNumber = 0;

                if(short.TryParse(tboxNumber.Text, out sNumber))
                {
                    lblShort.Text = sNumber.ToString();
                }
                else if (int.TryParse(tboxNumber.Text, out iNumber))
                {
                    lblInt.Text = iNumber.ToString();
                }
                else if (double.TryParse(tboxNumber.Text, out dNumber))
                {
                    lblDouble.Text = dNumber.ToString();
                } else
                {
                    lblException.Text = "변환 불가";
                }
            }
            catch (Exception ex)
            {
                lblException.Text = ex.ToString();
            }
        }
    }
}
