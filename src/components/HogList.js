import React from 'react'
import HogTile from './HogTile'


const HogList = (props) => {
    let hogList = props.hogs.map(hog => 
        <HogTile hog={hog} />
    )

    return(
        <div className="ui three stackable cards">
            {hogList}
        </div>
    )
}

export default HogList