import { Component } from 'react';

import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';

import './charList.scss';

class CharList extends Component {
	state = {
		charList: [],
		loading: true,
      newItemLoading: false,
		error: false,
      offset: Math.floor(Math.random() * 1500),
      characterEnded: false,
	};

	marvelService = new MarvelService();

	onError = () => {
		this.setState({
			loading: false,
			error: true,
		});
	};

   onCharListLoading = () => {
      this.setState({
         newItemLoading: true,
      })
   }

	onCharListLoaded = (newCharList) => {
      let ended = false;
      if (newCharList.length < 9) {
         ended = true;
      }

		this.setState(({charList, offset}) => ({
			charList: [...charList, ...newCharList],
			loading: false,
         newItemLoading: false,
         offset: offset + 9,
         characterEnded: ended,
		}));
	};
   
   onRequest = (offset) => {
      this.onCharListLoading()
      this.marvelService.getAllCharacters(offset).then(this.onCharListLoaded).catch(this.onError)
   }

   componentDidMount() {
      this.onRequest()
   }
   
	renderItems(arr) {
		const items = arr.map(item => {
			let imgStyle = { 'objectFit' : 'cover' };
			if (item.thumbnail.includes('image_not_available')) {
				imgStyle = { 'objectFit' : 'unset' };
			}

			return (
				<li className='char__item' key={item.id} onClick={() => this.props.onCharacterSelected(item.id)}>
					<img src={item.thumbnail} alt={item.name} style={imgStyle} />
					<div className='char__name'>{item.name}</div>
				</li>
			);
		});
		
		return <ul className='char__grid'>{items}</ul>;
	}

	render() {
		const { charList, loading, error, newItemLoading, offset, characterEnded } = this.state;

		const items = this.renderItems(charList);

		const errorMessage = error ? <ErrorMessage /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = !(loading || error) ? items : null;

		return (
			<div className='char__list'>
				{errorMessage} {spinner} {content}
				<button className='button button__main button__long' style={{'display': characterEnded ? 'none' : 'block'}} disabled={newItemLoading} onClick={() => this.onRequest(offset)}>
					<div className='inner'>load more</div>
				</button>
			</div>
		);
	}
}

export default CharList;
