export default function movies(state=[],action) {

    return action.type === 'ADD_MOVIES' ? action.movies : state;
    
}