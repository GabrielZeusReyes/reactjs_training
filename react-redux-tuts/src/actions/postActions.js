import { FETCH_POSTS, NEW_POSTS } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
    axios
        .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(res => {
            dispatch({
                type: FETCH_POSTS,
                payload: res.data
            });
        });
};

export const createPosts = postData => dispatch => {
    axios
        .post('https://jsonplaceholder.typicode.com/posts', postData)
        .then(res => {
            dispatch({
                type: NEW_POSTS,
                payload: res.data
            });
        });
};
