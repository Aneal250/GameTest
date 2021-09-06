import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './Components/Cards';
import './App.css';

function App() {

  // const [ game, setGame ] = useState()


useEffect(() => {

  const headers = { 
    'Authorization': 'l0lawtvv-94bv-oi4d-u808-5ubz',
    'Access-Control-Allow-Credentials': true }

  let url = 'https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter'
    axios.get(url, {headers})
    .then((res)=> {
      console.log('response', res)
    })
    .catch((err) => {
      console.log('err', err)
    })
}, [])


  return (
    <div className="App">
      <Cards/>
    </div>
  );
}

export default App;
