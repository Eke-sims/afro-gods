import React from 'react'
import './Header.css'
import appLogo from '../assets/weth.png'
import searchicon from '../assets/header/search.png'

const Header = () => {
    return (
        <div className='headerContainer'>
            <div className='logoContainer'>
                <img src={appLogo} className='appLogo'/>
            </div>
            <div className='searchbarContainer'>
                <div className='searchbariconContainer'>
                    <img className='searchbaricon' src={searchicon}/>
                </div>
                <input type='text' className='searchbar' placeholder='Collection, item or user...'></input>

            </div>
            <div className='links'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>
            <div className='themeContainer'>hi</div>
            <div className='btnContainer'>
                <button>GET IN</button>
            </div>
            
        </div>
    )
}

export default Header
