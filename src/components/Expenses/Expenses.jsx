import React, { useState } from 'react';
import Card from '../UI/Card.jsx';
import ExpensesList from './ExpensesList.jsx';
import ExpensesFilter from './ExpensesFilter.jsx';
import './Expenses.css';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter( expense => {
    // console.log(expense);
    return filteredYear === 'ALL'? props.items : expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;