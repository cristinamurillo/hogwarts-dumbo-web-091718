import React from 'react'

const HogDetails = props => { 

    let weightString = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    
    return(
        <div className="details">
        <h5>Details:</h5>
        <ul>
            <li>Weight:{props.hog[weightString]}</li>
            <li>Specialty:{props.hog.specialty}</li>
            <li>Highest medal acheived:{props.hog['highest medal achieved']}</li>
        </ul>
        </div>
    )

}

export default HogDetails