using System;
using System.Data;
using System.Data.SQLite;
using System.IO;
using System.Windows.Forms;
using Microsoft.Reporting.WinForms;

namespace PDFViewer
{
    public partial class PDFViewer : Form
    {
        public PDFViewer()
        {
            InitializeComponent();
        }

        private void PDFViewer_Load(object sender, EventArgs e)
        {
            LoadReport();
        }

        private void LoadReport()
        {
            try
            {
                string connStr = "Data Source=pdf.sqlite;Version=3;";
                using (SQLiteConnection conn = new SQLiteConnection(connStr))
                {
                    conn.Open();
                    // DUMMY1 로드
                    string query1 = "SELECT * FROM TB_DUMMY1";
                    SQLiteDataAdapter da1 = new SQLiteDataAdapter(query1, conn);
                    DataTable dt1 = new DataTable("TB_DUMMY1");
                    da1.Fill(dt1);

                    string query2 = "SELECT * FROM TB_DUMMY2";
                    SQLiteDataAdapter da2 = new SQLiteDataAdapter(query2, conn);
                    DataTable dt2 = new DataTable();
                    da2.Fill(dt2);

                    DataSet dataSet = new DataSet("PdfDataSet");

                    DataTable table1 = dt1.Copy();
                    table1.TableName = "TB_DUMMY1";
                    dataSet.Tables.Add(table1);

                    // TB_DUMMY2 테이블 추가
                    DataTable table2 = dt2.Copy();
                    table2.TableName = "TB_DUMMY2";
                    dataSet.Tables.Add(table2);

                    reportViewer1.Reset();
                    reportViewer1.ProcessingMode = ProcessingMode.Local;

                    // 상대 경로 사용
                    string reportPath = "PDF/PDF.rdlc";
                    reportViewer1.LocalReport.ReportPath = reportPath;
                    reportViewer1.LocalReport.DataSources.Clear();
                    reportViewer1.LocalReport.DataSources.Add(new ReportDataSource("TB_DUMMY1", dt1));
                    reportViewer1.LocalReport.DataSources.Add(new ReportDataSource("TB_DUMMY2", dt2));
                    reportViewer1.RefreshReport();
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("리포트 로딩 실패: " + ex.Message, "오류", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void btnSavePdf_Click(object sender, EventArgs e)
        {
            try
            {
                byte[] bytes = reportViewer1.LocalReport.Render(
                    "PDF", null, out string mimeType, out string encoding,
                    out string filenameExtension, out string[] streams, out Warning[] warnings);

                using (SaveFileDialog saveFileDialog = new SaveFileDialog())
                {
                    saveFileDialog.Filter = "PDF 파일 (*.pdf)|*.pdf";
                    saveFileDialog.FileName = "Report.pdf";

                    if (saveFileDialog.ShowDialog() == DialogResult.OK)
                    {
                        File.WriteAllBytes(saveFileDialog.FileName, bytes);
                        MessageBox.Show("PDF 저장 완료!");
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("PDF 저장 실패: " + ex.Message);
            }
        }

        private void btnPrint_Click(object sender, EventArgs e)
        {
            reportViewer1.PrintDialog(); // 또는 PrintReport()
        }

        private void reportViewer1_Load(object sender, EventArgs e)
        {

        }
    }
}
