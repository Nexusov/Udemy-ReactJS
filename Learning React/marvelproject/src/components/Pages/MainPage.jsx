import { useState } from 'react';

import RandomChar from '../RandomChar/RandomChar';
import CharList from '../CharList/CharList';
import CharInfo from '../CharInfo/CharInfo';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import decoration from '../../resources/img/vision.png';

const MainPage = () => {

   const [selectedCharacter, setCharacter] = useState(null)

	const onCharacterSelected = (id) => {
		setCharacter(id)
	}

   return(
      <>
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
         <img className='bg-decoration' src={decoration} alt='vision'/>
      </>
   )
}

export default MainPage