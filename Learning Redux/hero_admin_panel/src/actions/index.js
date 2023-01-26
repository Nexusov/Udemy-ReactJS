export const heroesFetching = () => {
   return {
      type: 'HEROES_FETCHING'
   }
}

export const heroesFetched = (heroes) => {
   return {
      type: 'HEROES_FETCHED',
      payload: heroes
   }
}

export const heroesFetchingError = () => {
   return {
      type: 'HEROES_FETCHING_ERROR'
   }
}

export const heroesDeletingError = () => {
   return {
      type: 'HEROES_DELETING_ERROR'
   }
}

export const heroDeleted = (id) => {
   return {
      type: 'HERO_DELETED',
      payload: id
   }
}

export const heroCreated = (hero) => {
   return {
      type: 'HERO_CREATED',
      payload: hero
   }
}

export const heroesCreatingError = () => {
   return {
      type: 'HEROES_CREATING_ERROR'
   }
}

export const activeFilterChanged = (filter) => {
   return {
      type: 'ACTIVE_FILTER_CHANGED',
      payload: filter
   }
}

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