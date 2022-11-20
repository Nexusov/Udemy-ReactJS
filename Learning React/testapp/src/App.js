import {Component} from 'react';
import './App.css';

const Header = () => {
	return <h2>Hello World!</h2>;
};

const Field = () => {
   const holder = 'Enter here'
   const styledField = {
      width: '300px'
   }

	return <input placeholder={holder} type='text' style={styledField} />;
};

// eslint-disable-next-line no-unused-vars
class FieldClass extends Component { // Class component syntax
   render() {
      const holder = 'Enter here'
      const styledField = {
         width: '300px'
      }

      return <input placeholder={holder} type='text' style={styledField} />; 
   }
}

function Btn() {
   const text = 'Log in';
   const isLogged = false;

	return <button>{isLogged ? 'Enter' : text}</button>;
}

function App() {
	return (
		<div className='App'>
			<Header />
			<Field />
			<Btn />
		</div>
	);
}

export {Header}
export default App;
