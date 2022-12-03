import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';

import './comicsList.scss';

const ComicsList = () => {

   const [comicsList, setComicsList] = useState([]);
   const [newItemLoading, setNewItemLoading] = useState(false)
   const [offset, setOffset] = useState(Math.floor(Math.random() * 1500))
   const [comicsEnded, setComicsEnded] = useState(false);

   const {loading, error, getAllComics} = useMarvelService();

   useEffect(() => {
      onRequest(offset, true);
   }, []) // ex-componentDidMount() 

   const onRequest = (offset, initial) => {
      initial ? setNewItemLoading(false) : setNewItemLoading(true)
		getAllComics(offset).then(onComicsListLoaded).finally(() => setNewItemLoading(false));
	};

   const onComicsListLoaded = (newComicsList) => {
		let ended = false;
		if (newComicsList.length < 8) {
			ended = true;
		}

      setComicsList(charList => [...charList, ...newComicsList])
      setNewItemLoading(newItemLoading => false)
      setOffset(offset => offset + 8)
      setComicsEnded(comicsEnded => ended)
	};


   function renderItems(arr) {
		const items = arr.map((item, i) => {

			let imgStyle = { objectFit: 'contain' };
			if (item.thumbnail.includes('image_not_available')) {
				imgStyle = { objectFit: 'unset' };
			}
         
			return (
            <li className="comics__item">
            <a href="#">
               <img className="comics__item-img" src={item.thumbnail} alt={item.description} style={imgStyle}/>
               <div className="comics__item-name">{item.title}</div>
               <div className="comics__item-price">{item.price}</div>
            </a>
         </li>
			);
		});

		return <ul className='comics__grid'>{items}</ul>;
	}

   const items = renderItems(comicsList);

   const errorMessage = error ? <ErrorMessage /> : null;
   const spinner = loading && !newItemLoading ? <Spinner /> : null;

   return (
      <div className="comics__list">
         {errorMessage} {spinner} {items}
         <button className="button button__main button__long" onClick={() => onRequest(offset)} disabled={newItemLoading} style={{ display: comicsEnded ? 'none' : 'block' }}>
               <div className="inner">load more</div>
         </button>
      </div>
   )
}

export default ComicsList;