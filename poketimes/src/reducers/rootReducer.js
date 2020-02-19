const initState = {
    posts : [{ id : '1' , title : 'I am the POST', body : 'Well the body might not be impressive but the mind is really something'},
    { id : '2' , title : 'I am the POST', body : 'Well the body might not be impressive but the mind is really something'},
    { id : '3' , title : 'I am the POST', body : 'Well the body might not be impressive but the mind is really something'}]
}

function rootReducer(state = initState, action){
    return state;
}

export default rootReducer; 