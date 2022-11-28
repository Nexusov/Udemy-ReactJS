import {Component} from 'react';
import styled from 'styled-components'

import './App.css';

const EmpItem = styled.div `
   padding: 20px;
   margin-bottom: 15px;
   border-radius: 5px;
   box-shadow: 5px 5px 10px rgba(0,0,0, .2);
   a {
      display: block;
      margin: 10px 0 10px 0;
      color: ${props => props.active ? 'orange' : 'black'};
   }
   input {
      display: block;
      margin-top: 10px
   }
`;

const Header = styled.h2`
   fonst-size: 22px
`;

export const Button = styled.button`
   display: block;
   padding: 5px 15px;
   background-color: gold;
   border: 1px solid rgba(0,0,0, .2);
   box-shadow: 5px 5px 10px rgba(0,0,0, .2)
`;

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
			<EmpItem active>
            <Button onClick={this.nextYear}>{this.state.text}</Button>
				<Header style={{fontFamily: 'Roboto'}}> 
					My name is {name}, surname - {surname}, age - {years}, position - {position}
				</Header>
				<a href={link} style={{fontSize: 20}}>My profile</a>
            <form>
               <span>Введите должность</span>
               <input type="text" onChange={this.commitInputChanges} />
            </form>
			</EmpItem>
		);
	}
}

const Wrapper = styled.div `
   width: 600px;
   margin: 80px auto 0 auto
`;

function App() {
	return (
		<Wrapper>
			<Header />
			<Field />
			<Btn />
         <WhoAmI name='John' surname='Shepard' link='facebook.com' />
         <WhoAmI name='Alex' surname='Smith' link='twitter.com' />
		</Wrapper>
	);
}

export {Header}
export default App;
