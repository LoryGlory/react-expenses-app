// New Expense component, showing button to display expense form
import React, {useState} from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  // state to show/hide expense form or button to display expense form
  const [isEditing, setIsEditing] = useState(false);

  // handler to save entered expense data from expense form to existing expenseData array with spread operator, adding an ID with of a random number; hide expense form
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  // change state to true on click of add new expenses button
  const startEditingHandler = () => {
    setIsEditing(true);
  }

  // change state to false when clicking cancel button in expense form component
  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
      <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
      </div>
  );
};

export default NewExpense;