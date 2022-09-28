import './ExpenseItem.css';
import Card from '../UI/Card.js'
import ExpenseDate from '../components/ExpenseDate.js';

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log(`Clicked!`);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Click Here</button>
      </div>
    </Card>
  )
};

export default ExpenseItem;