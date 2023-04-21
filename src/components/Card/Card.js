import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({country}) => {

  if(!country) return;

  const originalName = country.name.official;
  const generateName = originalName.length > 25 ? originalName.slice(0,25) + "..." : originalName;

  return (
    <Link to={`/country/${country.name.common}`} className={styles.box}>
        <h2>{generateName}</h2>
        <img src={country.flags.svg} alt={country.flags.alt}/>
    </Link>
  )
}

export default Card;