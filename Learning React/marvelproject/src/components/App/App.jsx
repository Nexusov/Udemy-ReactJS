import { Component } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import RandomChar from '../RandomChar/RandomChar';
import CharList from '../CharList/CharList';
import CharInfo from '../CharInfo/CharInfo';

import decoration from '../../resources/img/vision.png';


class App extends Component {
	state = {
		selectedCharacter: null,
	}

	onCharacterSelected = (id) => {
		this.setState({
			selectedCharacter: id
		})
	}
	
	render() {
		return (
			<div className='app'>
				<AppHeader />
				<main>
					<RandomChar />
					<div className='char__content'>
						<CharList onCharacterSelected={this.onCharacterSelected}/>
						<CharInfo characterId={this.state.selectedCharacter}/>
					</div>
					<img
						className='bg-decoration'
						src={decoration}
						alt='vision'
					/>
				</main>
			</div>
		);
	}
}

export default App;
