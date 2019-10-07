import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';


export default function TimePicker(){


                const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

                function onChange(date, dateString) {
                console.log(date, dateString);
                }

return (
                <div>
                    <DatePicker onChange={onChange} />
                    <br />
                    <MonthPicker onChange={onChange} placeholder="Select month" />
                    <br />
                    <RangePicker onChange={onChange} />
                    <br />
                    <WeekPicker onChange={onChange} placeholder="Select week" />
                </div>
  
);

}