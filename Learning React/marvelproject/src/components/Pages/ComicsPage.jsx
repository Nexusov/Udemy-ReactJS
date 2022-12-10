import { Helmet } from 'react-helmet'

import ComicsList from '../ComicsList/ComicsList';
import AppBanner from '../AppBanner/AppBanner';

const ComicsPage = () => {
   return (
      <>
         <Helmet>
            <meta name="description" content="Page with comics"/>
            <title>Comics Page</title>
         </Helmet>         
         <AppBanner />
         <ComicsList />
      </>
   );
}

export default ComicsPage;
