

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeeList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import './App.css'

function App() {
   return (
      <div className="app">
         <AppInfo />

         <div className="search-panel">
            <SearchPanel />
            <AppFilter />
         </div>

         <EmployeeList />
         <EmployeesAddForm />
      </div>
   )
}

export default App;