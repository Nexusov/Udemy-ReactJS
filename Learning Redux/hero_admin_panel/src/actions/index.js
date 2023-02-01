import { createAction } from "@reduxjs/toolkit";

export const fetchHeroes = (request) => (dispatch) => {
   dispatch(heroesFetching());
   request("http://localhost:3001/heroes")
      .then(data => dispatch(heroesFetched(data)))
      .catch(() => dispatch(heroesFetchingError()))
}

export const fetchFilters = (request) => (dispatch) => {
   dispatch(filtersFetching());
   request("http://localhost:3001/filters")
      .then(data => dispatch(filtersFetched(data)))
      .catch(() => dispatch(filtersFetchingError()))
}

export const heroesFetching = createAction('HEROES_FETCHING') 

export const heroesFetched = createAction('HEROES_FETCHED')

export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR')

export const heroCreated = createAction('HERO_CREATED')

export const heroDeleted = createAction('HERO_DELETED')

export const heroesDeletingError = createAction('HEROES_DELETING_ERROR')

export const heroesCreatingError = createAction('HEROES_CREATING_ERROR')

//* ============ creating actions with default REDUX syntax ============ */

/* export const heroesFetching = () => {
   return {
      type: 'HEROES_FETCHING'
   }
} */

/* export const heroesFetched = (heroes) => {
   return {
      type: 'HEROES_FETCHED',
      payload: heroes
   }
} */

/* export const heroesFetchingError = () => {
   return {
      type: 'HEROES_FETCHING_ERROR'
   }
} */

/* export const heroCreated = (hero) => {
   return {
      type: 'HERO_CREATED',
      payload: hero
   }
} */

/* export const heroDeleted = (id) => {
   return {
      type: 'HERO_DELETED',
      payload: id
   }
} */

/* export const heroesDeletingError = () => {
   return {
      type: 'HEROES_DELETING_ERROR'
   }
} */

/* export const heroesCreatingError = () => {
   return {
      type: 'HEROES_CREATING_ERROR'
   }
} */

export const activeFilterChanged = (filter) => {
   return {
      type: 'ACTIVE_FILTER_CHANGED',
      payload: filter
   }
}

/* export const activeFilterChanged = (filter) => (dispatch) => {
   setTimeout(() => {
      dispatch({
         type: 'ACTIVE_FILTER_CHANGED',
         payload: filter
      })
   }, 1000)
} */

export const filtersFetching = () => {
   return {
      type: 'FILTERS_FETCHING'
   }
}

export const filtersFetched = (filter) => {
   return {
      type: 'FILTERS_FETCHED',
      payload: filter
   }
}

export const filtersFetchingError = () => {
   return {
      type: 'FILTERS_FETCHING_ERROR'
   }
}