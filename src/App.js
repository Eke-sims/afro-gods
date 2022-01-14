import React from 'react';
import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import {useEffect, useState} from 'react'
import axios from 'axios';
import Punklist from './components/Punklist';
import Main from './components/Main';


function App() {
  const [punklistData, setPunkListData] = useState([])

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData= await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0xe5412D85f9a4b8125Cf2363B9018F8611ebBF812&order_direction=asc'
        )
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }

    return getMyNfts()
  }, [])



  return (
    <div className='app'>
      <Header />
      <Main />
      <Punklist punklistData={punklistData}/>
    </div>
      
  )
}

export default App;
