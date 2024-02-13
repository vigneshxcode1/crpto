import React from 'react'
import "./Coin.css"
const CoinItem = (props) => {
    return (
        <div className='col-row'>

            <p>{props.coins.market_cap_rank}</p>
            <div className='img-sym'>
                <img src={props.coins.image} alt=''></img>
                <p>{props.coins.symbol.toUpperCase()}</p>
            </div>
            <p>{props.coins.current_price.toLocaleString()}</p>
            <p>{props.coins.price_change_24h.toFixed(2)}</p>
            <p>{props.coins.total_volume.toLocaleString()}</p>
            <p>{props.coins.market_cap.toLocaleString()}</p>
        </div>
    )
}


export default CoinItem