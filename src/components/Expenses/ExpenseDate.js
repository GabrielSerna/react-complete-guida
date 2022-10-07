import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const year = props.date.getFullYear();
  const mount = props.date.toLocaleString('it-IT', { month: 'long' });
  const day = props.date.toLocaleString('it-IT', { day: '2-digit' });

  return (
    <div className='expense-date'>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__mount'>{mount}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  )
};

export default ExpenseDate;