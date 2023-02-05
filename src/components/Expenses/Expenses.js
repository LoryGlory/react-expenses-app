// main Expense component, using Card, Expense Filter, Expenses Chart components to display all expense entries
import React, {useState} from "react";

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';

const Expenses = (props) => {
  // useState hook managing the year filter with default value of 2020
  const [filteredYear, setFilteredYear] = useState('2020');

  // handler to change setFilteredYear state to selected year
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  // return filtered expenses by comparing selected year with year of expense entries
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
      <div>
        <Card className="expenses">
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList items={filteredExpenses}/>
        </Card>
      </div>
  );
}

export default Expenses;