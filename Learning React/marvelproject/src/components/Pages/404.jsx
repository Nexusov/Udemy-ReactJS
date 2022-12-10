import { Helmet } from 'react-helmet'
import {Link} from 'react-router-dom';
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Page404 = () => {
   return (
      <div>
         <Helmet>
            <meta name="description" content='Error page'/>
            <title>This page is not found</title>
         </Helmet>              
         <ErrorMessage />
         <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '40px', 'color': '#9F0013'}}>Page doesn't exist!</p>
         <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/">Back to the home page</Link>
      </div>
   )
}

export default Page404