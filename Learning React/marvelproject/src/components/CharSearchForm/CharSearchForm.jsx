import {useState} from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import './charSearchForm.scss'

const CharSearchForm = () => {
   const [character, setCharacter] = useState(null);
   const {process, setProcess, getCharacterByName, clearError} = useMarvelService();

   const onCharacterLoaded = (character) => {
      setCharacter(character);
   }

   const updateCharacter = (name) => {
      clearError();
      getCharacterByName(name).then(onCharacterLoaded).then(() => setProcess('confirmed'));
   }

   const errorMessage = process === 'error' ? <div className="char__search-critical-error"><ErrorMessage /></div> : null;
   
   const results = !character ? null : character.length > 0 ?
                  <div className="char__search-wrapper">
                     <div className="char__search-success">There is! Visit {character[0].name} page?</div>
                        <Link to={`/characters/${character[0].id}`} className="button button__secondary">
                           <div className="inner">To page</div>
                        </Link>
                  </div> : <div className="char__search-error"> The character was not found. Check the name and try again </div>;

   return (
      <div className="char__search-form">
         <Formik
            initialValues = {{
               characterName: ''
            }}
            validationSchema = {Yup.object({
               characterName: Yup.string().required('This field is required')
            })}
            onSubmit = { ({characterName}) => {
               updateCharacter(characterName);
            }}
            >
            <Form>
               <label className="char__search-label" htmlFor="characterName">Or find a character by name:</label>
               <div className="char__search-wrapper">
                  <Field id="characterName" name='characterName' type='text' placeholder="Enter name"/>
                  <button type='submit' className="button button__main" disabled={process === 'loading'}>
                     <div className="inner">find</div>
                  </button>
               </div>
               <FormikErrorMessage component="div" className="char__search-error" name="characterName" />
            </Form>
         </Formik>
         {results} {errorMessage}
      </div>
   )
}

export default CharSearchForm;