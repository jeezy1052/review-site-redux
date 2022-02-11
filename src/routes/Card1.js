import React from 'react'

import '../components/Card/CardStyles.css'
import CardImage from '../assets/piv1 (1).jpg'

const Card1 = ({ reviews }) => {
  
  return (
  <div className='card'>
    <div className='card-container'>
      <div className='card-content'>
        <div className='img-container'>
          <img src={CardImage} />
        </div>
        <div className='card-body'>
        <h5>{reviews.strainName}</h5>
        <h6>Created by: {reviews.userName}</h6>
        <h6 className='consumption-method'>Consumption Method: ({reviews.consumptionMethod})</h6>
        <h6 className='consumption-method'>Rating: ({reviews.rating} stars)</h6>
        <p>{reviews.review}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card1
