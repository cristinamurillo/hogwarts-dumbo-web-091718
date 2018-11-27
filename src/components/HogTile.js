import React from 'react'


const HogTile = props => {
    return(
        <div>
            <h4>{props.hog.name}</h4>
            <img src = {require(`../hog-imgs/${props.hog.image_name}`)} alt="hog pic"/>
       </div>
    )
}

export default HogTile