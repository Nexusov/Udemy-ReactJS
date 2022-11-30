import { Component } from 'react';

import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';
import Skeleton from '../Skeleton/Skeleton';

import './charInfo.scss';

class CharInfo extends Component {
	state = {
		character: null,
		loading: false,
		error: false,
	};

	marvelService = new MarvelService();

	componentDidMount() {
		this.updateCharacter();
	}

   componentDidUpdate(prevProps, prevState) {
      if (this.props.characterId !== prevProps.characterId) {
         this.updateCharacter();
      }
   }

	updateCharacter = () => {
		const { characterId } = this.props;

		if (!characterId) {return}

		this.onCharacterLoading();
		this.marvelService.getCharacter(characterId).then(this.onCharacterLoaded).catch(this.onError);
	};

	onError = () => {
		this.setState({
			loading: false,
			error: true,
		});
	};

	onCharacterLoaded = (character) => {
		this.setState({
			character,
			loading: false,
		});
	};

	onCharacterLoading = () => {
		this.setState({
			loading: true,
		});
	};

	render() {
      const {loading, error, character} = this.state;

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

export default CharInfo;
