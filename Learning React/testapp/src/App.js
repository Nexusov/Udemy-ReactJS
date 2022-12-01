import React, { Component, useState, useEffect, useCallback, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom';
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

const Form = () => {

   const [advOpen, setAdv] = useState(false)
   const [text, setText] = useState('')

	const handleClick = () => {
      setAdv(advOpen => !advOpen)
	}; 

	const myRef = useRef(1)
	const myRefConsole = useRef(null)
	// myRef = React.createRef();
	// myRefConsole = React.createRef();

   useEffect(() => {
      // myRef.current++
      myRef.current = text
      console.log(myRef.current)
   })

/* 	componentDidMount() {
		this.myRef.current.focus();
		this.myRefConsole.current.doSmth();

		setTimeout(this.handleClick, 3000);
	} */

	const focusFirstTI = () => {
		myRef.current.focus();
	};

		return (
			<Container>
				<form
					className='w-50 border mt-5 p-3 m-auto'
					style={{ overflow: 'hidden', position: 'relative' }}
					onClick={handleClick} 
				>
					<div className='mb-3'>
						<label
							htmlFor='exampleFormControlInput1'
							className='form-label'
						>
							Email address
						</label>
						<input
							// ref={myRef}
                     onChange={(e) => setText(e.target.value)}
							type='email'
							className='form-control'
							id='exampleFormControlInput1'
							placeholder='name@example.com'
						/>
						<TextInput ref={myRefConsole} />
					</div>
					<div className='mb-3'>
						<label
							htmlFor='exampleFormControlTextarea1'
							className='form-label'
						>
							Example textarea
						</label>
						<textarea
							onClick={focusFirstTI}
                     value={myRef.current}
							className='form-control'
							id='exampleFormControlTextarea1'
							rows='3'
						></textarea>
					</div>
					{advOpen ? (
						<Portal>
							<Msg />
						</Portal>
					) : null}
				</form>
			</Container>
		);
	}

const Portal = (props) => {
	const node = document.createElement('div');
	document.body.appendChild(node);

	return ReactDOM.createPortal(props.children, node);
};

const Msg = () => {
	return (
		<div
			style={{
				width: '500px',
				height: '150px',
				backgroundColor: 'red',
				position: 'absolute',
				right: '0',
				bottom: '0',
			}}
		>
			Hello
		</div>
	);
};

class TextInput extends Component {
	doSmth = () => {
		console.log('smth');
	};
	render() {
		return (
			<input
				type='email'
				className='form-control'
				id='exampleFormControllInput1'
				placeholder='name@example.com'
			/>
		);
	}
}

const calcValue = () => {
   console.log('random')

   return Math.random() * (50 - 1) + 1
}

const countTotal = (num) => {
   console.log('counting...')
   return num + 10
}

const Slider = (props) => {

   const [slide, setSlide] = useState(calcValue)
   const [autoplay, setAutoplay] = useState(false)
   // const [state, setState] = useState({slide: 0, autoplay: false})

   const getSomeImages = useCallback(() => {
      console.log('fetching')
      return [
         'https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
         'https://petapixel.com/assets/uploads/2022/07/DALLEcopy-800x420.jpg'
      ]
   }, [slide])

   function logging() {
      console.log('log')
   }

   useEffect(() => {
      console.log('Effect')
   }, []) // will work once when the component be loaded

   useEffect(() => {
      console.log('Effect update')
      document.title = `Slide: ${slide}`

      window.addEventListener('click', logging)
      return () => {
         window.removeEventListener('click', logging) // similar to compnentDidUnmount 
      }
   }, [slide])

   function changeSlide(i) {
      setSlide(slide => slide + i)
   }

   function toggleAutoplay() {
      setAutoplay(autoplay => !autoplay)
   }

/* function changeSlide(i) {
      setState(state => ({...state, slide: state.slide + i}))
   }

   function toggleAutoplay() {
      setState(state => ({...state, autoplay: !state.autoplay}))
   } */

   const total = useMemo(() => {
      return countTotal(slide)
   }, [slide])

   const style = useMemo(() => ({color: slide > 4 ? 'red' : 'black'}), [slide])

   useEffect(() => {
      console.log('style')
   }, [style])

		return (
			<Container>
				<div className='slider w-50 m-auto'>
               <Slide getSomeImages={getSomeImages} />
					<div className='text-center mt-5'> Active slide {slide} <br /> {autoplay ? 'auto' : null} </div>
					<div style={style} className='text-center mt-5'>Total slides: {total} </div>
					<div className='buttons mt-3'>
						<button
							className='btn btn-primary me-2'
							onClick={() => changeSlide(-1)}>-1</button>
						<button
							className='btn btn-primary me-2'
							onClick={() => changeSlide(1)}>+1</button>
						<button
							className='btn btn-primary me-2'
							onClick={toggleAutoplay}>toggle autoplay</button>
					</div>
				</div>
			</Container>
		);
}

const Slide = ({getSomeImages}) => {
   const [images, setImages] = useState([])

   useEffect(() => {
      setImages(getSomeImages())
   }, [getSomeImages])

   return (
      <>
         {
            images.map((url, i) => <img key={i} className='d-block w-100' src={url} alt='slide' />)
         }
      </>
   )
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

   const [slider, setSlider] = useState(true)

	return (
		<Wrapper>
         <button onClick={() => setSlider(false)}>Click</button>
         {slider ? <Slider /> : null}
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
