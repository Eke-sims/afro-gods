import React from 'react'
import './CollectionCard.css'
import weth from '../assets/eth.png'


const CollectionCard = ({id, name, traits, image, alt}) => {
    return (
        <div className='collectionCard'>
            <img className='image' src={image} alt={alt} />
            <div className='name'>
                {name} <div className='id'> •#{id}</div>
            </div>
            <div className='priceContainer'>
                <img className='wethImage' src={weth} alt='' />
                <div className='price'>{traits[0]?.value}</div>
            </div>
        </div>
    )
}
export default CollectionCard