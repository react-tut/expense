import { useState } from 'react'
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData = { ...enteredExpenseDate, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    stopEditingHandler();
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <Card className="new-expense">
      {!isEditing && <button type="button" onClick={startEditingHandler}>Add Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </Card>
  );
};

export default NewExpense;
