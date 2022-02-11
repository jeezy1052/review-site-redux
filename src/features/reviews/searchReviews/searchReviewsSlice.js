// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// export const getSearchReviews = createAsyncThunk(
//     "reviews/getSearchReviews",
//     async () => {
//         const response =  await fetch('http://localhost:5000/')
//         const formatRes = await response.json() 
//         return formatRes
//     }
// )



// export const getSearchReviewsSlice = createSlice({
//     name: "searchReview",
//     initialState: {
//         searchReviews: [],
//     },
//     extraReducers: {
//         [getSearchReviews.pending]: (state, action) => {
//             state.status = "loading"
//         },
//         [getSearchReviews.fulfilled]: (state, action) => {
//             state.status = "success"
//             state.searchReviews = action.payload
//         },
//         [getSearchReviews.rejected]: (state, action) => {
//             state.status = "failed"
//         }
//     }
// })

// // export const {addReviews} = reviewsSlice.actions
// // export const getAllReviews = (state) => state.reviews.reviews

// export default getSearchReviewsSlice.reducer