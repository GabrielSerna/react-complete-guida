import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {

  const [ title, setTitle ] = useState('');
  const [ amount, setAmount ] = useState(0)
  const [ date, setDate ] = useState(new Date().toISOString().split('T')[0]);
  // const [ newExpense, setNewExpense ] = useState({
  //   title: '',
  //   amount: 0,
  //   date: new Date().toISOString().split('T')[0]
  // });

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);

    // setNewExpense({ ...newExpense, title: e.target.value });

    // setNewExpense( prevState => {
    //   return { ...prevState, title: e.target.value }
    // });
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);

    // setNewExpense({ ...newExpense, amount: e.target.value });
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);

    // setNewExpense({ ...newExpense, date: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newExpense = {
      title,
      amount,
      date
    };
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2022-01-01" max="2022-12-31" value={date} onChange={dateChangeHandler}/>
        </div>
        <div className="new-expense__actions">
          <button type="submit" >Add expense</button>
        </div>
      </div>
    </form>
  )
};

export default ExpenseForm;