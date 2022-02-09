import React from 'react'
import './HeroStyles.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='content'>
          <h1>Top</h1>
          <h1 className='blue'>Rated</h1>
          <h1>Reviews</h1>
          <div>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
