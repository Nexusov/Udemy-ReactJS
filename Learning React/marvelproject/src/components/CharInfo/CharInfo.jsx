import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';


import './charInfo.scss';

const CharInfo = (props) => {

   const [character, setCharacter] = useState(null);

	const {process, getCharacter, clearError, setProcess} = useMarvelService();

   useEffect(() => {
      updateCharacter();
   }, [props.characterId]) 

	const updateCharacter = () => {
		const { characterId } = props;

		if (!characterId) {return}

      clearError()
		getCharacter(characterId).then(onCharacterLoaded).then(() => setProcess('confirmed'));
	};

	const onCharacterLoaded = (character) => {
      setCharacter(character);
	};

   return (
      <div className='char__info'>
         {setContent(process, View, character)}
      </div>
   )
}

const View = ({ data }) => {
   const {name, thumbnail, description, homepage, wiki, comics} = data

   let imgStyle = {'objectFit': 'cover'}
   if (thumbnail.includes('image_not_available')) {
      imgStyle = {'objectFit': 'contain'}
   }


	return (
		<>
			<div className='char__basics'>
				<img src={thumbnail} alt={name} style={imgStyle}/>
				<div>
					<div className='char__info-name'>{name}</div>
					<div className='char__btns'>
						<a href={homepage} className='button button__main'>
							<div className='inner'>homepage</div>
						</a>
						<a href={wiki} className='button button__secondary'>
							<div className='inner'>Wiki</div>
						</a>
					</div>
				</div>
			</div>
			<div className='char__descr'>{description}</div>
			<div className='char__comics'>Comics:</div>
			<ul className='char__comics-list'>
            {comics.length > 0 ? null : 'There are no comics with this character'}
            {
               comics.map((item, i) => {
                  const regExp = /\b[\w=.]+$/g
                  const comicsId = item.resourceURI.match(regExp)
                  return (
                     <li key={i} className='char__comics-item'>
                        <NavLink to={`/comics/${comicsId}`}>{item.name}</NavLink>
                     </li>
                  )
               })
            }
			</ul>
		</>
	);
};

CharInfo.propTypes = {
   characterId: PropTypes.number,
}

export default CharInfo;
