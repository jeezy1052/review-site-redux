import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { getReviews, getReviewsBySearch } from '../actions/reviews'
import Card1 from './Card1'


import './DatabaseStyles.css'





const Database = () => {
  

  // const dispatch = useDispatch()
  // const [search, setSearch] = useState('')
  
 
  
  // const reviews = useSelector((state) => state.reviews)

  
  // useEffect(() => {
  //   setReviewer(reviews)
  //   dispatch(getReviews());
  // }, [dispatch]);
  
 
  
  const [listOfReviews, setListOfReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  
  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then((response) => {
        setListOfReviews(response.data)
      })
      .catch(() => {
        console.log('ERROR.')
      })
    
  }, [])


  
  console.log(listOfReviews)
 
  
  

  return (
  <div className='database'>
    <div className='container'>
      <div className='content'>
        {/* {reviews.map((review) => (
          <Card1 review={review} key={review._id} />
        ))}   */}
        {listOfReviews.filter((reviews) => {
          if(searchTerm == "") {
            return reviews
          } else if(reviews.strainName.toLowerCase().includes(searchTerm.toLowerCase())) {
            return reviews
          } else if(reviews.rating.includes(searchTerm)) {
            return reviews
          } else if(reviews.consumptionMethod.toLowerCase().includes(searchTerm.toLowerCase())) {
            return reviews
          }
        }).map((reviews, key) => (
          
          <Card1 reviews={reviews} key={key} />
          
        ))}
      </div>
      <div className='filter-container'>
        <h4>Search Review By Rating</h4>
        <div className='form-container'>
            <label>Filter by Strain</label>
            <input name="search" type='text' placeholder='Strain name'  onChange={(e) => setSearchTerm(e.target.value)} />
          <form>
            <label>Filter by Consumption Method</label>
            <input type='text' placeholder='Consumption Method'/>
            <label>Filter by Rating</label>
            <input type='text' placeholder='Rating'/>
            <button >Search</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Database
