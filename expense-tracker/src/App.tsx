import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 2, category: "Groceries" },
    { id: 4, description: "ggggg", amount: 2222, category: "Entertainment" },
    { id: 5, description: "Midaaaaalk", amount: 12313, category: "Utilities" },
    { id: 6, description: "sdssdssa", amount: 12111313, category: "Groceries" },
    { id: 7, description: "ddddddddd", amount: 22, category: "Groceries" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <ExpenseForm></ExpenseForm>
      <div className="mb3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
}

export default App;
