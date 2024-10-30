package com.mpqm.todolist;

import android.app.AlertDialog;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.TimePicker;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class CustomAdapter extends RecyclerView.Adapter<CustomAdapter.ViewHolder> {

    private DBHelper mDBHelper;
    private ArrayList<TodoItem> mTodoItems;
    private Context mContext;


    //adapter setup
    public CustomAdapter(ArrayList<TodoItem> mTodoItems, Context mContext) {
        this.mTodoItems = mTodoItems;
        this.mContext = mContext;
        mDBHelper = new DBHelper(mContext);
    }

    //viewholder setup1
    @NonNull
    @Override
    public CustomAdapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View holder = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_list, parent, false);
        return new ViewHolder(holder);
    }

    //viewholder setup2
    @Override
    public void onBindViewHolder(@NonNull CustomAdapter.ViewHolder holder, int position) {
        holder.tv_title.setText(mTodoItems.get(position).getTitle());
        holder.tv_content.setText(mTodoItems.get(position).getContent());
        holder.tv_writeDate.setText(mTodoItems.get(position).getWriteDate());
    }

    //count todoitem
    @Override
    public int getItemCount() {
        return mTodoItems.size();
    }

    //viewholder
    public class ViewHolder extends RecyclerView.ViewHolder {

        private TextView tv_title;
        private TextView tv_content;
        private TextView tv_writeDate;

        //itemview
        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            //.
            tv_title = itemView.findViewById(R.id.tv_title);
            tv_content = itemView.findViewById(R.id.tv_content);
            tv_writeDate = itemView.findViewById(R.id.tv_date);

            //click itemview -> popup
            itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    int curPos = getAdapterPosition();
                    TodoItem todoItem = mTodoItems.get(curPos);

                    //no items in recyclerview -> toast
                    if (getItemCount() < 1) {
                        Toast.makeText(mContext, "ERROR", Toast.LENGTH_SHORT).show();
                        return;
                    }

                    //popup
                    else {
                        //popup choice modify, delete
                        String[] strChoiceItems = {"MODIFY", "DELETE"};
                        AlertDialog.Builder builder = new AlertDialog.Builder(mContext);

                        builder.setItems(strChoiceItems, new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialogInterface, int position) {

                                //posistion 0 modify
                                if (position == 0) {

                                    //dialog
                                    Dialog dialog = new Dialog(mContext, android.R.style.Theme_Material_Light_Dialog);
                                    dialog.setContentView(R.layout.dialog_edit);

                                    //.
                                    DatePicker datePicker = dialog.findViewById(R.id.dp_date);
                                    TimePicker timePicker = dialog.findViewById(R.id.tp_time);
                                    EditText et_date = dialog.findViewById(R.id.et_date);
                                    EditText et_time = dialog.findViewById(R.id.et_time);
                                    EditText et_title = dialog.findViewById(R.id.et_title);
                                    EditText et_content = dialog.findViewById(R.id.et_content);
                                    et_title.setText(todoItem.getTitle());
                                    et_content.setText(todoItem.getContent());
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
                                            String title = et_title.getText().toString();
                                            String content = et_content.getText().toString();
                                            String beforeTime = todoItem.getWriteDate();
                                            mDBHelper.UpdateTodo(title, content, result, beforeTime);
                                            todoItem.setTitle(title);
                                            todoItem.setContent(content);
                                            todoItem.setWriteDate(result);
                                            notifyItemChanged(curPos, todoItem);
                                            dialog.dismiss();
                                        }
                                    });
                                    dialog.show();
                                }

                                //position 1 delete
                                else if (position == 1) {
                                    String beforeTime = todoItem.getWriteDate();
                                    mDBHelper.DeleteTodo(beforeTime);
                                    mTodoItems.remove(curPos);
                                    notifyItemRemoved(curPos);
                                }
                            }
                        });
                        builder.show();
                    }
                }
            });
        }
    }

    public void addItem(TodoItem _item) {
        mTodoItems.add(0, _item);
        notifyItemInserted(0);
    }
}