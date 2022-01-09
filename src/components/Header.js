import React from 'react'
import './Header.css'
import appLogo from '../assets/weth.png'
import searchicon from '../assets/header/search.png'
import themeicon from '../assets/header/theme-switch.png'

const Header = () => {
    return (
        <div className='headerContainer'>
            <div className='logoContainer'>
                <img src={appLogo} className='appLogo' alt='app logo'/>
            </div>
            <div className='searchbarContainer'>
                <div className='searchbariconContainer'>
                    <img className='searchbaricon' src={searchicon} alt=''/>
                </div>
                <input type='text' className='searchbar' placeholder='Collection, item or user...'></input>
            </div>
            <div className='links'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>
            <div className='themeContainer'>
                <img className='themeicon' src={themeicon} alt=''/>
            </div>
            <div className='btnContainer'>
                <button className='signupbtn'>GET IN</button>
            </div>
        </div>
    )
}

export default Header
