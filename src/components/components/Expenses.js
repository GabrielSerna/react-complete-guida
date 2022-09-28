import Card from '../UI/Card.js';
import ExpenseItem from '../components/ExpenseItem';
import '../components/Expenses.css';

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