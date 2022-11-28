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
         text: 'TEXT',
         position: ''
      }
   }

   nextYear = () => {
      this.setState(state => ({
         years: state.years + 1
      }))
   }

   commitInputChanges = (e) => {
      this.setState({
         position: e.target.value
      })
   }

	render() {
      const {name, surname, link} = this.props
      const {position, years} = this.state
		return (
			<>
            <button onClick={this.nextYear}>{this.state.text}</button>
				<h1>
					My name is {name}, surname - {surname}, age - {years}, position - {position}
				</h1>
				<a href={link}>My profile</a>
            <form>
               <span>Введите должность</span>
               <input type="text" onChange={this.commitInputChanges} />
            </form>
			</>
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
