import React from "react";
import ExpenseForm from './ExpenseForm.jsx';
import './NewExpense.css';

const NewExpense = (props) => {

  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
};

export default NewExpense;