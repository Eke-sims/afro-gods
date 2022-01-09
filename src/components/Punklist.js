import React from 'react'
import CollectionCard from './CollectionCard'
import './punklist.css'

const Punklist = ({punklistData}) => {
    return (
        <div className='punklist'>
            {punklistData.map(punk =>(
                <div>
                    <CollectionCard
                        key={punk.token_id}
                        id={punk.token_id}
                        name={punk.name}
                        traits={punk.traits}
                        image={punk.image_original_url}
                    />
                </div>
            ))}
        </div>
    )
}

export default Punklist
