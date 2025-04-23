namespace winform
{
    partial class DataTypeAndOverflow02
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            cbb = new ComboBox();
            tboxNumber = new TextBox();
            label1 = new Label();
            label2 = new Label();
            label3 = new Label();
            label4 = new Label();
            lblException = new Label();
            lblDouble = new Label();
            lblInt = new Label();
            lblShort = new Label();
            btnInt = new Button();
            btnShort = new Button();
            btnDouble = new Button();
            btnAuto = new Button();
            label9 = new Label();
            SuspendLayout();
            // 
            // cbb
            // 
            cbb.FormattingEnabled = true;
            cbb.Location = new Point(1064, 12);
            cbb.Name = "cbb";
            cbb.Size = new Size(182, 33);
            cbb.TabIndex = 34;
            cbb.SelectedIndexChanged += cbb_SelectedIndexChanged;
            // 
            // tboxNumber
            // 
            tboxNumber.Location = new Point(31, 94);
            tboxNumber.Name = "tboxNumber";
            tboxNumber.Size = new Size(407, 31);
            tboxNumber.TabIndex = 35;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(31, 196);
            label1.Name = "label1";
            label1.Size = new Size(0, 25);
            label1.TabIndex = 36;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(31, 270);
            label2.Name = "label2";
            label2.Size = new Size(32, 25);
            label2.TabIndex = 37;
            label2.Text = "int";
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Location = new Point(31, 349);
            label3.Name = "label3";
            label3.Size = new Size(71, 25);
            label3.TabIndex = 38;
            label3.Text = "Double";
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.Location = new Point(31, 433);
            label4.Name = "label4";
            label4.Size = new Size(90, 25);
            label4.TabIndex = 39;
            label4.Text = "Exception";
            // 
            // lblException
            // 
            lblException.AutoSize = true;
            lblException.Location = new Point(202, 433);
            lblException.Name = "lblException";
            lblException.Size = new Size(19, 25);
            lblException.TabIndex = 40;
            lblException.Text = "-";
            // 
            // lblDouble
            // 
            lblDouble.AutoSize = true;
            lblDouble.Location = new Point(202, 349);
            lblDouble.Name = "lblDouble";
            lblDouble.Size = new Size(22, 25);
            lblDouble.TabIndex = 41;
            lblDouble.Text = "0";
            // 
            // lblInt
            // 
            lblInt.AutoSize = true;
            lblInt.Location = new Point(202, 270);
            lblInt.Name = "lblInt";
            lblInt.Size = new Size(22, 25);
            lblInt.TabIndex = 42;
            lblInt.Text = "0";
            // 
            // lblShort
            // 
            lblShort.AutoSize = true;
            lblShort.Location = new Point(202, 196);
            lblShort.Name = "lblShort";
            lblShort.Size = new Size(22, 25);
            lblShort.TabIndex = 43;
            lblShort.Text = "0";
            // 
            // btnInt
            // 
            btnInt.Location = new Point(393, 263);
            btnInt.Name = "btnInt";
            btnInt.Size = new Size(126, 39);
            btnInt.TabIndex = 44;
            btnInt.Text = "int 변환";
            btnInt.UseVisualStyleBackColor = true;
            btnInt.Click += btnInt_Click;
            // 
            // btnShort
            // 
            btnShort.Location = new Point(393, 185);
            btnShort.Name = "btnShort";
            btnShort.Size = new Size(126, 36);
            btnShort.TabIndex = 45;
            btnShort.Text = "short 변환";
            btnShort.UseVisualStyleBackColor = true;
            btnShort.Click += btnShort_Click;
            // 
            // btnDouble
            // 
            btnDouble.Location = new Point(393, 349);
            btnDouble.Name = "btnDouble";
            btnDouble.Size = new Size(126, 36);
            btnDouble.TabIndex = 46;
            btnDouble.Text = "double 변환";
            btnDouble.UseVisualStyleBackColor = true;
            btnDouble.Click += btnDouble_Click;
            // 
            // btnAuto
            // 
            btnAuto.Location = new Point(479, 94);
            btnAuto.Name = "btnAuto";
            btnAuto.Size = new Size(104, 36);
            btnAuto.TabIndex = 48;
            btnAuto.Text = "자동변환";
            btnAuto.UseVisualStyleBackColor = true;
            btnAuto.Click += btnAuto_Click;
            // 
            // label9
            // 
            label9.AutoSize = true;
            label9.Location = new Point(37, 196);
            label9.Name = "label9";
            label9.Size = new Size(55, 25);
            label9.TabIndex = 49;
            label9.Text = "Short";
            // 
            // DataTypeAndOverflow02
            // 
            AutoScaleDimensions = new SizeF(10F, 25F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1258, 968);
            Controls.Add(label9);
            Controls.Add(btnAuto);
            Controls.Add(btnDouble);
            Controls.Add(btnShort);
            Controls.Add(btnInt);
            Controls.Add(lblShort);
            Controls.Add(lblInt);
            Controls.Add(lblDouble);
            Controls.Add(lblException);
            Controls.Add(label4);
            Controls.Add(label3);
            Controls.Add(label2);
            Controls.Add(label1);
            Controls.Add(tboxNumber);
            Controls.Add(cbb);
            Name = "DataTypeAndOverflow02";
            Text = "02.DataTypeAndOverflow";
            Load += Form_Load;
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private ComboBox cbb;
        private TextBox tboxNumber;
        private Label label1;
        private Label label2;
        private Label label3;
        private Label label4;
        private Label lblException;
        private Label lblDouble;
        private Label lblInt;
        private Label lblShort;
        private Button btnInt;
        private Button btnShort;
        private Button btnDouble;
        private Button btnAuto;
        private Label label9;
    }
}
