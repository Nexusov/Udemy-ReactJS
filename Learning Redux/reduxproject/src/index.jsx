import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux'

const initialState = {value: 0}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case 'INC':
         return {
            ...state,
            value: state.value + 1
         };
      case 'DEC':
         return {
            ...state,
            value: state.value - 1
         };
      case 'RND':
         return {
            ...state,
            value: state.value * action.payload
         };
      default: return state
   }
}

const store = createStore(reducer)

const update = () => {
   document.getElementById('counter').textContent = store.getState().value
}

store.subscribe(update)

const inc = () => ({type:'INC'}) // actionCreator
const dec = () => ({type:'DEC'}) // actionCreator
const rnd = (value) => ({type:'RND', payload: value}) // actionCreator

document.getElementById('inc').addEventListener('click', () => store.dispatch(inc()))
document.getElementById('dec').addEventListener('click', () => store.dispatch(dec()))
document.getElementById('rnd').addEventListener('click', () => {
   const value = Math.floor(Math.random() * 100 - 50)
   store.dispatch(rnd(value))
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// <React.StrictMode>
   <>
      
   </>
// </React.StrictMode>
);

