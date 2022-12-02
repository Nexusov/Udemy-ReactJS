import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';
import Skeleton from '../Skeleton/Skeleton';

import './charInfo.scss';

const CharInfo = (props) => {

   const [character, setCharacter] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);


	const marvelService = new MarvelService();

   useEffect(() => {
      updateCharacter();
   }, [props.characterId]) 

	const updateCharacter = () => {
		const { characterId } = props;

		if (!characterId) {return}

		onCharacterLoading();
		marvelService.getCharacter(characterId).then(onCharacterLoaded).catch(onError);
	};

	const onError = () => {
      setLoading(false);
      setError(true)
	};

	const onCharacterLoaded = (character) => {
      setCharacter(character);
      setLoading(false);
	};

	const onCharacterLoading = () => {
      setLoading(true);
	};

   const skeleton = character || loading || error ? null : <Skeleton />
   const errorMessage = error ? <ErrorMessage/> : null;
   const spinner = loading ? <Spinner/> : null
   const content = !(loading || error || !character) ? <View character={character}/> : null

   return (
      <div className='char__info'>
         {skeleton} {errorMessage} {spinner} {content}
      </div>
   )
}

const View = ({ character }) => {
   const {name, thumbnail, description, homepage, wiki, comics} = character

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
            {
               comics.length > 0 ? null : 'There are no comics with this character'
            }
            {
               comics.map((item, i) => {
                  return (
                     <li key={i} className='char__comics-item'>
                        {item.name}
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
