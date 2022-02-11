import { FETCH_ALL, CREATE, UPDATE } from '../constants/actionTypes'
import * as api from '../api/index.js'

export const getReviews = () => async (dispatch) => {
    try {
        const { data } = await api.fetchReviews()

        dispatch({ type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const getReviewsBySearch = (searchQuery) => async (dispatch) => {
    try {
        const { data: { data } } = await api.fetchReviewsBySearch(searchQuery)

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const createReview = (review) => async (dispatch) => {
    try {
        const { data } = await api.createReview(review)

        dispatch({ type: CREATE, payload: data})
    } catch (error) {
        console.log(error)
    }
}