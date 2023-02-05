// filter expenses by year in dropdown menu
import './ExpenseFilter.css';

const ExpensesFilter = props => {
  // handler to change value to selected prop in onChangeFilter in Expenses component
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
      <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by year</label>
          <select value={props.selected} onChange={dropdownChangeHandler}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>
        </div>
      </div>
  );
};

export default ExpensesFilter;