
namespace Calculator
{
    partial class form_standard
    {

        // 필수 디자이너 변수
        private System.ComponentModel.IContainer components = null;

        // 사용 중인 모든 리소스 정리
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form 디자이너에서 생성한 코드

        // 디자이너 지원에 필요한 메서드
        private void InitializeComponent()
        {
            this.label_valuetext = new System.Windows.Forms.Label();
            this.label_formulatext = new System.Windows.Forms.Label();
            this.label_value = new System.Windows.Forms.Label();
            this.label_formula = new System.Windows.Forms.Label();
            this.tab = new System.Windows.Forms.TabControl();
            this.tab_record = new System.Windows.Forms.TabPage();
            this.button_recordclear = new System.Windows.Forms.Button();
            this.richtextbox_record = new System.Windows.Forms.RichTextBox();
            this.tab_memory = new System.Windows.Forms.TabPage();
            this.textbox_memory = new System.Windows.Forms.TextBox();
            this.button_division = new System.Windows.Forms.Button();
            this.button_multiply = new System.Windows.Forms.Button();
            this.button_sqrt = new System.Windows.Forms.Button();
            this.button_subtract = new System.Windows.Forms.Button();
            this.button_clear = new System.Windows.Forms.Button();
            this.button_3 = new System.Windows.Forms.Button();
            this.button_del = new System.Windows.Forms.Button();
            this.button_dot = new System.Windows.Forms.Button();
            this.button_7 = new System.Windows.Forms.Button();
            this.button_2 = new System.Windows.Forms.Button();
            this.button_6 = new System.Windows.Forms.Button();
            this.button_0 = new System.Windows.Forms.Button();
            this.button_sqr = new System.Windows.Forms.Button();
            this.button_negate = new System.Windows.Forms.Button();
            this.button_9 = new System.Windows.Forms.Button();
            this.button_1 = new System.Windows.Forms.Button();
            this.button_5 = new System.Windows.Forms.Button();
            this.button_add = new System.Windows.Forms.Button();
            this.button_4 = new System.Windows.Forms.Button();
            this.button_equal = new System.Windows.Forms.Button();
            this.button_8 = new System.Windows.Forms.Button();
            this.button_memoryclear = new System.Windows.Forms.Button();
            this.button_inverse = new System.Windows.Forms.Button();
            this.button_memoryrecall = new System.Windows.Forms.Button();
            this.button_clearentry = new System.Windows.Forms.Button();
            this.button_memoryadd = new System.Windows.Forms.Button();
            this.button_remainder = new System.Windows.Forms.Button();
            this.button_memorysubtract = new System.Windows.Forms.Button();
            this.button_memorysave = new System.Windows.Forms.Button();
            this.button_memorylist = new System.Windows.Forms.Button();
            this.button_xpowy = new System.Windows.Forms.Button();
            this.button_10powx = new System.Windows.Forms.Button();
            this.button_log = new System.Windows.Forms.Button();
            this.button_pi = new System.Windows.Forms.Button();
            this.button_e = new System.Windows.Forms.Button();
            this.button_ln = new System.Windows.Forms.Button();
            this.button_abs = new System.Windows.Forms.Button();
            this.button_exp = new System.Windows.Forms.Button();
            this.button_mod = new System.Windows.Forms.Button();
            this.button_factorial = new System.Windows.Forms.Button();
            this.tab.SuspendLayout();
            this.tab_record.SuspendLayout();
            this.tab_memory.SuspendLayout();
            this.SuspendLayout();
            // 
            // label_valuetext
            // 
            this.label_valuetext.AutoSize = true;
            this.label_valuetext.Location = new System.Drawing.Point(14, 56);
            this.label_valuetext.Name = "label_valuetext";
            this.label_valuetext.Size = new System.Drawing.Size(29, 12);
            this.label_valuetext.TabIndex = 0;
            this.label_valuetext.Text = "입력";
            // 
            // label_formulatext
            // 
            this.label_formulatext.AutoSize = true;
            this.label_formulatext.Location = new System.Drawing.Point(14, 12);
            this.label_formulatext.Name = "label_formulatext";
            this.label_formulatext.Size = new System.Drawing.Size(29, 12);
            this.label_formulatext.TabIndex = 1;
            this.label_formulatext.Text = "수식";
            // 
            // label_value
            // 
            this.label_value.AutoSize = true;
            this.label_value.Location = new System.Drawing.Point(14, 81);
            this.label_value.Name = "label_value";
            this.label_value.Size = new System.Drawing.Size(11, 12);
            this.label_value.TabIndex = 34;
            this.label_value.Text = "0";
            // 
            // label_formula
            // 
            this.label_formula.AutoSize = true;
            this.label_formula.Location = new System.Drawing.Point(14, 33);
            this.label_formula.Name = "label_formula";
            this.label_formula.Size = new System.Drawing.Size(0, 12);
            this.label_formula.TabIndex = 35;
            // 
            // tab
            // 
            this.tab.Controls.Add(this.tab_record);
            this.tab.Controls.Add(this.tab_memory);
            this.tab.Location = new System.Drawing.Point(783, 12);
            this.tab.Name = "tab";
            this.tab.SelectedIndex = 0;
            this.tab.Size = new System.Drawing.Size(405, 583);
            this.tab.TabIndex = 36;
            // 
            // tab_record
            // 
            this.tab_record.Controls.Add(this.button_recordclear);
            this.tab_record.Controls.Add(this.richtextbox_record);
            this.tab_record.Location = new System.Drawing.Point(4, 22);
            this.tab_record.Name = "tab_record";
            this.tab_record.Padding = new System.Windows.Forms.Padding(3);
            this.tab_record.Size = new System.Drawing.Size(397, 557);
            this.tab_record.TabIndex = 0;
            this.tab_record.Text = "기록";
            this.tab_record.UseVisualStyleBackColor = true;
            // 
            // button_recordclear
            // 
            this.button_recordclear.Location = new System.Drawing.Point(164, 469);
            this.button_recordclear.Name = "button_recordclear";
            this.button_recordclear.Size = new System.Drawing.Size(75, 46);
            this.button_recordclear.TabIndex = 1;
            this.button_recordclear.Text = "clear";
            this.button_recordclear.UseVisualStyleBackColor = true;
            this.button_recordclear.Click += new System.EventHandler(this.Button_recordclear_Click);
            // 
            // richtextbox_record
            // 
            this.richtextbox_record.Location = new System.Drawing.Point(6, 6);
            this.richtextbox_record.Name = "richtextbox_record";
            this.richtextbox_record.Size = new System.Drawing.Size(385, 457);
            this.richtextbox_record.TabIndex = 0;
            this.richtextbox_record.Text = "";
            // 
            // tab_memory
            // 
            this.tab_memory.Controls.Add(this.textbox_memory);
            this.tab_memory.Location = new System.Drawing.Point(4, 22);
            this.tab_memory.Name = "tab_memory";
            this.tab_memory.Padding = new System.Windows.Forms.Padding(3);
            this.tab_memory.Size = new System.Drawing.Size(397, 557);
            this.tab_memory.TabIndex = 1;
            this.tab_memory.Text = "메모리";
            this.tab_memory.UseVisualStyleBackColor = true;
            // 
            // textbox_memory
            // 
            this.textbox_memory.Font = new System.Drawing.Font("굴림", 15.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.textbox_memory.Location = new System.Drawing.Point(6, 6);
            this.textbox_memory.Name = "textbox_memory";
            this.textbox_memory.Size = new System.Drawing.Size(383, 32);
            this.textbox_memory.TabIndex = 0;
            // 
            // button_division
            // 
            this.button_division.Location = new System.Drawing.Point(210, 162);
            this.button_division.Name = "button_division";
            this.button_division.Size = new System.Drawing.Size(60, 60);
            this.button_division.TabIndex = 14;
            this.button_division.Text = "/";
            this.button_division.UseVisualStyleBackColor = true;
            this.button_division.Click += new System.EventHandler(this.Button_operation_Click);
            // 
            // button_multiply
            // 
            this.button_multiply.Location = new System.Drawing.Point(210, 228);
            this.button_multiply.Name = "button_multiply";
            this.button_multiply.Size = new System.Drawing.Size(60, 60);
            this.button_multiply.TabIndex = 15;
            this.button_multiply.Text = "*";
            this.button_multiply.UseVisualStyleBackColor = true;
            this.button_multiply.Click += new System.EventHandler(this.Button_operation_Click);
            // 
            // button_sqrt
            // 
            this.button_sqrt.Location = new System.Drawing.Point(145, 162);
            this.button_sqrt.Name = "button_sqrt";
            this.button_sqrt.Size = new System.Drawing.Size(60, 60);
            this.button_sqrt.TabIndex = 13;
            this.button_sqrt.Text = "x^1/2";
            this.button_sqrt.UseVisualStyleBackColor = true;
            this.button_sqrt.Click += new System.EventHandler(this.Button_sqrt_Click);
            // 
            // button_subtract
            // 
            this.button_subtract.Location = new System.Drawing.Point(210, 294);
            this.button_subtract.Name = "button_subtract";
            this.button_subtract.Size = new System.Drawing.Size(60, 60);
            this.button_subtract.TabIndex = 16;
            this.button_subtract.Text = "-";
            this.button_subtract.UseVisualStyleBackColor = true;
            this.button_subtract.Click += new System.EventHandler(this.Button_operation_Click);
            // 
            // button_clear
            // 
            this.button_clear.Location = new System.Drawing.Point(145, 96);
            this.button_clear.Name = "button_clear";
            this.button_clear.Size = new System.Drawing.Size(60, 60);
            this.button_clear.TabIndex = 12;
            this.button_clear.Text = "C";
            this.button_clear.UseVisualStyleBackColor = true;
            this.button_clear.Click += new System.EventHandler(this.Button_clear_Click);
            // 
            // button_3
            // 
            this.button_3.Location = new System.Drawing.Point(145, 360);
            this.button_3.Name = "button_3";
            this.button_3.Size = new System.Drawing.Size(60, 60);
            this.button_3.TabIndex = 17;
            this.button_3.Text = "3";
            this.button_3.UseVisualStyleBackColor = true;
            this.button_3.Click += new System.EventHandler(this.Button_number_click);
            // 
            // button_del
            // 
            this.button_del.Location = new System.Drawing.Point(210, 96);
            this.button_del.Name = "button_del";
            this.button_del.Size = new System.Drawing.Size(60, 60);
            this.button_del.TabIndex = 11;
            this.button_del.Text = "DEL";
            this.button_del.UseVisualStyleBackColor = true;
            this.button_del.Click += new System.EventHandler(this.Button_del_Click);
            // 
            // button_dot
            // 
            this.button_dot.Location = new System.Drawing.Point(144, 426);
            this.button_dot.Name = "button_dot";
            this.button_dot.Size = new System.Drawing.Size(60, 60);
            this.button_dot.TabIndex = 18;
            this.button_dot.Text = ".";
            this.button_dot.UseVisualStyleBackColor = true;
            this.button_dot.Click += new System.EventHandler(this.Button_dot_Click);
            // 
            // button_7
            // 
            this.button_7.Location = new System.Drawing.Point(12, 228);
            this.button_7.Name = "button_7";
            this.button_7.Size = new System.Drawing.Size(60, 60);
            this.button_7.TabIndex = 10;
            this.button_7.Text = "7";
            this.button_7.UseVisualStyleBackColor = true;
            this.button_7.Click += new System.EventHandler(this.Button_number_click);
            // 
            // button_2
            // 
            this.button_2.Location = new System.Drawing.Point(78, 360);
            this.button_2.Name = "button_2";
            this.button_2.Size = new System.Drawing.Size(60, 60);
            this.button_2.TabIndex = 19;
            this.button_2.Text = "2";
            this.button_2.UseVisualStyleBackColor = true;
            this.button_2.Click += new System.EventHandler(this.Button_number_click);
            // 
            // button_6
            // 
            this.button_6.Location = new System.Drawing.Point(144, 294);
            this.button_6.Name = "button_6";
            this.button_6.Size = new System.Drawing.Size(60, 60);
            this.button_6.TabIndex = 9;
            this.button_6.Text = "6";
            this.button_6.UseVisualStyleBackColor = true;
            this.button_6.Click += new System.EventHandler(this.Button_number_click);
            // 
            // button_0
            // 
            this.button_0.Location = new System.Drawing.Point(78, 426);
            this.button_0.Name = "button_0";
            this.button_0.Size = new System.Drawing.Size(60, 60);
            this.button_0.TabIndex = 20;
            this.button_0.Text = "0";
            this.button_0.UseVisualStyleBackColor = true;
            this.button_0.Click += new System.EventHandler(this.Button_number_click);
            // 
            // button_sqr
            // 
            this.button_sqr.Location = new System.Drawing.Point(78, 162);
            this.button_sqr.Name = "button_sqr";
            this.button_sqr.Size = new System.Drawing.Size(60, 60);
            this.button_sqr.TabIndex = 8;
            this.button_sqr.Text = "x^2";
            this.button_sqr.UseVisualStyleBackColor = true;
            this.button_sqr.Click += new System.EventHandler(this.Button_sqr_Click);
            // 
            // button_negate
            // 
            this.button_negate.Location = new System.Drawing.Point(12, 426);
            this.button_negate.Name = "button_negate";
            this.button_negate.Size = new System.Drawing.Size(60, 60);
            this.button_negate.TabIndex = 21;
            this.button_negate.Text = "+/-";
            this.button_negate.UseVisualStyleBackColor = true;
            this.button_negate.Click += new System.EventHandler(this.Button_negate_Click);
            // 
            // button_9
            // 
            this.button_9.Location = new System.Drawing.Point(144, 228);
            this.button_9.Name = "button_9";
            this.button_9.Size = new System.Drawing.Size(60, 60);
            this.button_9.TabIndex = 7;
            this.button_9.Text = "9";
            this.button_9.UseVisualStyleBackColor = true;
            this.button_9.Click += new System.EventHandler(this.Button_number_click);
            // 
            // button_1
            // 
            this.button_1.Location = new System.Drawing.Point(12, 360);
            this.button_1.Name = "button_1";
            this.button_1.Size = new System.Drawing.Size(60, 60);
            this.button_1.TabIndex = 22;
            this.button_1.Text = "1";
            this.button_1.UseVisualStyleBackColor = true;
            this.button_1.Click += new System.EventHandler(this.Button_number_click);
            // 
            // button_5
            // 
            this.button_5.Location = new System.Drawing.Point(78, 294);
            this.button_5.Name = "button_5";
            this.button_5.Size = new System.Drawing.Size(60, 60);
            this.button_5.TabIndex = 6;
            this.button_5.Text = "5";
            this.button_5.UseVisualStyleBackColor = true;
            this.button_5.Click += new System.EventHandler(this.Button_number_click);
            // 
            // button_add
            // 
            this.button_add.Location = new System.Drawing.Point(211, 360);
            this.button_add.Name = "button_add";
            this.button_add.Size = new System.Drawing.Size(60, 60);
            this.button_add.TabIndex = 23;
            this.button_add.Text = "+";
            this.button_add.UseVisualStyleBackColor = true;
            this.button_add.Click += new System.EventHandler(this.Button_operation_Click);
            // 
            // button_4
            // 
            this.button_4.Location = new System.Drawing.Point(12, 294);
            this.button_4.Name = "button_4";
            this.button_4.Size = new System.Drawing.Size(60, 60);
            this.button_4.TabIndex = 5;
            this.button_4.Text = "4";
            this.button_4.UseVisualStyleBackColor = true;
            this.button_4.Click += new System.EventHandler(this.Button_number_click);
            // 
            // button_equal
            // 
            this.button_equal.Location = new System.Drawing.Point(210, 426);
            this.button_equal.Name = "button_equal";
            this.button_equal.Size = new System.Drawing.Size(60, 60);
            this.button_equal.TabIndex = 24;
            this.button_equal.Text = "=";
            this.button_equal.UseVisualStyleBackColor = true;
            this.button_equal.Click += new System.EventHandler(this.Button_equal_Click);
            // 
            // button_8
            // 
            this.button_8.Location = new System.Drawing.Point(78, 228);
            this.button_8.Name = "button_8";
            this.button_8.Size = new System.Drawing.Size(60, 60);
            this.button_8.TabIndex = 4;
            this.button_8.Text = "8";
            this.button_8.UseVisualStyleBackColor = true;
            this.button_8.Click += new System.EventHandler(this.Button_number_click);
            // 
            // button_memoryclear
            // 
            this.button_memoryclear.Location = new System.Drawing.Point(276, 96);
            this.button_memoryclear.Name = "button_memoryclear";
            this.button_memoryclear.Size = new System.Drawing.Size(60, 60);
            this.button_memoryclear.TabIndex = 25;
            this.button_memoryclear.Text = "MC";
            this.button_memoryclear.UseVisualStyleBackColor = true;
            this.button_memoryclear.Click += new System.EventHandler(this.Button_memoryclear_Click);
            // 
            // button_inverse
            // 
            this.button_inverse.Location = new System.Drawing.Point(12, 162);
            this.button_inverse.Name = "button_inverse";
            this.button_inverse.Size = new System.Drawing.Size(60, 60);
            this.button_inverse.TabIndex = 3;
            this.button_inverse.Text = "1/x";
            this.button_inverse.UseVisualStyleBackColor = true;
            this.button_inverse.Click += new System.EventHandler(this.Button_inverse_Click);
            // 
            // button_memoryrecall
            // 
            this.button_memoryrecall.Location = new System.Drawing.Point(276, 162);
            this.button_memoryrecall.Name = "button_memoryrecall";
            this.button_memoryrecall.Size = new System.Drawing.Size(60, 60);
            this.button_memoryrecall.TabIndex = 26;
            this.button_memoryrecall.Text = "MR";
            this.button_memoryrecall.UseVisualStyleBackColor = true;
            this.button_memoryrecall.Click += new System.EventHandler(this.Button_memoryrecall_Click);
            // 
            // button_clearentry
            // 
            this.button_clearentry.Location = new System.Drawing.Point(78, 96);
            this.button_clearentry.Name = "button_clearentry";
            this.button_clearentry.Size = new System.Drawing.Size(60, 60);
            this.button_clearentry.TabIndex = 2;
            this.button_clearentry.Text = "CE";
            this.button_clearentry.UseVisualStyleBackColor = true;
            this.button_clearentry.Click += new System.EventHandler(this.Button_clearentry_Click);
            // 
            // button_memoryadd
            // 
            this.button_memoryadd.Location = new System.Drawing.Point(276, 228);
            this.button_memoryadd.Name = "button_memoryadd";
            this.button_memoryadd.Size = new System.Drawing.Size(60, 60);
            this.button_memoryadd.TabIndex = 27;
            this.button_memoryadd.Text = "M+";
            this.button_memoryadd.UseVisualStyleBackColor = true;
            this.button_memoryadd.Click += new System.EventHandler(this.Button_memoryadd_Click);
            // 
            // button_remainder
            // 
            this.button_remainder.Location = new System.Drawing.Point(12, 96);
            this.button_remainder.Name = "button_remainder";
            this.button_remainder.Size = new System.Drawing.Size(60, 60);
            this.button_remainder.TabIndex = 0;
            this.button_remainder.Text = "%";
            this.button_remainder.UseVisualStyleBackColor = true;
            // 
            // button_memorysubtract
            // 
            this.button_memorysubtract.Location = new System.Drawing.Point(276, 294);
            this.button_memorysubtract.Name = "button_memorysubtract";
            this.button_memorysubtract.Size = new System.Drawing.Size(60, 60);
            this.button_memorysubtract.TabIndex = 28;
            this.button_memorysubtract.Text = "M-";
            this.button_memorysubtract.UseVisualStyleBackColor = true;
            this.button_memorysubtract.Click += new System.EventHandler(this.Button_memorysubtract_Click);
            // 
            // button_memorysave
            // 
            this.button_memorysave.Location = new System.Drawing.Point(276, 360);
            this.button_memorysave.Name = "button_memorysave";
            this.button_memorysave.Size = new System.Drawing.Size(60, 60);
            this.button_memorysave.TabIndex = 29;
            this.button_memorysave.Text = "MS";
            this.button_memorysave.UseVisualStyleBackColor = true;
            this.button_memorysave.Click += new System.EventHandler(this.Button_memorysave_Click);
            // 
            // button_memorylist
            // 
            this.button_memorylist.Location = new System.Drawing.Point(276, 426);
            this.button_memorylist.Name = "button_memorylist";
            this.button_memorylist.Size = new System.Drawing.Size(60, 60);
            this.button_memorylist.TabIndex = 30;
            this.button_memorylist.Text = "M";
            this.button_memorylist.UseVisualStyleBackColor = true;
            this.button_memorylist.Click += new System.EventHandler(this.Button_memorylist_Click);
            // 
            // button_xpowy
            // 
            this.button_xpowy.Location = new System.Drawing.Point(370, 96);
            this.button_xpowy.Name = "button_xpowy";
            this.button_xpowy.Size = new System.Drawing.Size(60, 60);
            this.button_xpowy.TabIndex = 37;
            this.button_xpowy.Text = "x^y";
            this.button_xpowy.UseVisualStyleBackColor = true;
            this.button_xpowy.Click += new System.EventHandler(this.Button_operation_Click);
            // 
            // button_10powx
            // 
            this.button_10powx.Location = new System.Drawing.Point(370, 162);
            this.button_10powx.Name = "button_10powx";
            this.button_10powx.Size = new System.Drawing.Size(60, 60);
            this.button_10powx.TabIndex = 37;
            this.button_10powx.Text = "10^x";
            this.button_10powx.UseVisualStyleBackColor = true;
            this.button_10powx.Click += new System.EventHandler(this.Button_10powx_Click);
            // 
            // button_log
            // 
            this.button_log.Location = new System.Drawing.Point(370, 228);
            this.button_log.Name = "button_log";
            this.button_log.Size = new System.Drawing.Size(60, 60);
            this.button_log.TabIndex = 37;
            this.button_log.Text = "log";
            this.button_log.UseVisualStyleBackColor = true;
            this.button_log.Click += new System.EventHandler(this.Button_log_Click);
            // 
            // button_pi
            // 
            this.button_pi.Location = new System.Drawing.Point(370, 360);
            this.button_pi.Name = "button_pi";
            this.button_pi.Size = new System.Drawing.Size(60, 60);
            this.button_pi.TabIndex = 37;
            this.button_pi.Text = "∏";
            this.button_pi.UseVisualStyleBackColor = true;
            this.button_pi.Click += new System.EventHandler(this.Button_pi_Click);
            // 
            // button_e
            // 
            this.button_e.Location = new System.Drawing.Point(370, 426);
            this.button_e.Name = "button_e";
            this.button_e.Size = new System.Drawing.Size(60, 60);
            this.button_e.TabIndex = 37;
            this.button_e.Text = "e";
            this.button_e.UseVisualStyleBackColor = true;
            this.button_e.Click += new System.EventHandler(this.Button_e_Click);
            // 
            // button_ln
            // 
            this.button_ln.Location = new System.Drawing.Point(370, 294);
            this.button_ln.Name = "button_ln";
            this.button_ln.Size = new System.Drawing.Size(60, 60);
            this.button_ln.TabIndex = 37;
            this.button_ln.Text = "ln";
            this.button_ln.UseVisualStyleBackColor = true;
            this.button_ln.Click += new System.EventHandler(this.Button_ln_Click);
            // 
            // button_abs
            // 
            this.button_abs.Location = new System.Drawing.Point(436, 96);
            this.button_abs.Name = "button_abs";
            this.button_abs.Size = new System.Drawing.Size(60, 60);
            this.button_abs.TabIndex = 37;
            this.button_abs.Text = "|x|";
            this.button_abs.UseVisualStyleBackColor = true;
            this.button_abs.Click += new System.EventHandler(this.Button_abs_Click);
            // 
            // button_exp
            // 
            this.button_exp.Location = new System.Drawing.Point(436, 162);
            this.button_exp.Name = "button_exp";
            this.button_exp.Size = new System.Drawing.Size(60, 60);
            this.button_exp.TabIndex = 37;
            this.button_exp.Text = "exp";
            this.button_exp.UseVisualStyleBackColor = true;
            this.button_exp.Click += new System.EventHandler(this.Button_operation_Click);
            // 
            // button_mod
            // 
            this.button_mod.Location = new System.Drawing.Point(436, 228);
            this.button_mod.Name = "button_mod";
            this.button_mod.Size = new System.Drawing.Size(60, 60);
            this.button_mod.TabIndex = 37;
            this.button_mod.Text = "mod";
            this.button_mod.UseVisualStyleBackColor = true;
            this.button_mod.Click += new System.EventHandler(this.Button_operation_Click);
            // 
            // button_factorial
            // 
            this.button_factorial.Location = new System.Drawing.Point(436, 294);
            this.button_factorial.Name = "button_factorial";
            this.button_factorial.Size = new System.Drawing.Size(60, 60);
            this.button_factorial.TabIndex = 37;
            this.button_factorial.Text = "n!";
            this.button_factorial.UseVisualStyleBackColor = true;
            this.button_factorial.Click += new System.EventHandler(this.Button_factorial_Click);
            // 
            // form_standard
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1200, 663);
            this.Controls.Add(this.button_ln);
            this.Controls.Add(this.button_factorial);
            this.Controls.Add(this.button_e);
            this.Controls.Add(this.button_pi);
            this.Controls.Add(this.button_mod);
            this.Controls.Add(this.button_log);
            this.Controls.Add(this.button_exp);
            this.Controls.Add(this.button_10powx);
            this.Controls.Add(this.button_abs);
            this.Controls.Add(this.button_xpowy);
            this.Controls.Add(this.button_memorylist);
            this.Controls.Add(this.label_formulatext);
            this.Controls.Add(this.button_memorysave);
            this.Controls.Add(this.label_valuetext);
            this.Controls.Add(this.button_memorysubtract);
            this.Controls.Add(this.button_remainder);
            this.Controls.Add(this.button_memoryadd);
            this.Controls.Add(this.tab);
            this.Controls.Add(this.button_clearentry);
            this.Controls.Add(this.label_formula);
            this.Controls.Add(this.button_memoryrecall);
            this.Controls.Add(this.label_value);
            this.Controls.Add(this.button_inverse);
            this.Controls.Add(this.button_division);
            this.Controls.Add(this.button_memoryclear);
            this.Controls.Add(this.button_multiply);
            this.Controls.Add(this.button_8);
            this.Controls.Add(this.button_sqrt);
            this.Controls.Add(this.button_equal);
            this.Controls.Add(this.button_subtract);
            this.Controls.Add(this.button_4);
            this.Controls.Add(this.button_clear);
            this.Controls.Add(this.button_add);
            this.Controls.Add(this.button_3);
            this.Controls.Add(this.button_5);
            this.Controls.Add(this.button_del);
            this.Controls.Add(this.button_1);
            this.Controls.Add(this.button_dot);
            this.Controls.Add(this.button_9);
            this.Controls.Add(this.button_7);
            this.Controls.Add(this.button_negate);
            this.Controls.Add(this.button_2);
            this.Controls.Add(this.button_sqr);
            this.Controls.Add(this.button_6);
            this.Controls.Add(this.button_0);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Name = "form_standard";
            this.ShowIcon = false;
            this.Text = "Calculator";
            this.tab.ResumeLayout(false);
            this.tab_record.ResumeLayout(false);
            this.tab_memory.ResumeLayout(false);
            this.tab_memory.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.Label label_valuetext;
        private System.Windows.Forms.Label label_formulatext;
        private System.Windows.Forms.Label label_value;
        private System.Windows.Forms.Label label_formula;
        private System.Windows.Forms.TabControl tab;
        private System.Windows.Forms.TabPage tab_record;
        private System.Windows.Forms.TabPage tab_memory;
        private System.Windows.Forms.RichTextBox richtextbox_record;
        private System.Windows.Forms.TextBox textbox_memory;
        private System.Windows.Forms.Button button_recordclear;
        private System.Windows.Forms.Button button_division;
        private System.Windows.Forms.Button button_multiply;
        private System.Windows.Forms.Button button_sqrt;
        private System.Windows.Forms.Button button_subtract;
        private System.Windows.Forms.Button button_clear;
        private System.Windows.Forms.Button button_3;
        private System.Windows.Forms.Button button_del;
        private System.Windows.Forms.Button button_dot;
        private System.Windows.Forms.Button button_7;
        private System.Windows.Forms.Button button_2;
        private System.Windows.Forms.Button button_6;
        private System.Windows.Forms.Button button_0;
        private System.Windows.Forms.Button button_sqr;
        private System.Windows.Forms.Button button_negate;
        private System.Windows.Forms.Button button_9;
        private System.Windows.Forms.Button button_1;
        private System.Windows.Forms.Button button_5;
        private System.Windows.Forms.Button button_add;
        private System.Windows.Forms.Button button_4;
        private System.Windows.Forms.Button button_equal;
        private System.Windows.Forms.Button button_8;
        private System.Windows.Forms.Button button_memoryclear;
        private System.Windows.Forms.Button button_inverse;
        private System.Windows.Forms.Button button_memoryrecall;
        private System.Windows.Forms.Button button_clearentry;
        private System.Windows.Forms.Button button_memoryadd;
        private System.Windows.Forms.Button button_remainder;
        private System.Windows.Forms.Button button_memorysubtract;
        private System.Windows.Forms.Button button_memorysave;
        private System.Windows.Forms.Button button_memorylist;
        private System.Windows.Forms.Button button_xpowy;
        private System.Windows.Forms.Button button_10powx;
        private System.Windows.Forms.Button button_log;
        private System.Windows.Forms.Button button_pi;
        private System.Windows.Forms.Button button_e;
        private System.Windows.Forms.Button button_ln;
        private System.Windows.Forms.Button button_abs;
        private System.Windows.Forms.Button button_exp;
        private System.Windows.Forms.Button button_mod;
        private System.Windows.Forms.Button button_factorial;
    }
}

