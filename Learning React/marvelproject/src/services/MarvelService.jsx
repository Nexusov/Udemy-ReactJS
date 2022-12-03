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

   return {loading, error, clearError, getAllCharacters, getCharacter}
}

export default useMarvelService
