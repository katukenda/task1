import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const setCards = (showMore) => {
    
    return {
        type: actionTypes.SHOW_MORE,
        showMore: showMore
    }
}

export const setPosts = (posts) => {
    return {
        type: actionTypes.SHOW_POST,
        posts: posts
    }
}

export const setData = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
          
            dispatch(setPosts(response.data.slice(0,12)));
            dispatch(setCards(response.data.slice(12,37)));
            
        });
} 
    }


