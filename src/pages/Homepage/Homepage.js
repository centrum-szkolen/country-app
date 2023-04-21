import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
  };

  const sortBy = (e) => {
    const mode = e.target.value;
    let sortedData;
    console.log(mode);
    switch (mode) {
      case "population-asc":
        
          sortedData = [...countries].sort((a, b) => {
            if (a.population > b.population) return 1;
            else if (a.population < b.population) return -1;
            else return 0;
          })
        
        break;
      case "population-desc":
        setCountries(
          countries.sort((a, b) => {
            if (a.population > b.population) return -1;
            else if (a.population < b.population) return 1;
            else return 0;
          })
        );
        break;
      default:
        console.log(123);
        break;
    }
  };

  console.log(countries);

  return (
    <div>
      <h1>All Countries</h1>

      <select onChange={sortBy}>
        <option value="population-asc">
          Sortuj po liczbie ludności rosnąco
        </option>
        <option value="population-desc">
          Sortuj po liczbie ludności malejąco
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
