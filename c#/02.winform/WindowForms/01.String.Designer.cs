namespace WindowForms;

partial class String01
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
        label2 = new Label();
        label3 = new Label();
        label4 = new Label();
        label5 = new Label();
        label6 = new Label();
        sampleText = new Label();
        lblEquals = new Label();
        lblLength = new Label();
        lblReplace = new Label();
        lblSplit = new Label();
        lblSubstring = new Label();
        lblToLower = new Label();
        lblToUpper = new Label();
        lblTrim = new Label();
        btnRun = new Button();
        label24 = new Label();
        label23 = new Label();
        label22 = new Label();
        label21 = new Label();
        lblContain = new Label();
        SuspendLayout();
        // 
        // cbb
        // 
        cbb.FormattingEnabled = true;
        cbb.Location = new Point(1064, 12);
        cbb.Name = "cbb";
        cbb.Size = new Size(182, 33);
        cbb.TabIndex = 33;
        cbb.SelectedIndexChanged += cbb_SelectedIndexChanged;
        // 
        // label2
        // 
        label2.AutoSize = true;
        label2.Location = new Point(29, 163);
        label2.Name = "label2";
        label2.Size = new Size(73, 25);
        label2.TabIndex = 2;
        label2.Text = "Contain";
        // 
        // label3
        // 
        label3.AutoSize = true;
        label3.Location = new Point(29, 235);
        label3.Name = "label3";
        label3.Size = new Size(63, 25);
        label3.TabIndex = 3;
        label3.Text = "Equals";
        // 
        // label4
        // 
        label4.AutoSize = true;
        label4.Location = new Point(29, 310);
        label4.Name = "label4";
        label4.Size = new Size(68, 25);
        label4.TabIndex = 4;
        label4.Text = "Length";
        // 
        // label5
        // 
        label5.AutoSize = true;
        label5.Location = new Point(29, 383);
        label5.Name = "label5";
        label5.Size = new Size(76, 25);
        label5.TabIndex = 5;
        label5.Text = "Replace";
        // 
        // label6
        // 
        label6.AutoSize = true;
        label6.Location = new Point(29, 464);
        label6.Name = "label6";
        label6.Size = new Size(47, 25);
        label6.TabIndex = 6;
        label6.Text = "Split";
        // 
        // sampleText
        // 
        sampleText.AutoSize = true;
        sampleText.Font = new Font("맑은 고딕", 15F, FontStyle.Regular, GraphicsUnit.Point);
        sampleText.Location = new Point(29, 93);
        sampleText.Name = "sampleText";
        sampleText.Size = new Size(242, 41);
        sampleText.TabIndex = 31;
        sampleText.Text = "Sample,Test,Text";
        // 
        // lblEquals
        // 
        lblEquals.AutoSize = true;
        lblEquals.Location = new Point(155, 235);
        lblEquals.Name = "lblEquals";
        lblEquals.Size = new Size(19, 25);
        lblEquals.TabIndex = 12;
        lblEquals.Text = "-";
        // 
        // lblLength
        // 
        lblLength.AutoSize = true;
        lblLength.Location = new Point(155, 310);
        lblLength.Name = "lblLength";
        lblLength.Size = new Size(19, 25);
        lblLength.TabIndex = 13;
        lblLength.Text = "-";
        // 
        // lblReplace
        // 
        lblReplace.AutoSize = true;
        lblReplace.Location = new Point(155, 383);
        lblReplace.Name = "lblReplace";
        lblReplace.Size = new Size(19, 25);
        lblReplace.TabIndex = 14;
        lblReplace.Text = "-";
        // 
        // lblSplit
        // 
        lblSplit.AutoSize = true;
        lblSplit.Location = new Point(155, 464);
        lblSplit.Name = "lblSplit";
        lblSplit.Size = new Size(19, 25);
        lblSplit.TabIndex = 15;
        lblSplit.Text = "-";
        // 
        // lblSubstring
        // 
        lblSubstring.AutoSize = true;
        lblSubstring.Location = new Point(495, 163);
        lblSubstring.Name = "lblSubstring";
        lblSubstring.Size = new Size(19, 25);
        lblSubstring.TabIndex = 16;
        lblSubstring.Text = "-";
        // 
        // lblToLower
        // 
        lblToLower.AutoSize = true;
        lblToLower.Location = new Point(495, 235);
        lblToLower.Name = "lblToLower";
        lblToLower.Size = new Size(19, 25);
        lblToLower.TabIndex = 17;
        lblToLower.Text = "-";
        // 
        // lblToUpper
        // 
        lblToUpper.AutoSize = true;
        lblToUpper.Location = new Point(495, 310);
        lblToUpper.Name = "lblToUpper";
        lblToUpper.Size = new Size(19, 25);
        lblToUpper.TabIndex = 18;
        lblToUpper.Text = "-";
        // 
        // lblTrim
        // 
        lblTrim.AutoSize = true;
        lblTrim.Location = new Point(495, 383);
        lblTrim.Name = "lblTrim";
        lblTrim.Size = new Size(19, 25);
        lblTrim.TabIndex = 19;
        lblTrim.Text = "-";
        // 
        // btnRun
        // 
        btnRun.Location = new Point(562, 93);
        btnRun.Name = "btnRun";
        btnRun.Size = new Size(110, 57);
        btnRun.TabIndex = 0;
        btnRun.Text = "RUN";
        btnRun.Click += btnRun_Click;
        // 
        // label24
        // 
        label24.AutoSize = true;
        label24.Location = new Point(340, 163);
        label24.Name = "label24";
        label24.Size = new Size(88, 25);
        label24.TabIndex = 25;
        label24.Text = "Substring";
        // 
        // label23
        // 
        label23.AutoSize = true;
        label23.Location = new Point(340, 235);
        label23.Name = "label23";
        label23.Size = new Size(82, 25);
        label23.TabIndex = 26;
        label23.Text = "ToLower";
        // 
        // label22
        // 
        label22.AutoSize = true;
        label22.Location = new Point(338, 310);
        label22.Name = "label22";
        label22.Size = new Size(84, 25);
        label22.TabIndex = 27;
        label22.Text = "ToUpper";
        // 
        // label21
        // 
        label21.AutoSize = true;
        label21.Location = new Point(340, 383);
        label21.Name = "label21";
        label21.Size = new Size(48, 25);
        label21.TabIndex = 28;
        label21.Text = "Trim";
        // 
        // lblContain
        // 
        lblContain.AutoSize = true;
        lblContain.Location = new Point(155, 163);
        lblContain.Name = "lblContain";
        lblContain.Size = new Size(19, 25);
        lblContain.TabIndex = 30;
        lblContain.Text = "-";
        // 
        // String01
        // 
        AutoScaleDimensions = new SizeF(10F, 25F);
        AutoScaleMode = AutoScaleMode.Font;
        ClientSize = new Size(1258, 968);
        Controls.Add(cbb);
        Controls.Add(sampleText);
        Controls.Add(lblContain);
        Controls.Add(label21);
        Controls.Add(label22);
        Controls.Add(label23);
        Controls.Add(label24);
        Controls.Add(btnRun);
        Controls.Add(lblTrim);
        Controls.Add(lblToUpper);
        Controls.Add(lblToLower);
        Controls.Add(lblSubstring);
        Controls.Add(lblSplit);
        Controls.Add(lblReplace);
        Controls.Add(lblLength);
        Controls.Add(lblEquals);
        Controls.Add(label6);
        Controls.Add(label5);
        Controls.Add(label4);
        Controls.Add(label3);
        Controls.Add(label2);
        Name = "String01";
        Text = "String01";
        Load += Form_Load;
        ResumeLayout(false);
        PerformLayout();
    }

    #endregion
    private ComboBox cbb;
    private Label label1;
    private Label label2;
    private Label label3;
    private Label label4;
    private Label label5;
    private Label label6;
    private Label sampleText;
    private Label lblEquals;
    private Label lblLength;
    private Label lblReplace;
    private Label lblSplit;
    private Label lblSubstring;
    private Label lblToLower;
    private Label lblToUpper;
    private Label lblTrim;
    private Button btnRun;
    private Label label24;
    private Label label23;
    private Label label22;
    private Label label21;
    private Label lblContain;
}
