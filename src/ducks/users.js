import axios from 'axios';

const initialState = {
    user: {},
    posts: [],
    comments: []
}

const GET_USER_INFO = 'GET_USER_INFO';
const GET_POSTS = 'GET_POSTS';
const GET_POST = 'GET_POST';
const GET_COMMENTS = 'GET_COMMENTS';
const EMPTY_POSTS = 'EMPTY_POSTS';

export function getUserInfo() {
    const userData = axios.get('/auth/me')
        .then(res => {
            return res.data
        })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function postPull(catId) {
    const post_info = axios.get(`/categories/${catId}`)
        .then(response => {
            // console.log(response.data)
            return response.data
        })
    return {
        type: GET_POSTS,
        payload: post_info
    }
}

export function postClick(op_id) {
    const post_info = axios.get(`/categories/posts/${op_id}`)
        .then(response => {
            // console.log(response.data)
            return response.data
        })
    return {
        type: GET_POST,
        payload: post_info
    }
}

export function commentsPull(op_id) {
    const comments_info = axios.get(`/comments/${op_id}`)
        .then(response => {
            // console.log(response)
            return response.data
        })
    return {
        type: GET_COMMENTS,
        payload: comments_info
    }
}

export function emptyPosts() {
    return {
        type: EMPTY_POSTS,
        payload: []
    }
}


export default function reducer(state = initialState, action) {
    // console.log(action)
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })

        case GET_POSTS + '_FULFILLED':
            // console.log(action.payload)
            return Object.assign({}, state, { posts: action.payload })

        case GET_POST + '_FULFILLED':
            return Object.assign({}, state, { posts: action.payload })

        case GET_COMMENTS + '_FULFILLED':
            // console.log(action.payload)
            return Object.assign({}, state, { comments: action.payload })

        case EMPTY_POSTS:
            return Object.assign({}, state, { posts: action.payload })

        default:
            return state;
    }
}