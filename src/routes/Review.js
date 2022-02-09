import React, { useState } from 'react'
import axios from 'axios'
import './ReviewStyles.css'

const Review = () => {
  const [postData, setPostData] = useState({userName: '', strainName: '', consumptionMethod: '', rating: '', review: ''})

  

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:5000/review', postData)
      .then(() => {console.log('It Sent Successfully')})
      .catch(() => {console.log('It failed to send')})

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
            <input name="userName" type='text' placeholder='Username' onChange={(e) => setPostData({...postData, userName: e.target.value})} />
            <input name="strainName" type='text' placeholder='Strain name' onChange={(e) => setPostData({...postData, strainName: e.target.value})} />
            <div className='select-container'>
            <select name='consumptionMethod' id='consumptionMethod' placeholder='Strain name' onChange={(e) => setPostData({...postData, consumptionMethod: e.target.value})}>
              <option value='' disabled selected hidden>Consumption Method</option>
              <option value='Smoking'>Smoking</option>
              <option value='Vape'>Vape</option>
              <option value='Edible'>Edible</option>
              <option value='Dab'>Dab</option>
            </select>
            <select name='rating' id='rating' onChange={(e) => setPostData({...postData, rating: e.target.value})}>
              <option disabled selected hidden >Rating</option>
              <option value='1'>(1) Skunk</option>
              <option value='2'>(2) Fire</option>
              <option value='3'>(3) Gasoline</option>
              <option value='4'>(4) Dank</option>
              <option value='5'>(5) Hall Of Fame</option>
            </select>
            </div>
            <textarea name="review" rows="4" placeholder='Leave review' onChange={(e) => setPostData({...postData, review: e.target.value})} />
            <button className='form-btn'>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Review
