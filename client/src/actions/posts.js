import {
    FETCH_ALL,
    CREATE,
    UPDATE,
    DELETE,
    LIKE,
} from '../constants/actionTypes'
import * as api from '../api/index.js'

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.error(
            'Error fetching posts:',
            error.response?.data || error.message,
        )
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({ type: CREATE, payload: data })
        return data // Useful for handling success messages
    } catch (error) {
        console.error(
            'Error creating post:',
            error.response?.data || error.message,
        )
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({ type: UPDATE, payload: data })
        return data
    } catch (error) {
        console.error(
            'Error updating post:',
            error.response?.data || error.message,
        )
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id)
        dispatch({ type: LIKE, payload: data })
    } catch (error) {
        console.error(
            'Error liking post:',
            error.response?.data || error.message,
        )
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.error(
            'Error deleting post:',
            error.response?.data || error.message,
        )
    }
}
