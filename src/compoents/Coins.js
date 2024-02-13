import React from 'react'
import CoinItem from './CoinItem'
import "./Coin.css"
const Coins = (props) => {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>no</p>
                <p className='coin-name'>coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>volume</p>
                <p className='hide-mobile'>capital</p>
            </div>
            {props.coins.map(coins=>{
                return(
                    <CoinItem coins={coins}/>
                )
            })}
        </div>

    </div>
  )
}

export default Coins