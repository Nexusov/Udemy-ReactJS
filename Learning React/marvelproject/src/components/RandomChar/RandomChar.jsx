import { Component } from 'react';

import mjolnir from '../../resources/img/mjolnir.png';
import MarvelService from '../../services/MarvelService';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import './randomChar.scss';

class RandomChar extends Component {

	state = {
      character: {},
      loading: true,
      error: false,
	};

   marvelService = new MarvelService()

   componentDidMount() {
      // this.timerId = setInterval(() => this.updateCharacter(), 111000)
      this.updateCharacter()
   }

   componentWillUnmount() {
      clearInterval(this.timerId)
   }

   onError = () => {
      this.setState({
         loading: false,
         error: true
      })
   }

   onCharacterLoaded = (character) => {
      this.setState({
         character, 
         loading: false,
      })
   }

	onCharacterLoading = () => {
		this.setState({
			loading: true
		})
	}

   updateCharacter = () => {
      const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
		this.onCharacterLoading()
      this.marvelService.getCharacter(id).then(this.onCharacterLoaded).catch(this.onError)
   }

	render() {
		const { character, loading, error } = this.state;

      const errorMessage = error ? <ErrorMessage/> : null;
      const spinner = loading ? <Spinner/> : null
      const content = !(loading || error) ? <View character={character}/> : null

		return (
			<div className='randomchar'>
            {errorMessage} {spinner} {content}
				<div className='randomchar__static'>
					<p className='randomchar__title'>
						Random character for today!
						<br />
						Do you want to get to know him better?
					</p>
					<p className='randomchar__title'>Or choose another one</p>
					<button className='button button__main' onClick={this.updateCharacter}>
						<div className='inner'>try it</div>
					</button>
					<img
						src={mjolnir}
						alt='mjolnir'
						className='randomchar__decoration'
					/>
				</div>
			</div>
		);
	}
}


const View = ({ character }) => {

   const {name, description, thumbnail, homepage, wiki} = character

   let imgStyle = {'objectFit': 'cover'}
   if (thumbnail.includes('image_not_available')) {
      imgStyle = {'objectFit': 'contain'}
   }

	return (
		<div className='randomchar__block'>
			<img
				src={thumbnail}
				alt='Random character'
				className='randomchar__img'
            style={imgStyle}
			/>
			<div className='randomchar__info'>
				<p className='randomchar__name'>{name}</p>
				<p className='randomchar__descr'>{description}</p>
				<div className='randomchar__btns'>
					<a href={homepage} className='button button__main'>
						<div className='inner'>homepage</div>
					</a>
					<a href={wiki} className='button button__secondary'>
						<div className='inner'>Wiki</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default RandomChar;
