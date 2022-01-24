import React from "react";
import ReactDom from "react-dom";
import "./CSS/index.css";
import Spinner from "./Components/Spinner";
import WeatherDisplay from "./Components/WeatherDisplay";

class App extends React.Component {
  state = { lat: null, lon: null, errorMessage: "" };

  componentDidMount() {
    //get the user location
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  renderContent() {
    if (this.state.lat) {
      return <WeatherDisplay lat={this.state.lat} lon={this.state.lon} />;
    } else if (this.state.errorMessage) {
      return <div>{this.state.errorMessage}</div>;
    } else {
      return <Spinner />;
    }
  }
  render() {
    return this.renderContent();
  }
}
ReactDom.render(<App />, document.getElementById("root"));
