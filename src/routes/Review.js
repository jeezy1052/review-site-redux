import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createReview } from '../actions/reviews'
import './ReviewStyles.css'

const Review = () => {
  const [postData, setPostData] = useState({userName: '', strainName: '', consumptionMethod: '', rating: '', review: ''})
  const dispatch = useDispatch()
  
  
  const clear = () => {
    setPostData({userName: '', strainName: '', consumptionMethod: '', rating: '', review: ''})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(createReview({...postData}))
    clear()
    console.log(postData)

  }
  
    


  return (
    <div className='review'>
      <div className='container'>
        <div className='content'>
          <h1>Leave A</h1>
          <h1><span className='blue'>Review</span></h1>
          <h1>Today</h1>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input value={postData.userName} name="userName" type='text' placeholder='Username' onChange={(e) => setPostData({...postData, userName: e.target.value})} />
            <input value={postData.strainName} name="strainName" type='text' placeholder='Strain name' onChange={(e) => setPostData({...postData, strainName: e.target.value})} />
            <div className='select-container'>
            <select value={postData.consumptionMethod} name='consumptionMethod' id='consumptionMethod' placeholder='Strain name' onChange={(e) => setPostData({...postData, consumptionMethod: e.target.value})}>
              <option value='' disabled selected hidden>Consumption Method</option>
              <option value='Smoking'>Smoking</option>
              <option value='Vape'>Vape</option>
              <option value='Edible'>Edible</option>
              <option value='Dab'>Dab</option>
            </select>
            <select value={postData.rating} name='rating' id='rating' onChange={(e) => setPostData({...postData, rating: e.target.value})}>
              <option value='' disabled selected hidden >Rating</option>
              <option value='1'>(1) Skunk</option>
              <option value='2'>(2) Fire</option>
              <option value='3'>(3) Gasoline</option>
              <option value='4'>(4) Dank</option>
              <option value='5'>(5) Hall Of Fame</option>
            </select>
            </div>
            <textarea value={postData.review} name="review" rows="4" placeholder='Leave review' onChange={(e) => setPostData({...postData, review: e.target.value})} />
            <button className='form-btn'>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Review
