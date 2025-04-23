namespace winform
{
    partial class Operator
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
            tboxResultAfter = new TextBox();
            tboxResultBit = new TextBox();
            tboxNumber = new TextBox();
            button1 = new Button();
            button2 = new Button();
            button3 = new Button();
            button4 = new Button();
            button5 = new Button();
            button6 = new Button();
            button7 = new Button();
            button8 = new Button();
            tboxAndOr = new TextBox();
            cbb = new ComboBox();
            SuspendLayout();
            // 
            // tboxResult
            // 
            tboxResult.Location = new Point(464, 295);
            tboxResult.Margin = new Padding(4, 6, 4, 6);
            tboxResult.Name = "tboxResult";
            tboxResult.Size = new Size(141, 31);
            tboxResult.TabIndex = 0;
            tboxResult.Text = "0";
            tboxResult.TextAlign = HorizontalAlignment.Right;
            tboxResult.TextChanged += tboxResult_TextChanged;
            // 
            // tboxResultAfter
            // 
            tboxResultAfter.Location = new Point(616, 295);
            tboxResultAfter.Margin = new Padding(4, 6, 4, 6);
            tboxResultAfter.Name = "tboxResultAfter";
            tboxResultAfter.Size = new Size(141, 31);
            tboxResultAfter.TabIndex = 1;
            tboxResultAfter.Text = "0";
            tboxResultAfter.TextAlign = HorizontalAlignment.Right;
            // 
            // tboxResultBit
            // 
            tboxResultBit.Enabled = false;
            tboxResultBit.Location = new Point(464, 351);
            tboxResultBit.Margin = new Padding(4, 6, 4, 6);
            tboxResultBit.Name = "tboxResultBit";
            tboxResultBit.Size = new Size(141, 31);
            tboxResultBit.TabIndex = 2;
            tboxResultBit.Text = "0";
            tboxResultBit.TextAlign = HorizontalAlignment.Right;
            // 
            // tboxNumber
            // 
            tboxNumber.Location = new Point(464, 443);
            tboxNumber.Margin = new Padding(4, 6, 4, 6);
            tboxNumber.Name = "tboxNumber";
            tboxNumber.Size = new Size(141, 31);
            tboxNumber.TabIndex = 3;
            tboxNumber.Text = "0";
            tboxNumber.TextAlign = HorizontalAlignment.Right;
            // 
            // button1
            // 
            button1.Location = new Point(464, 499);
            button1.Margin = new Padding(4, 6, 4, 6);
            button1.Name = "button1";
            button1.Size = new Size(69, 100);
            button1.TabIndex = 4;
            button1.Text = "<<";
            button1.UseVisualStyleBackColor = true;
            button1.Click += button1_Click;
            // 
            // button2
            // 
            button2.Location = new Point(538, 499);
            button2.Margin = new Padding(4, 6, 4, 6);
            button2.Name = "button2";
            button2.Size = new Size(69, 100);
            button2.TabIndex = 5;
            button2.Text = ">>";
            button2.UseVisualStyleBackColor = true;
            button2.Click += button2_Click;
            // 
            // button3
            // 
            button3.Location = new Point(690, 499);
            button3.Margin = new Padding(4, 6, 4, 6);
            button3.Name = "button3";
            button3.Size = new Size(69, 100);
            button3.TabIndex = 7;
            button3.Text = "-=";
            button3.UseVisualStyleBackColor = true;
            button3.Click += button3_Click;
            // 
            // button4
            // 
            button4.Location = new Point(616, 499);
            button4.Margin = new Padding(4, 6, 4, 6);
            button4.Name = "button4";
            button4.Size = new Size(69, 100);
            button4.TabIndex = 6;
            button4.Text = "+=";
            button4.UseVisualStyleBackColor = true;
            button4.Click += button4_Click;
            // 
            // button5
            // 
            button5.Location = new Point(690, 612);
            button5.Margin = new Padding(4, 6, 4, 6);
            button5.Name = "button5";
            button5.Size = new Size(69, 100);
            button5.TabIndex = 11;
            button5.Text = "||";
            button5.UseVisualStyleBackColor = true;
            button5.Click += button5_Click;
            // 
            // button6
            // 
            button6.Location = new Point(616, 612);
            button6.Margin = new Padding(4, 6, 4, 6);
            button6.Name = "button6";
            button6.Size = new Size(69, 100);
            button6.TabIndex = 10;
            button6.Text = "&&";
            button6.UseVisualStyleBackColor = true;
            button6.Click += button6_Click;
            // 
            // button7
            // 
            button7.Location = new Point(538, 612);
            button7.Margin = new Padding(4, 6, 4, 6);
            button7.Name = "button7";
            button7.Size = new Size(69, 100);
            button7.TabIndex = 9;
            button7.Text = "a++";
            button7.UseVisualStyleBackColor = true;
            button7.Click += button7_Click;
            // 
            // button8
            // 
            button8.Location = new Point(464, 612);
            button8.Margin = new Padding(4, 6, 4, 6);
            button8.Name = "button8";
            button8.Size = new Size(69, 100);
            button8.TabIndex = 8;
            button8.Text = "++a";
            button8.UseVisualStyleBackColor = true;
            button8.Click += button8_Click;
            // 
            // tboxAndOr
            // 
            tboxAndOr.Enabled = false;
            tboxAndOr.Location = new Point(618, 443);
            tboxAndOr.Margin = new Padding(4, 6, 4, 6);
            tboxAndOr.Name = "tboxAndOr";
            tboxAndOr.Size = new Size(141, 31);
            tboxAndOr.TabIndex = 12;
            tboxAndOr.TextAlign = HorizontalAlignment.Center;
            // 
            // cbb
            // 
            cbb.FormattingEnabled = true;
            cbb.Location = new Point(1064, 12);
            cbb.Name = "cbb";
            cbb.Size = new Size(182, 33);
            cbb.TabIndex = 36;
            // 
            // Operator
            // 
            AutoScaleDimensions = new SizeF(10F, 25F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1258, 968);
            Controls.Add(cbb);
            Controls.Add(tboxAndOr);
            Controls.Add(button5);
            Controls.Add(button6);
            Controls.Add(button7);
            Controls.Add(button8);
            Controls.Add(button3);
            Controls.Add(button4);
            Controls.Add(button2);
            Controls.Add(button1);
            Controls.Add(tboxNumber);
            Controls.Add(tboxResultBit);
            Controls.Add(tboxResultAfter);
            Controls.Add(tboxResult);
            Margin = new Padding(4, 6, 4, 6);
            Name = "Operator";
            Text = "Operator";
            ResumeLayout(false);
            PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox tboxResult;
        private System.Windows.Forms.TextBox tboxResultAfter;
        private System.Windows.Forms.TextBox tboxResultBit;
        private System.Windows.Forms.TextBox tboxNumber;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.Button button3;
        private System.Windows.Forms.Button button4;
        private System.Windows.Forms.Button button5;
        private System.Windows.Forms.Button button6;
        private System.Windows.Forms.Button button7;
        private System.Windows.Forms.Button button8;
        private System.Windows.Forms.TextBox tboxAndOr;
        private ComboBox cbb;
    }
}

