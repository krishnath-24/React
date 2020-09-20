import {ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_fAVOURITES, SWITCH_TABS} from '../actions';

const initialMoviesState = {
    list : [],
    favourites : [],
    moviesTab : true
}

export default function movies(state=initialMoviesState,action) {

    switch(action.type) {

        case ADD_MOVIES : {
            return {
                ...state,
                list : action.movies
            }
        }

        case ADD_TO_FAVOURITES : {
            return {
                ...state,
                favourites : [action.movie, ...state.favourites]
            }
        }

        case REMOVE_fAVOURITES : {

            const favourites = state.favourites.filter((movie) => {
                return movie.title !== action.movie.title;
            })

            return {
                ...state,
                favourites
            }
        }

        case SWITCH_TABS : {
            return {
                ...state,
                moviesTab : !state.moviesTab
            }
        }

        default : {
            return state;
        }
    }

}