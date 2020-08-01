import *  as actionTypes from '../actions/actionTypes';


const initialState = {
    showMore: [],
    posts: [],
    
}

const reducer = (state= initialState, action) => {
   
    switch(action.type) {
        case actionTypes.SHOW_MORE:
            return{
                ...state,
                showMore: action.showMore
            };
        case actionTypes.SHOW_POST:
            return{
                ...state,
                posts: action.posts
            };
        default: return state;
    }
}


export default reducer;