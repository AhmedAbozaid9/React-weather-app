import React from "react";
import axios from "axios";

class WeatherDisplay extends React.Component {
  state = { place: "", temp: null };

  async getWeather() {
    const key = "5011a2f8dc2263d89aa88739a65bd335";
    const result = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&appid=${key}`
    );
    const data = await result.data;
    this.setState({
      place: data.name,
      tempF: data.main.temp,
      tempC: (data.main.temp - 32) * 5/9,
      icon: data.weather[0].icon,
    });
  }

  componentDidMount() {
    this.getWeather();
  }

  render() {
    return <div>{this.state.temp}</div>;
  }
}
export default WeatherDisplay;
