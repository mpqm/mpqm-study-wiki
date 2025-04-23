
namespace winform
{
    partial class BasicStructureAndMethod
    {
        /// <summary>
        /// 필수 디자이너 변수입니다.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 사용 중인 모든 리소스를 정리합니다.
        /// </summary>
        /// <param name="disposing">관리되는 리소스를 삭제해야 하면 true이고, 그렇지 않으면 false입니다.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form 디자이너에서 생성한 코드

        /// <summary>
        /// 디자이너 지원에 필요한 메서드입니다. 
        /// 이 메서드의 내용을 코드 편집기로 수정하지 마세요.
        /// </summary>
        private void InitializeComponent()
        {
            tboxResult = new TextBox();
            tboxNum1 = new TextBox();
            tboxNum2 = new TextBox();
            btnPlus = new Button();
            btnMinus = new Button();
            btnMulti = new Button();
            btnDivision = new Button();
            cbb = new ComboBox();
            SuspendLayout();
            // 
            // tboxResult
            // 
            tboxResult.Enabled = false;
            tboxResult.Location = new Point(186, 223);
            tboxResult.Margin = new Padding(4, 6, 4, 6);
            tboxResult.Name = "tboxResult";
            tboxResult.Size = new Size(298, 31);
            tboxResult.TabIndex = 0;
            tboxResult.Text = "0";
            // 
            // tboxNum1
            // 
            tboxNum1.Location = new Point(186, 279);
            tboxNum1.Margin = new Padding(4, 6, 4, 6);
            tboxNum1.Name = "tboxNum1";
            tboxNum1.Size = new Size(144, 31);
            tboxNum1.TabIndex = 1;
            tboxNum1.Text = "0";
            // 
            // tboxNum2
            // 
            tboxNum2.Location = new Point(340, 279);
            tboxNum2.Margin = new Padding(4, 6, 4, 6);
            tboxNum2.Name = "tboxNum2";
            tboxNum2.Size = new Size(144, 31);
            tboxNum2.TabIndex = 2;
            tboxNum2.Text = "0";
            // 
            // btnPlus
            // 
            btnPlus.Location = new Point(186, 356);
            btnPlus.Margin = new Padding(4, 6, 4, 6);
            btnPlus.Name = "btnPlus";
            btnPlus.Size = new Size(69, 90);
            btnPlus.TabIndex = 3;
            btnPlus.Text = "+";
            btnPlus.UseVisualStyleBackColor = true;
            btnPlus.Click += btnPlus_Click;
            // 
            // btnMinus
            // 
            btnMinus.Location = new Point(263, 356);
            btnMinus.Margin = new Padding(4, 6, 4, 6);
            btnMinus.Name = "btnMinus";
            btnMinus.Size = new Size(69, 90);
            btnMinus.TabIndex = 4;
            btnMinus.Text = "-";
            btnMinus.UseVisualStyleBackColor = true;
            btnMinus.Click += btnMinus_Click;
            // 
            // btnMulti
            // 
            btnMulti.Location = new Point(340, 356);
            btnMulti.Margin = new Padding(4, 6, 4, 6);
            btnMulti.Name = "btnMulti";
            btnMulti.Size = new Size(69, 90);
            btnMulti.TabIndex = 5;
            btnMulti.Text = "*";
            btnMulti.UseVisualStyleBackColor = true;
            btnMulti.Click += btnMulti_Click;
            // 
            // btnDivision
            // 
            btnDivision.Location = new Point(418, 356);
            btnDivision.Margin = new Padding(4, 6, 4, 6);
            btnDivision.Name = "btnDivision";
            btnDivision.Size = new Size(69, 90);
            btnDivision.TabIndex = 6;
            btnDivision.Text = "-";
            btnDivision.UseVisualStyleBackColor = true;
            btnDivision.Click += btnDivision_Click;
            // 
            // cbb
            // 
            cbb.FormattingEnabled = true;
            cbb.Location = new Point(1064, 12);
            cbb.Name = "cbb";
            cbb.Size = new Size(182, 33);
            cbb.TabIndex = 35;
            // 
            // BasicStructureAndMethod
            // 
            AutoScaleDimensions = new SizeF(10F, 25F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1258, 968);
            Controls.Add(cbb);
            Controls.Add(btnDivision);
            Controls.Add(btnMulti);
            Controls.Add(btnMinus);
            Controls.Add(btnPlus);
            Controls.Add(tboxNum2);
            Controls.Add(tboxNum1);
            Controls.Add(tboxResult);
            Margin = new Padding(4, 6, 4, 6);
            Name = "BasicStructureAndMethod";
            Text = "BasicStructureAndMethod";
            ResumeLayout(false);
            PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox tboxResult;
        private System.Windows.Forms.TextBox tboxNum1;
        private System.Windows.Forms.TextBox tboxNum2;
        private System.Windows.Forms.Button btnPlus;
        private System.Windows.Forms.Button btnMinus;
        private System.Windows.Forms.Button btnMulti;
        private System.Windows.Forms.Button btnDivision;
        private ComboBox cbb;
    }
}

