import React from "react";
import ExpenseItem from "./Expenseitem";
import "./Expenses.css";

function Expenses(props) {
  const { expenses } = props;
  return (
    <div>
      <div className="expenses">
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
      </div>
      <div className="expenses">
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
      </div>
      <div className="expenses">
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
      </div>
      <div className="expenses">
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </div>
    </div>
  );
}
export default Expenses;
