// form for adding new expenses
import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // useState hooks for each input field with empty default value
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // individual input field handlers to change the set-states
  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
  };

  // add new data to expenseData array on form submit
  const submitHandler = event => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };

    // add new expenseData to prop in New Expense component, reset input fields
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
                type="number"
                value={enteredAmount}
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
                type="date"
                value={enteredDate}
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
  );
};

export default ExpenseForm;