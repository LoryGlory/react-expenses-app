// Expenses List component, display expense items from Expense Item component
import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {

  // fallback if no expenses are found in expense array
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>
  }

  return (
      // map expense item array
      <ul className="expenses-list">
        {props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}
      </ul>
  );
}

export default ExpensesList;