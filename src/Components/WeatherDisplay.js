import React from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

class WeatherDisplay extends React.Component {
  state = { loc: "", temp: null };

  async getWeather() {
    const key = "5011a2f8dc2263d89aa88739a65bd335";
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&appid=${key}`
    );
    const data = await result.data;
    console.log(data);
    this.setState({
      loc: data.name,
      temp: Math.round(data.main.temp - 273.15), //converting from kelvin to celcius
      icon: data.weather[0].icon,
    });
  }

  componentDidMount() {
    this.getWeather();
  }

  render() {
    return (
      <WeatherCard
        loc={this.state.loc}
        temp={this.state.temp}
        icon={this.state.icon}
      />
    );
  }
}
export default WeatherDisplay;
