// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// export const getReviews = createAsyncThunk(
//     "reviews/getReviews",
//     async () => {
//         const response =  await fetch('http://localhost:5000/')
//         const formatRes = await response.json() 
//         return formatRes
//     }
// )



// export const reviewsSlice = createSlice({
//     name: "reviewers",
//     initialState: {
//         reviews: [],
//     },
//     extraReducers: {
//         [getReviews.pending]: (state, action) => {
//             state.status = "loading"
//         },
//         [getReviews.fulfilled]: (state, action) => {
//             state.status = "success"
//             state.reviews = action.payload
//         },
//         [getReviews.rejected]: (state, action) => {
//             state.status = "failed"
//         }
//     }
// })

// // export const {addReviews} = reviewsSlice.actions
// // export const getAllReviews = (state) => state.reviews.reviews

// export default reviewsSlice.reducer