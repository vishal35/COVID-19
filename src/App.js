import React from "react";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import { style } from "@material-ui/system";
import WorldMeter from "./components/World/WorldMeter";

class App extends React.Component {
  state = {
    data: {},
    country: ""
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData
    });
  }

  handleCountryChange = async country => {
    const fetchedCountryData = await fetchData(country);
    this.setState({
      data: fetchedCountryData,
      country: country
    });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />

        <CountryPicker handleCountryChange={this.handleCountryChange} />

        <Chart data={data} country={country} />

        <WorldMeter />
      </div>
    );
  }
}

export default App;
