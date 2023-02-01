import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   heroes: [],
   heroesLoadingStatus: 'idle',
}

const heroesSlice = createSlice({
   name: 'heroes', 
   initialState,
   reducers: {
      heroesFetching: state => {state.heroesLoadingStatus = 'loading'},
      heroesFetched: (state, action) => {state.heroesLoadingStatus = 'idle'; state.heroes = action.payload},
      heroesFetchingError: state => {state.heroesLoadingStatus = 'error'},
      heroCreated: (state, action) => {state.heroes.push(action.payload)},
      heroesCreatingError: state => {state.heroesLoadingStatus = 'error'},
      heroDeleted: (state, action) => {state.heroes = state.heroes.filter(item => item.id !== action.payload)},
      heroesDeletingError: state => {state.heroesLoadingStatus = 'error'},
   }
})

const {actions, reducer} = heroesSlice

export default reducer;

export const {
   heroesFetching,
   heroesFetched,
   heroesFetchingError,
   heroCreated,
   heroesCreatingError,
   heroDeleted,
   heroesDeletingError
} = actions