import React, { useEffect, useState } from "react";
import { fetchAllCountry } from "../../api";

const WorldMeter = () => {
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    const allCountry = async () => {
      setCountryData(await fetchAllCountry());
    };
    allCountry();
  }, []);
  return (
    <div>
      <h4>All countries data of COVID-19</h4>
    </div>
  );
};

export default WorldMeter;
