import './ExpenseItem.css';
import Card from '../UI/Card.js'
import ExpenseDate from '../components/ExpenseDate.js';

const ExpenseItem = (props) => {

  let { date, title, amount } = props;

  const clickHandler = () => {
    title=`Clicked!`;
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
        <button onClick={clickHandler}>Click Here</button>
      </div>
    </Card>
  )
};

export default ExpenseItem;