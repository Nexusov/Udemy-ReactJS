

class MarvelService {

   _apiBase = 'https://gateway.marvel.com:443/v1/public/';
   _apiKey = 'apikey=2ae406f8b04bae4282a528673f9eec97'

	getResource = async (url) => {
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	};

   getAllCharacters = async () => {
      const offset = Math.floor(Math.random() * 1500)
      const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`)
      return res.data.results.map(this._transformCharacter)
   }

   getCharacter = async (id) => {
      const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`)
      return this._transformCharacter(res.data.results[0])
   }

   _transformCharacter = (character) => {
      return {
         id: character.id,
         name: character.name,
         description: character.description ? `${character.description.slice(0,210)}...` : 'NO DESCRIPTION',
         thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
         homepage: character.urls[0].url,
         wiki: character.urls[1].url,
      }
   }
}

export default MarvelService
