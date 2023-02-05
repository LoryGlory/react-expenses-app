// displaying dates in left square of each expense item, used in ExpenseItem component

import './ExpenseDate.css';

const ExpenseDate = (props) => {
  //date helper functions for date parts
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const year = props.date.getFullYear();

  return (
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
      </div>
  );
}

export default ExpenseDate;