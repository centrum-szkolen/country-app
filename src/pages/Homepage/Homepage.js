import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./Homepage.module.css";
import { sortBy } from "../../utils/sortBy";

const Homepage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
  };

  console.log(countries);

  return (
    <div>
      <h1>All Countries</h1>

      <select onChange={(e)=>sortBy(e,countries,setCountries)}>
        <option value="population-asc">
          Sortuj po liczbie ludności rosnąco
        </option>
        <option value="population-desc">
          Sortuj po liczbie ludności malejąco
        </option>
        <option value="name-asc">
          Sortuj po nazwie od A do Z
        </option>
        <option value="name-desc">
          Sortuj po nazwie od Z do A
        </option>
      </select>

      <div className={styles.wrapper}>
        {countries.map((item) => (
          <Card key={item.name.common} country={item} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
