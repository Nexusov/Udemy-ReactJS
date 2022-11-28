import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employess-list.css';

const EmployeeList = ({ data, onDelete, onToggleProp, onChangeSalary }) => {
	const elements = data.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<EmployeesListItem
				key={id}
				{...itemProps}
				onDelete={() => onDelete(id)}
				onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
				onChangeSalary={(e) => onChangeSalary(e.target.value.slice(0, -1), id )}
			/>
		);
	});

	return <ul className='app-list list-group'>{elements}</ul>;
};

export default EmployeeList;
