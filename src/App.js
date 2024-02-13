import React,{ useEffect, useState } from "react";
import axios from "axios"
import Coins from "./compoents/Coins.js";
import Navbar from "./compoents/Navbar.js";





function App() {

  const[coins,setcoins]=useState([])
  const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en'

  useEffect(()=>{
    axios.get(url).then((response)=>{
      setcoins(response.data)
      console.log(response.data[0])
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
   <>

   <Navbar/>
   <Coins coins={coins}/>
   
   </>
  );
}

export default App;
