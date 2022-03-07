import Expenses from "./Components/Expenses/Expenses"
import NewExpense from "./Components/NewExpense/NewExpense";
function App() {
  const expenses=[
    {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 0, 28)},
    {title: 'Meat', amount: 30.67, date: new Date(2022, 1, 1)},
    {title: 'Beer', amount: 15.10, date: new Date(2022, 1, 1)},
    {title: 'Rent', amount: 1000.10, date: new Date(2022, 1, 2)}
  ];


  return (
    <div>
      <NewExpense/>
      <Expenses props={expenses}/>
    </div>
  );
}
export default App;
