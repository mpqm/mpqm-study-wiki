using System;
using System.Collections.Generic;
using System.Windows.Forms;
using winform;

namespace WindowForms.Helpers
{
    public static class FormHelper
    {
        // 문자열 표시와 폼 타입을 매핑
        private static readonly Dictionary<string, Type> FormMap = new()
        {
            { "01.String", typeof(String01) },
            { "02.DataTypeAndOverflow", typeof(DataTypeAndOverflow02) },
            { "03.BasicStructureAndMethod", typeof(BasicStructureAndMethod) },
            { "04.Operator", typeof(Operator) }
            // 추가 폼이 있다면 여기에 추가
        };

        public static void SetupFormComboBox(ComboBox comboBox, int currentFormIndex)
        {
            if (comboBox == null) return;

            comboBox.Items.Clear();
            foreach (var item in FormMap.Keys)
            {
                comboBox.Items.Add(item);
            }

            if (currentFormIndex >= 0 && currentFormIndex < comboBox.Items.Count)
            {
                comboBox.SelectedIndex = currentFormIndex;
            }
        }

        public static void NavigateToForm(string selectedItem, Form currentForm)
        {
            if (!FormMap.TryGetValue(selectedItem, out var formType))
            {
                MessageBox.Show($"'{selectedItem}' 폼을 찾을 수 없습니다.", "오류", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            // 현재 폼과 동일하면 이동하지 않음
            if (currentForm.GetType() == formType)
                return;

            // 새 폼 생성
            Form newForm = (Form)Activator.CreateInstance(formType);

            if (newForm != null)
            {
                newForm.Show();
                currentForm.Hide();

                newForm.FormClosed += (s, args) =>
                {
                    currentForm.Show();
                    newForm.Dispose(); // 메모리 누수 방지
                };
            }
        }
    }
}
