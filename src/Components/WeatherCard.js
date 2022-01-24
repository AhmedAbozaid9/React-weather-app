import React from 'react'
import '../CSS/WeatherCard.css'

const WeatherCard = ({loc,temp,icon,description,ready}) => {
  if(ready){
    return (
      <div className="card">
        <img src={require(`../images/icons/${icon}.png`)} alt="weather icon" />
        <h1 className="temp">{temp} &#8451;</h1>
        <h2 className="location">{loc}</h2>
        <h3 className="description">{description}</h3>
      </div>
    );
  }
  return null
}

export default WeatherCard