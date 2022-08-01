import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function Expenses (props) {
  return (
    <div className="expense">
      <ExpenseItem
        title={props.expenses.title}
        amount={props.expenses.amount}
        date={props.expenses.date}
      />
    </div>
  )
}

export default Expenses