import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

import './App.css';
import BootstrapTest from './BootstrapTest';

const EmpItem = styled.div`
	padding: 20px;
	margin-bottom: 15px;
	border-radius: 5px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	a {
		display: block;
		margin: 10px 0 10px 0;
		color: ${(props) => (props.active ? 'orange' : 'black')};
	}
	input {
		display: block;
		margin-top: 10px;
	}
`;

const Header = styled.h2`
	fonst-size: 22px;
`;

export const Button = styled.button`
	display: block;
	padding: 5px 15px;
	background-color: gold;
	border: 1px solid rgba(0, 0, 0, 0.2);
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const Field = () => {
	const holder = 'Enter here';
	const styledField = {
		width: '300px',
	};

	return <input placeholder={holder} type='text' style={styledField} />;
};

// eslint-disable-next-line no-unused-vars
class FieldClass extends Component {
	// Class component syntax
	render() {
		const holder = 'Enter here';
		const styledField = {
			width: '300px',
		};

		return <input placeholder={holder} type='text' style={styledField} />;
	}
}

function Btn() {
	const text = 'Log in';
	const isLogged = false;

	return <button>{isLogged ? 'Enter' : text}</button>;
}

class Form extends Component {
   myRef = React.createRef()
   myRefConsole = React.createRef()

   componentDidMount() {
      this.myRef.current.focus()
      this.myRefConsole.current.doSmth()
   }

   focusFirstTI = () => {
      this.myRef.current.focus()
   }

   render() {
		return (
			<Container>
				<form className='w-50 border mt-5 p-3 m-auto'>
					<div className='mb-3'>
						<label
							htmlFor='exampleFormControlInput1'
							className='form-label'
						>
							Email address
						</label>
						<input
                     ref = {this.myRef}
							type='email'
							className='form-control'
							id='exampleFormControlInput1'
							placeholder='name@example.com'
						/>
                  <TextInput ref={this.myRefConsole}/>
					</div>
					<div className='mb-3'>
						<label
							htmlFor='exampleFormControlTextarea1'
							className='form-label'
						>
							Example textarea
						</label>
						<textarea
                     onClick={this.focusFirstTI} 
							className='form-control'
							id='exampleFormControlTextarea1'
							rows='3'
						></textarea>
					</div>
				</form>
			</Container>
		);
	}
}



class TextInput extends Component {

   doSmth = () => {
      console.log('smth')
   }
   render() {
      return (   
         <input 
         type="email"
         className='form-control'
         id="exampleFormControllInput1"
         placeholder="name@example.com"
         />
      )
   }
}



class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			text: 'TEXT',
			position: '',
		};
	}

	nextYear = () => {
		this.setState((state) => ({
			years: state.years + 1,
		}));
	};

	commitInputChanges = (e) => {
		this.setState({
			position: e.target.value,
		});
	};

	static onLog = () => {
		console.log('Hey');
	};

	static logged = 'on';

	render() {
		const { name, surname, link } = this.props;
		const { position, years } = this.state;
		return (
			<EmpItem active>
				<Button onClick={this.nextYear}>{this.state.text}</Button>
				<Header style={{ fontFamily: 'Roboto' }}>
					My name is {name}, surname - {surname}, age - {years},
					position - {position}
				</Header>
				<a href={link} style={{ fontSize: 20 }}>
					My profile
				</a>
				<form>
					<span>Введите должность</span>
					<input type='text' onChange={this.commitInputChanges} />
				</form>
			</EmpItem>
		);
	}
}

const Wrapper = styled.div`
	width: 600px;
	margin: 80px auto 0 auto;
`;

const DynamicGreating = (props) => {
	return (
		<div className={'mb-3 p-3 border border-' + props.color}>
			{React.Children.map(props.children, (child) => {
				return React.cloneElement(child, {
					className: 'shadow p-3 m-3 border rounded',
				});
			})}
		</div>
	);
};

const HelloGreating = () => {
	return (
		<div style={{ width: '600px', margin: '0 auto' }}>
			<DynamicGreating color={'primary'}>
				<h2>KILL ME</h2>
			</DynamicGreating>
		</div>
	);
};

const Message = (props) => {
	return <h2>The counter is {props.counter}</h2>;
};

class Counter extends Component {
	state = {
		counter: 0,
	};

	changeCounter = () => {
		this.setState(({ counter }) => ({
			counter: counter + 1,
		}));
	};

	render() {
		return (
			<>
				<button
					className={'btn btn-primary'}
					onClick={this.changeCounter}
				>
					Click me!
				</button>
				{this.props.render(this.state.counter)}
			</>
		);
	}
}

function App() {
	return (
		<Wrapper>
         <Form />
			<Counter render={(counter) => <Message counter={counter} />} />
			<Header />
			<Field />
			<Btn />
			<HelloGreating />
			<BootstrapTest
				left={
					<DynamicGreating color={'primary'}>
						<h2>Something</h2>
						<h2>KILL ME</h2>
					</DynamicGreating>
				}
				right={
					<DynamicGreating color={'primary'}>
						<h2>RIGHT</h2>
					</DynamicGreating>
				}
			/>

			<WhoAmI name='John' surname='Shepard' link='facebook.com' />
			<WhoAmI name='Alex' surname='Smith' link='twitter.com' />
		</Wrapper>
	);
}

WhoAmI.onLog();
console.log(WhoAmI.logged);

export { Header };
export default App;
