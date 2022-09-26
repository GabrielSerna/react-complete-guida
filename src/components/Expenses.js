import Card from './Card.js';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {

  return (
    <Card className='expenses'>

      { props.data.map( (el, idx) => (
          <ExpenseItem
            key={idx}
            title={el.title}
            amount={el.amount}
            date={el.date}
          />
      ))}
    </Card>
  );
};

export default Expenses;