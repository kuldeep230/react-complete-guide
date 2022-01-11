import React from "react";

function ExpenseDate(props) {
  const { date } = props;
  return (
    <div>
      <div> {date.toLocaleString("en-US", { month: "long" })} </div>
      <div> {date.toLocaleString("en-US", { day: "2-digit" })} </div>
      <div> {date.getFullYear()} </div>
    </div>
  );
}
export default ExpenseDate;
