import { useState } from 'react';
import { Helmet } from 'react-helmet'

import RandomChar from '../RandomChar/RandomChar';
import CharList from '../CharList/CharList';
import CharInfo from '../CharInfo/CharInfo';
import CharSearchForm from '../CharSearchForm/CharSearchForm';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import decoration from '../../resources/img/vision.png';


const MainPage = () => {

   const [selectedCharacter, setCharacter] = useState(null)

	const onCharacterSelected = (id) => {
		setCharacter(id)
	}

   return(
      <>
         <Helmet>
            <meta name="description" content="Marvel information portal"/>
            <title>Marvel information portal</title>
         </Helmet>
         <ErrorBoundary>
            <RandomChar />
         </ErrorBoundary>
         <div className='char__content'>
            <ErrorBoundary>
               <CharList onCharacterSelected={onCharacterSelected} />
            </ErrorBoundary>
            <div>
               <ErrorBoundary>
                  <CharInfo characterId={selectedCharacter} />
               </ErrorBoundary>
               <ErrorBoundary>
                  <CharSearchForm />
               </ErrorBoundary>
            </div>
         </div>
         <img className='bg-decoration' src={decoration} alt='vision'/>
      </>
   )
}

export default MainPage