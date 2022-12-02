import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';

import './charList.scss';

const CharList = (props) => {

   const [charList, setCharList] = useState([])
   const [loading, setLoading] = useState(true)
   const [newItemLoading, setNewItemLoading] = useState(false)
   const [error, setError] = useState(false)
   const [offset, setOffset] = useState(Math.floor(Math.random() * 1500))
   const [characterEnded, setCharacterEnded] = useState(false)


	const marvelService = new MarvelService();


   useEffect(() => {
      onRequest();
   }, []) // ex-componentDidMount() 

	const onError = () => {
      setError(true)
      setLoading(false)
	};

	const onCharListLoading = () => {
      setNewItemLoading(true)
	};

	const onCharListLoaded = (newCharList) => {
		let ended = false;
		if (newCharList.length < 9) {
			ended = true;
		}

      setCharList(charList => [...charList, ...newCharList])
      setLoading(loading => false)
      setNewItemLoading(newItemLoading => false)
      setOffset(offset => offset + 9)
      setCharacterEnded(characterEnded => ended)
	};

	const onRequest = (offset) => {
		onCharListLoading();
		marvelService.getAllCharacters(offset).then(onCharListLoaded).catch(onError).finally(() => setNewItemLoading(false));
	};

   const itemRefs = useRef([]);

	const onClickItem = (id) => {
		itemRefs.current.forEach((item) =>
			item.classList.remove('char__item_selected')
		);
		itemRefs.current[id].classList.add('char__item_selected');
	};


	function renderItems(arr) {
		const items = arr.map((item, i) => {
			let imgStyle = { objectFit: 'cover' };
			if (item.thumbnail.includes('image_not_available')) {
				imgStyle = { objectFit: 'unset' };
			}

			return (
				<li
					className='char__item'
					tabIndex={0}
					ref={el => itemRefs.current[i] = el}
					key={item.id}
               onKeyPress={(e) => {
                  if (e.key === ' ' || e.key === "Enter") {
                     props.onCharacterSelected(item.id);
                     onClickItem(i);
                  }
               }}
					onClick={() => {
						props.onCharacterSelected(item.id);
						onClickItem(i);
					}}>
					<img src={item.thumbnail} alt={item.name} style={imgStyle} />
					<div className='char__name'>{item.name}</div>
				</li>
			);
		});

		return <ul className='char__grid'>{items}</ul>;
	}

   const items = renderItems(charList);

   const errorMessage = error ? <ErrorMessage /> : null;
   const spinner = loading ? <Spinner /> : null;
   const content = !(loading || error) ? items : null;

   return (
      <div className='char__list'>
         {errorMessage} {spinner} {content}
         <button className='button button__main button__long' style={{ display: characterEnded ? 'none' : 'block' }} disabled={newItemLoading} onClick={() => onRequest(offset)}>
            <div className='inner'>load more</div>
         </button>
      </div>
   );
}

CharList.propTypes = {
	onCharSelected: PropTypes.func.isRequired,
};

export default CharList;
