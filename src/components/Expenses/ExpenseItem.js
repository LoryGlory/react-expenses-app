// list element for each expense, using ExpenseDate and Card component and props for ExpenseForm input fields
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  return (
      <li>
        <Card className="expense-item">
          <ExpenseDate date={props.date}/>
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
          </div>
        </Card>
      </li>
  );
};

export default ExpenseItem;