import React, { useEffect, useState } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";

import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchApi();
  }, [setFetchedCountries]);

  return (
    <React.Fragment>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={e => handleCountryChange(e.target.value)}
        >
          <option value="global">global</option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </React.Fragment>
  );
};

export default CountryPicker;
