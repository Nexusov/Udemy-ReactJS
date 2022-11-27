

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeeList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import './App.css'

function App() {

   const data = [
      {name: 'Yegor G.', salary: 800, increase: false, id: 1},
      {name: 'Olga P.', salary: 3000, increase: true, id: 2},
      {name: 'Dmitry R.', salary: 5000, increase: false, id: 3}
   ]

   return (
      <div className="app">
         <AppInfo />

         <div className="search-panel">
            <SearchPanel />
            <AppFilter />
         </div>

         <EmployeeList data={data}/>
         <EmployeesAddForm />
      </div>
   )
}

export default App;