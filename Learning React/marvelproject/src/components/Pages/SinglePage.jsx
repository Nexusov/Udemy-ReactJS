import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';
import AppBanner from '../AppBanner/AppBanner';


const SinglePage = ({Component, dataType}) => {
   const {id} = useParams();
   const [data, setData] = useState(null);
   const {loading, error, getComic, getCharacter, clearError} = useMarvelService();

   useEffect(() => {
      updateData()
   }, [id])

   const updateData = () => {
      clearError();

      switch (dataType) {
         case 'comic': getComic(id).then(onDataLoaded);
            break;
         case 'character': getCharacter(id).then(onDataLoaded);
            break;
         default: return null
      }
   }

   const onDataLoaded = (data) => {
      setData(data);
   }

   const errorMessage = error ? <ErrorMessage/> : null;
   const spinner = loading ? <Spinner/> : null;
   const content = !(loading || error || !data) ? <Component data={data}/> : null;

   return (
      <>
         <AppBanner/>
         {errorMessage}
         {spinner}
         {content}
      </>
   )
}

export default SinglePage;