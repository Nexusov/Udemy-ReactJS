import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeeList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					name: 'Yegor G.',
					salary: 800,
					rise: true,
					increase: false,
					id: 1,
				},
				{
					name: 'Olga P.',
					salary: 3000,
					rise: false,
					increase: true,
					id: 2,
				},
				{
					name: 'Dmitry R.',
					salary: 5000,
					rise: false,
					increase: false,
					id: 3,
				},
			],
         term: '',
         filter: 'all',
		};
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			/* const index = data.findIndex(element => element.id === id)

         const before = data.slice(0, index)
         const after = data.slice(index + 1)

         const newArr = [...before, ...after] */

			return {
				data: data.filter((item) => item.id !== id),
			};
		});
	};

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: this.maxId++,
		};

		this.setState(({ data }) => {
			const newArr = [...data, newItem];

			return {
				data: newArr,
			};
		});
	};

	onToggleProp = (id, prop) => {
      
		/* this.setState(({data}) => {
         const index = data.findIndex(elem => elem.id === id)
         
         const old = data[index]
         const newItem = {...old, increase: !old.increase}
         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

         return {
            data: newArr
         }
      }) */

		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}
            return item;
			}),
		}));
	};

/* onToggleRise = (id) => {
      this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, rise: !item.rise };
				}
            return item;
			}),
		}));
	}; */

   searchEmp = (items, term) => {
      if (term.length === 0) {
         return items
      }

      return items.filter(item => {
         return item.name.indexOf(term) > -1
      })
   }

   onUpdateSearch = (term) => {
      this.setState({term})
   }

   filterPost = (items, filter) => {
      switch (filter) {
         case 'rise':
               return items.filter(item => item.rise === true)
         case 'moreThan1000':
               return items.filter(item => item.salary > 1000)
         default:
               return items
      }
   }

   onFilterSelect = (filter) => {
      this.setState({filter})
   }

	render() {
      const {data, term, filter} = this.state
      const employees = this.state.data.length
      const increased = this.state.data.filter(item => item.increase === true).length
      const visibleData = this.filterPost(this.searchEmp(data, term), filter)

		return (
			<div className='app'>
				<AppInfo employees={employees} increased={increased} />

				<div className='search-panel'>
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
				</div>

				<EmployeeList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
