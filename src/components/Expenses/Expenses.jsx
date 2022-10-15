import React, { useState } from 'react';
import Card from '../UI/Card.jsx';
import ExpenseItem from './ExpenseItem.jsx';
import ExpensesFilter from './ExpensesFilter.jsx';
import './Expenses.css';

const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState('2020');

  const filterChangeHandler = (y) => {
    setSelectedYear(y);
  };

  return (
    <div>
      <Card className='expenses'>
      <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
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