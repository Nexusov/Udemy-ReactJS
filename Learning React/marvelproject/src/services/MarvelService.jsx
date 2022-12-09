import { useHttp } from "../Hooks/http.hook";

const useMarvelService = () => {

   const {loading, error, request, clearError} = useHttp()

   const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
   const _apiKey = 'apikey=2ae406f8b04bae4282a528673f9eec97'
   const _baseOffset = Math.floor(Math.random() * 1500)

   const getAllCharacters = async (offest = _baseOffset) => {
      const res = await request(`${_apiBase}characters?limit=9&offset=${offest}&${_apiKey}`)
      return res.data.results.map(_transformCharacter)
   }

   const getCharacter = async (id) => {
      const res = await request(`${_apiBase}characters/${id}?${_apiKey}`)
      return _transformCharacter(res.data.results[0])
   }

   const getCharacterByName = async (name) => {
      const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
      return res.data.results.map(_transformCharacter);
   }

   const getAllComics = async (offset = Math.floor(Math.random() * 1500)) => {
      const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`);
      return res.data.results.map(_transformComics);
   }

   const getComic = async (id) => {
      const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
      return _transformComics(res.data.results[0]);
   }

   const _transformCharacter = (character) => {
      return {
         id: character.id,
         name: character.name,
         description: character.description || 'NO DESCRIPTION',
         thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
         homepage: character.urls[0].url,
         wiki: character.urls[1].url,
         comics: character.comics.items,
      }
   }

   const _transformComics = (comics) => {
      return {
         id: comics.id,
         title: comics.title,
         description: comics.description || 'NO DESCRIPTION',
         pageCount: comics.pageCount ? `${comics.pageCount} pages.` : 'No information about the number of pages',
         thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
         language: comics.textObjects.length ? comics.textObjects[0].language : 'en-us',
         price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'NOT AVAILABLE'
      }
   }

   return {loading, error, clearError, getAllCharacters, getCharacterByName, getCharacter, getAllComics, getComic}
}

export default useMarvelService
