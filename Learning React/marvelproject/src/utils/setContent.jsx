import Skeleton from '../components/Skeleton/Skeleton';
import Spinner from '../components/Spinner/Spinner';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';


const setContent = (process, Component, data) => {
   switch (process) {
      case 'waiting': 
         return <Skeleton />
      case 'loading': 
         return <Spinner />
      case 'confirmed': 
         return <Component data={data}/>
      case 'error': 
         return <ErrorMessage />
      default: 
         throw new Error('Unexpected state of the process')
   }
}

export default setContent;