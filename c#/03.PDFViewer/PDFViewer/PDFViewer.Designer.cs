namespace PDFViewer
{
    partial class PDFViewer
    {
        private System.ComponentModel.IContainer components = null;
        private Microsoft.Reporting.WinForms.ReportViewer reportViewer1;
        private System.Windows.Forms.Button btnSavePdf;
        private System.Windows.Forms.Button btnPrint;

        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        private void InitializeComponent()
        {
            this.reportViewer1 = new Microsoft.Reporting.WinForms.ReportViewer();
            this.btnSavePdf = new System.Windows.Forms.Button();
            this.btnPrint = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // reportViewer1
            // 
            this.reportViewer1.Location = new System.Drawing.Point(17, 15);
            this.reportViewer1.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.reportViewer1.Name = "reportViewer1";
            this.reportViewer1.Size = new System.Drawing.Size(1200, 600);
            this.reportViewer1.TabIndex = 0;
            this.reportViewer1.Load += new System.EventHandler(this.reportViewer1_Load);
            // 
            // btnSavePdf
            // 
            this.btnSavePdf.Location = new System.Drawing.Point(192, 629);
            this.btnSavePdf.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.btnSavePdf.Name = "btnSavePdf";
            this.btnSavePdf.Size = new System.Drawing.Size(171, 36);
            this.btnSavePdf.TabIndex = 1;
            this.btnSavePdf.Text = "PDF 저장";
            this.btnSavePdf.UseVisualStyleBackColor = true;
            this.btnSavePdf.Click += new System.EventHandler(this.btnSavePdf_Click);
            // 
            // btnPrint
            // 
            this.btnPrint.Location = new System.Drawing.Point(13, 629);
            this.btnPrint.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.btnPrint.Name = "btnPrint";
            this.btnPrint.Size = new System.Drawing.Size(171, 36);
            this.btnPrint.TabIndex = 2;
            this.btnPrint.Text = "인쇄";
            this.btnPrint.UseVisualStyleBackColor = true;
            this.btnPrint.Click += new System.EventHandler(this.btnPrint_Click);
            // 
            // PDFViewer
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(10F, 18F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1249, 681);
            this.Controls.Add(this.btnPrint);
            this.Controls.Add(this.btnSavePdf);
            this.Controls.Add(this.reportViewer1);
            this.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.Name = "PDFViewer";
            this.Text = "PDF 뷰어";
            this.Load += new System.EventHandler(this.PDFViewer_Load);
            this.ResumeLayout(false);

        }

        #endregion
    }
}
