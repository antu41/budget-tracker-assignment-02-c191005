import Income from "./Income";
import Expense from "./Expense";
export default function EntryList() {



  const Data = [
    { description: 'Website Project', value: 11999.99, type: 'income' },
    { description: 'Salary', value: 35000.00, type: 'income' },
    { description: 'Mobile App Project', value: 10000.00, type: 'income' },
    { description: 'Groceries 1', value: 2500.00, type: 'expense' },
    { description: 'Electric Bill', value: 2500.00, type: 'expense' },
    { description: 'House Rent', value: 2500.00, type: 'expense' },
    { description: 'Phone Bill', value: 2500.00, type: 'expense' },
    { description: '1 Week Travel', value: 2500.00, type: 'expense' },
  ];


  return (

    <div className="mx-auto my-8 grid max-w-4xl grid-cols-1 gap-8 px-5 text-sm md:grid-cols-2" >

      <Income Props={Data} />

      <Expense Props={Data} />

    </div>


  )
}