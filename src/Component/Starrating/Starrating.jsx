import React from 'react'
import ReactStars from 'react-star-rating-component'
const Starrating = ( rating ) => {
    return (
        <>

            <ReactStars 
                size={15}
                count={10}
                    value={4.5}
                    isHalf={true} 
                 />
        </>
    )
}

export default Starrating
