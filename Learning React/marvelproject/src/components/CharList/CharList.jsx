import { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';

import './charList.scss';

const setContent = (process, Component, newItemLoading) => {
	switch (process) {
		case 'waiting': 
			return <Spinner />
		case 'loading': 
			return newItemLoading ? <Component /> : <Spinner />
		case 'confirmed': 
			return <Component />
		case 'error': 
			return <ErrorMessage />
		default: 
			throw new Error('Unexpected state of the process')
	}
}

const CharList = (props) => {

   const [charList, setCharList] = useState([])
   const [newItemLoading, setNewItemLoading] = useState(false)
   const [offset, setOffset] = useState(Math.floor(Math.random() * 1500))
   const [characterEnded, setCharacterEnded] = useState(false)

	const {process, setProcess, getAllCharacters} = useMarvelService();

   useEffect(() => {
      onRequest(offset, true);
   }, []) // ex-componentDidMount() 


	const onCharListLoaded = (newCharList) => {
		let ended = false;
		if (newCharList.length < 9) {
			ended = true;
		}

      setCharList(charList => [...charList, ...newCharList])
      setNewItemLoading(newItemLoading => false)
      setOffset(offset => offset + 9)
      setCharacterEnded(characterEnded => ended)
	};

	const onRequest = (offset, initial) => {
      initial ? setNewItemLoading(false) : setNewItemLoading(true)
		getAllCharacters(offset)
			.then(onCharListLoaded)
			.then(() => setProcess('confirmed'))
			.finally(() => setNewItemLoading(false));
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
				<CSSTransition key={item.id} timeout={500} classNames="char__item">
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
				</CSSTransition>
			);
		});

		return(
			<ul className='char__grid'>
				<TransitionGroup component={null}>
					{items}
				</TransitionGroup>
			</ul>
		) 
	}

   return (
      <div className='char__list'>
         {setContent(process, () => renderItems(charList), newItemLoading)}
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
