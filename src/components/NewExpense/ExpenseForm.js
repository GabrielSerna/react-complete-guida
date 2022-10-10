import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {

  const [ newExpense, setNewExpense ] = useState({
    title: '',
    amount: 0,
    date: new Date().toISOString().split('T')[0]
  });

  const titleChangeHandler = (e) => {
    setNewExpense({ ...newExpense, title: e.target.value });
  };

  const amountChangeHandler = (e) => {
    setNewExpense({ ...newExpense, amount: e.target.value });
  };

  const dateChangeHandler = (e) => {
    setNewExpense({ ...newExpense, date: e.target.value });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={newExpense.amount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2022-01-01" max="2022-12-31" value={newExpense.date} onChange={dateChangeHandler}/>
        </div>
        <div className="new-expense__actions">
          <button type="submit" >Add expense</button>
        </div>
      </div>
    </form>
  )
};

export default ExpenseForm;