import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData = { ...enteredExpenseDate, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };

  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
    </Card>
  );
};

export default NewExpense;
