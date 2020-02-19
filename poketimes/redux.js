const {createStore} = Redux;


const initState = {

    todos : [],
    posts : []
}

function myReducer(state = initState,action){
    console.log(state,action);

    if(action.type === 'ADD_TODO') {
        return {
            ...state,
            todos : [...state.todos,action.todo]
        }
    }

    if(action.type === 'ADD_POST'){
        return {
            ...state,
            posts : [...state.posts,action.post]
        }
    }
}

const store = createStore(myReducer);

const one = {type : 'ADD_TODO', todo : 'Get a better life'};
const two = {type : 'ADD_TODO', todo : 'Take care of yourself'};
const three = {type : 'ADD_POST', post : 'MY life is going through a change phase'};

store.dispatch(one);
store.dispatch(two);
store.dispatch(three);

store.subscribe(() => {
    console.log('state updated!');

    console.log(store.getState());
})