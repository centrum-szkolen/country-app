import React, { useEffect, useState } from 'react'

const Country = () => {
  const [current, setCurrent] = useState();

  useEffect(()=>{
     getCountryByName();
  },[])

  const getCountryByName = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/poland`);
    const data = await response.json();
    setCurrent(data[0]);
  };

  console.log(current)

  return (
    <div>
        <h1>{current.name.official}</h1>
    </div>
  )
}

export default Country