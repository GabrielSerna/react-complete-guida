import Card from '../UI/Card.jsx';
import ExpenseItem from './ExpenseItem.jsx';
import ExpensesFilter from './ExpensesFilter.jsx';
import './Expenses.css';

const Expenses = (props) => {

  const filterChangeHandler = (y) => {
    console.log(`Expenses.js - ${y}`);
  };

  return (
    <div>
      <Card className='expenses'>
      <ExpensesFilter onChangeFilterHandler={filterChangeHandler} />
        { props.data.map( (el, idx) => (
          <ExpenseItem
          key={idx}
          title={el.title}
          amount={el.amount}
          date={el.date}
          />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;