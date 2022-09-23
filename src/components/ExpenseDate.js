import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const year = props.date.getFullYear();
  const mount = props.date.toLocaleString('it-IT', { mount: 'long' });
  const day = props.date.toLocaleString('it-IT', { day: '2-digit' });

  return (
    <div className=''>
      <div>{year}</div>
      <div>{mount}</div>
      <div>{day}</div>
    </div>
  )
};

export default ExpenseDate