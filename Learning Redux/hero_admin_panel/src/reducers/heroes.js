import { createReducer } from "@reduxjs/toolkit"

import { heroesFetching, heroesFetched, heroesFetchingError, heroCreated, heroesCreatingError, heroDeleted, heroesDeletingError } from "../actions"

const initialState = {
   heroes: [],
   heroesLoadingStatus: 'idle',
}

// * ============ createReducer with ES6 syntax ============ */

const heroes = createReducer(initialState, {
      [heroesFetching]: state => {state.heroesLoadingStatus = 'loading'},
      [heroesFetched]: (state, action) => {state.heroesLoadingStatus = 'idle'; state.heroes = action.payload},
      [heroesFetchingError]: state => {state.heroesLoadingStatus = 'error'},
      [heroCreated]: (state, action) => {state.heroes.push(action.payload)},
      [heroesCreatingError]: state => {state.heroesLoadingStatus = 'error'},
      [heroDeleted]: (state, action) => {state.heroes = state.heroes.filter(item => item.id !== action.payload)},
      [heroesDeletingError]: state => {state.heroesLoadingStatus = 'error'},
   },
      [],
      state => state
) 

// * ============ createReducer with build syntax ============ */

/* const heroes = createReducer(initialState, builder => {
   builder
      .addCase(heroesFetching, state => {
         state.heroesLoadingStatus = 'loading'
      })
      .addCase(heroesFetched, (state, action) => {
         state.heroesLoadingStatus = 'idle'
         state.heroes = action.payload
      })
      .addCase(heroesFetchingError, state => {
         state.heroesLoadingStatus = 'error'
      })
      .addCase(heroCreated, (state, action) => {
         state.heroes.push(action.payload)
      })
      .addCase(heroesCreatingError, state => {
         state.heroesLoadingStatus = 'error'
      })
      .addCase(heroDeleted, (state, action) => {
         state.heroes = state.heroes.filter(item => item.id !== action.payload)
      })
      .addCase(heroesDeletingError, state => {
         state.heroesLoadingStatus = 'error'
      })
      .addDefaultCase(() => {})
}) */

// * ============ createReducer with original REDUX syntax ============ */

/* const heroes = (state = initialState, action) => {
   switch (action.type) {
      case 'HEROES_FETCHING':
         return {
            ...state,
            heroesLoadingStatus: 'loading'
         }

      case 'HEROES_FETCHED':
         return {
            ...state,
            heroes: action.payload,
            heroesLoadingStatus: 'idle'
         }

      case 'HEROES_FETCHING_ERROR':
         return {
            ...state,
            heroesLoadingStatus: 'error'
         }

      case 'HERO_DELETED':
         return {
            ...state,
            heroes: state.heroes.filter(item => item.id !== action.payload),
         }

      case 'HEROES_DELETING_ERROR':
         return {
            ...state,
            heroesLoadingStatus: 'error'
         }

      case 'HERO_CREATED':
         return {
            ...state,
            heroes: [...state.heroes, action.payload],
         }

      case 'HEROES_CREATING_ERROR':
         return {
            ...state,
            heroesLoadingStatus: 'error'
         }

      default: return state
   }
} */

export default heroes;