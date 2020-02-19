const initState = {
    posts : [{ id : '1' , title : 'I am the POST', body : 'Well the body might not be impressive but the mind is really something'},
    { id : '2' , title : 'I am the POST', body : 'Well the body might not be impressive but the mind is really something'},
    { id : '3' , title : 'I am the POST', body : 'Well the body might not be impressive but the mind is really something'}]
}

function rootReducer(state = initState, action){
    
    if(action.type === 'DELETE_POST') {

        var newPosts = state.posts.filter( post =>{ return post.id !== action.id } )

        return {

            ...state,
            posts : newPosts

        }
    }

    return {
        posts : state.posts
    }
}

export default rootReducer; 