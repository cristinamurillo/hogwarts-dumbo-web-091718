import React from 'react'
import HogTile from './HogTile'


const HogList = (props) => {
    let hogList = props.hogs.map(hog => 
        <HogTile hog={hog} />
    )

    return(
        <div>
            {hogList}
        </div>
    )
}

export default HogList