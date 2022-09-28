import React, { useState } from 'react';

import Card from '../UI/Card.js'
import ExpenseDate from '../components/ExpenseDate.js';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const [amount, setAmount] = useState(props.amount);
  const [date, setDate] = useState(props.date);
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Title Updated!')
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