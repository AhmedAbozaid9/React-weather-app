import React from 'react'

const WeatherCard = ({loc,temp,icon}) => {
  return (
    <div className='card'>
      <img src= {`../images/icons/${icon}.png`} alt="weather icon" />
    </div>
  )
}

export default WeatherCard