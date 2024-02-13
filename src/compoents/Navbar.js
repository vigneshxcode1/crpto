import React from 'react'
import { FaBitcoin } from "react-icons/fa";
import "./Navbar.css"
const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <FaBitcoin className="icon" />
                <h1>coin<span className='purple'> search</span></h1>
            </div>
        </div>

    )
}

export default Navbar