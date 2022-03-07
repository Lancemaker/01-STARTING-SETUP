import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
//passing the whole prop array needs to be enclosed between {} on the parameter of the function. go figure ...
function Expenses( {props} ) {

  return (
    <Card className="expenses">
      {props.map((prop, index) => (
          <ExpenseItem key={index} title={prop.title} amount={prop.amount} date={prop.date} />
      )
      )}
    </Card>
  );
}
export default Expenses;