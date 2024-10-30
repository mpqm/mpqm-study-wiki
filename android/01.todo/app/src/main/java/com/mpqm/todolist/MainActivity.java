package com.mpqm.todolist;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import androidx.recyclerview.widget.RecyclerView;
import android.app.Dialog;
import android.view.View;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.TimePicker;
import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    private DBHelper mDBHelper;
    private CustomAdapter mAdapter;
    private ArrayList<TodoItem> mTodoItems;
    private RecyclerView rv_todolist;
    private Button btn_add;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //.
        mDBHelper = new DBHelper(this);
        mTodoItems = new ArrayList<>();
        rv_todolist = findViewById(R.id.rv_todolist);
        btn_add = findViewById(R.id.btn_add);

        //load recent DB
        mTodoItems = mDBHelper.getTodoList();
        if (mAdapter == null) {
            mAdapter = new CustomAdapter(mTodoItems, this);
            rv_todolist.setHasFixedSize(true);
            rv_todolist.setAdapter(mAdapter);
        }

        //click add
        btn_add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                //popup dialog
                Dialog dialog = new Dialog(MainActivity.this, android.R.style.Theme_Material_Light_Dialog_MinWidth);
                dialog.setContentView(R.layout.dialog_edit);

                //.
                DatePicker datePicker = dialog.findViewById(R.id.dp_date);
                TimePicker timePicker = dialog.findViewById(R.id.tp_time);
                EditText et_date = dialog.findViewById(R.id.et_date);
                EditText et_time = dialog.findViewById(R.id.et_time);
                EditText et_title = dialog.findViewById(R.id.et_title);
                EditText et_content = dialog.findViewById(R.id.et_content);
                Button btn_submit = dialog.findViewById(R.id.btn_submit);

                //choose date
                datePicker.setOnDateChangedListener(new DatePicker.OnDateChangedListener() {
                    @Override
                    public void onDateChanged(DatePicker view, int year, int monthOfYear, int dayOfMonth) {
                        String mydate = year + "/" + (monthOfYear + 1) + "/" + dayOfMonth;
                        et_date.setText(mydate);
                    }
                });

                //choose time
                timePicker.setOnTimeChangedListener(new TimePicker.OnTimeChangedListener() {
                    @Override
                    public void onTimeChanged(TimePicker view, int hourOfDay, int minute) {
                        String mytime = hourOfDay + ":" + minute;
                        et_time.setText(mytime);
                    }
                });

                //submit todoitem
                btn_submit.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        String result = et_date.getText().toString() + " " + et_time.getText().toString();
                        mDBHelper.InsertTodo(et_title.getText().toString(), et_content.getText().toString(), result);
                        TodoItem item = new TodoItem();
                        item.setTitle(et_title.getText().toString());
                        item.setContent(et_content.getText().toString());
                        item.setWriteDate(result);
                        mAdapter.addItem(item);
                        rv_todolist.smoothScrollToPosition(0);
                        dialog.dismiss();
                    }
                });
                dialog.show();
            }
        });
    }
}
