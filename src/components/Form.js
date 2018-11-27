import React from 'react'

const Form = props => {
    return(
        <div>
            <h4>Filter by: </h4>     
                <select onChange = {props.formHandler}>
                    <option value="none">None</option>
                    <option value= "name">Name</option>
                    <option value ="weight">Weight</option>
                </select>
           
        </div>
    )
}

export default Form