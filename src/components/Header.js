import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='headerContainer'>
            <div className='logo'>
    
            </div>
            <div className='searchbarContainer'>
                <input type='text' className='searchbar' placeholder='search for anything'></input>
            </div>
            <div className='links'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>
        </div>
    )
}

export default Header
