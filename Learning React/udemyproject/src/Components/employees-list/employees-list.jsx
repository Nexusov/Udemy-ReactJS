import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employess-list.css'

const EmployeeList = ({data, onDelete}) => {

   const elements = data.map(item => {
      const {id, ...itemProps} = item
      return (
         <EmployeesListItem key={id} {...itemProps} onDelete={() => onDelete(id)} />
      )
   })

   return (
      <ul className="app-list list-group">
         {elements}
      </ul>
   )
}

export default EmployeeList