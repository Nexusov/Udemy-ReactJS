import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {Link} from 'react-router-dom';

const Page404 = () => {
   return (
      <div>
         <ErrorMessage />
         <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '40px', 'color': '#9F0013'}}>Page doesn't exist!</p>
         <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/">Back to the home page</Link>
      </div>
   )
}

export default Page404