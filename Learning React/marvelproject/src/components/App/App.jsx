import { useState } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import RandomChar from '../RandomChar/RandomChar';
import CharList from '../CharList/CharList';
import CharInfo from '../CharInfo/CharInfo';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import decoration from '../../resources/img/vision.png';

const App = () => {
	
	const [selectedCharacter, setCharacter] = useState(null)

	const onCharacterSelected = (id) => {
		setCharacter(id)
	}

	return (
		<div className='app'>
			<AppHeader />
			<main>
				<ErrorBoundary>
					<RandomChar />
				</ErrorBoundary>
				<div className='char__content'>
					<ErrorBoundary>
						<CharList onCharacterSelected={onCharacterSelected} />
					</ErrorBoundary>
					<ErrorBoundary>
						<CharInfo characterId={selectedCharacter} />
					</ErrorBoundary>
				</div>
				<img className='bg-decoration' src={decoration} alt='vision'
				/>
			</main>
		</div>
	);
}

export default App;
