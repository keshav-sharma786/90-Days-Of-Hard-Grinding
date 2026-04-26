import React from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import ContextMenu from "./components/ContextMenu";
import expenseData from "./components/expenseData";
import { useState } from "react";

const App = () => {
  //&creating a state variable for the expenseData
  const [expenses, setExpenses] = useState(expenseData);
  return (
    <div>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm setExpenses={setExpenses} />
          <ExpenseTable expenses={expenses} />
          <ContextMenu />
        </div>
      </main>
    </div>
  );
};

export default App;
