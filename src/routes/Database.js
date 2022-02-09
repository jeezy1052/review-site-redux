import React, { useEffect, useState } from 'react'

import Card from '../components/Card/Card'
import axios from 'axios'
import { addReviews } from '../features/reviews/reviewsSlice'
import { getAllReviews } from '../features/reviews/reviewsSlice'
import './DatabaseStyles.css'




const Database = () => {
   
  const [listOfReviews, setListOfReviews] = useState([]);
  // const reviews = useSelector(getAllReviews)
  

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then((response) => {
        setListOfReviews(response.data)
      })
      .catch(() => {
        console.log('ERROR.')
      })
    
  }, [])
  
  

  // useEffect(() => {
    
    
  //      axios.get('http://localhost:5000/database')
  //       .then((response) => {
  //         setListOfReviews(response.data)
  //         console.log(response.data)
  //       })
  //       .catch((error) => {
  //         console.log("Error:", error)
  //       })

      
  //     // dispatch(addReviews(response.data))
      
  //   }

    
  // }, [])

  
  

  return (
  <div className='database'>
    <div className='container'>
      <div className='content'>
        {/* <h1>Browse Our Database</h1> */}
        {listOfReviews.map((reviews, key) => (
          <Card reviews={reviews} key={key} />
        ))}
        
        
        <Card  />
        <Card />
        <Card />
      </div>
      <div className='filter-container'>
        <h4>Search Review By Rating</h4>
        <div className='form-container'>
          <form>
            <label>Filter by Strain</label>
            <input type='text' placeholder='Strain name'/>
            <label>Filter by Consumption Method</label>
            <input type='text' placeholder='Consumption Method'/>
            <label>Filter by Rating</label>
            <input type='text' placeholder='Rating'/>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Database
