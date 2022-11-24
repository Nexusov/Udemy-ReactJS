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

class WhoAmI extends Component {
   constructor(props) {
      super(props)
      this.state = {
         years: 27,
         text: 'TEXT'
      }
   }

   nextYear = () => {
      this.setState(state => ({
         years: state.years + 1
      }))
   }

	render() {
      const {name, surname, link} = this.props
		return (
			<div>
            <button onClick={this.nextYear}>{this.state.text}</button>
				<h1>
					My name is {name}, surname - {surname}, age - {this.state.years}
				</h1>
				<a href={link}>My profile</a>
			</div>
		);
	}
}

function App() {
	return (
		<div className='App'>
			<Header />
			<Field />
			<Btn />
         <WhoAmI name='John' surname='Shepard' link='facebook.com' />
         <WhoAmI name='Alex' surname='Smith' link='twitter.com' />
		</div>
	);
}

export {Header}
export default App;
