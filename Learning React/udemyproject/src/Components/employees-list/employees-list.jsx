import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employess-list.css';

const EmployeeList = ({ data, onDelete, onToggleProp, changeSalary }) => {
	const elements = data.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<EmployeesListItem
				key={id}
				{...itemProps}
				onDelete={() => onDelete(id)}
				onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
				changeSalary={(e) => changeSalary(e.target.value, id )}
			/>
		);
	});

	return <ul className='app-list list-group'>{elements}</ul>;
};

export default EmployeeList;
