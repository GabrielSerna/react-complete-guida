import React, { useState } from 'react';
import Card from '../UI/Card.jsx';
import ExpenseItem from './ExpenseItem.jsx';
import ExpensesFilter from './ExpensesFilter.jsx';
import './Expenses.css';

const Expenses = (props) => {

  const [filteredyear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
      <ExpensesFilter selected={filteredyear} onChangeFilter={filterChangeHandler} />
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