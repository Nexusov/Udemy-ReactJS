import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useMarvelService from '../../services/MarvelService';
import setContent from "../../utils/setContent";
import AppBanner from '../AppBanner/AppBanner';


const SinglePage = ({Component, dataType}) => {
   const {id} = useParams();
   const [data, setData] = useState(null);
   const {process, setProcess, getComic, getCharacter, clearError} = useMarvelService();

   useEffect(() => {
      updateData()
   }, [id])

   const updateData = () => {
      clearError();

      switch (dataType) {
         case 'comic': getComic(id).then(onDataLoaded).then(() => setProcess('confirmed'));
            break;
         case 'character': getCharacter(id).then(onDataLoaded).then(() => setProcess('confirmed'));
            break;
         default: return null
      }
   }

   const onDataLoaded = (data) => {
      setData(data);
   }

   return (
      <>
         <AppBanner/>
         {setContent(process, Component, data)}
      </>
   )
}

export default SinglePage;