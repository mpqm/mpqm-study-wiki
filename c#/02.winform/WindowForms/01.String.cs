using WindowForms.Helpers;
using static System.ComponentModel.Design.ObjectSelectorEditor;

namespace WindowForms
{
    public partial class String01 : Form
    {
        public String01()
        {
            InitializeComponent();
        }

        private void Form_Load(object sender, EventArgs e)
        {
            cbb.SelectedIndexChanged -= cbb_SelectedIndexChanged;
            FormHelper.SetupFormComboBox(cbb, 0); // 시작 시 1번 항목 선택
            cbb.SelectedIndexChanged += cbb_SelectedIndexChanged;
        }

        private void btnRun_Click(object sender, EventArgs e)
        {
            string strText = sampleText.Text;
            lblContain.Text = strText.Contains("Text").ToString();
            lblEquals.Text = strText.Equals("Sample Text").ToString();
            lblLength.Text = strText.Length.ToString();
            lblReplace.Text = strText.Replace("Text", "Test").ToString();
            lblSplit.Text = strText.Split(',')[0].ToString();
            lblSubstring.Text = strText.Substring(2, 4).ToString();
            lblToLower.Text = strText.ToLower().ToString();
            lblToUpper.Text = strText.ToUpper().ToString();
            lblTrim.Text = strText.Trim().ToString();
        }

        private void cbb_SelectedIndexChanged(object sender, EventArgs e)
        {
            var selectedItem = cbb.SelectedItem?.ToString();
            if (!string.IsNullOrEmpty(selectedItem))
            {
                FormHelper.NavigateToForm(selectedItem, this);
            }
        }
    }
}
