import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from './Country.module.css';

const Country = () => {
  const [current, setCurrent] = useState();
  const {name} = useParams();




  useEffect(()=>{
     getCountryByName();
  },[])

  const getCountryByName = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await response.json();
    setCurrent(data[0]);
  };

  if(!current) return "Loading...."

 const currencies = Object.entries(current.currencies).map(v => v[0]);
 const languages = Object.keys(current.languages);

 console.log(current);

  return (
    <div className={styles.box}>
        <img src={current.coatOfArms.svg} alt={current.name.official}/>
        <h1>{current.name.official}</h1>
        <h3>Główna waluta {current.currencies[currencies[0]].name}</h3>
        <h3>Główny język {current.languages[languages[0]]}</h3>

        {currencies.map(val => <p>{current.currencies[val].name}</p>)}
    </div>
  )
}

export default Country