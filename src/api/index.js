import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000'})

export const fetchReviews = () => API.get('/')

export const fetchReviewsBySearch = (searchQuery) => API.get(`/?searchQuery=${searchQuery.search || 'none'}`)

export const createReview = (postData) => API.post('/review', postData)