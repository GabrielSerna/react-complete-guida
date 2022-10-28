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

  const filteredExpenses = props.items.filter( expense => {
    // console.log(expense);
    return filteredyear === 'ALL'? props.items : expense.date.getFullYear().toString() === filteredyear;
  });

  return (
    <div>
      <Card className='expenses'>
      <ExpensesFilter selected={filteredyear} onChangeFilter={filterChangeHandler} />
        { filteredExpenses.length === 0
        ? <p style={{ color: 'white' }} >No expenses found!</p>
        : ( filteredExpenses.map( (el, idx) => (
            <ExpenseItem
            key={idx}
            title={el.title}
            amount={el.amount}
            date={el.date}
            />
            )))
          }
      </Card>
    </div>
  );
};

export default Expenses;