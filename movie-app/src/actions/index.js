// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_fAVOURITES = 'REMOVE_FAVOURITES';
export const SWITCH_TABS = 'SWITCH_TABS';

// action creators
export function addMovies(movies) {
    return {
        type : ADD_MOVIES,
        movies
    }
}

export function addFavourite(movie) {
    return {
        type : ADD_TO_FAVOURITES,
        movie
    }
}

export function removeFavourite(movie) {
    return {
        type : REMOVE_fAVOURITES,
        movie
    }
}

export function switchTabs () {
    return {
        type : SWITCH_TABS
    }
}