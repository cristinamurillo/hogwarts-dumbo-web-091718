import React from 'react';
import Form from './Form'
import HogList from './HogList'



class HogTileCont extends React.Component{

    state = {
        displayHogs: this.props.hogs
    }
    
    formHandler = (event) => {
        if(event.target.value === "none"){
            this.setState({
                displayHogs: this.props.hogs
            })
        } else {
            this.sortPigsArray(event.target.value)
        } 
 
    }

    sortPigsArray = (keyName) => {
        let sortableArray = []
        for(let hog of this.props.hogs){
            for(let key in hog){
                if(key.includes(keyName)){
                    sortableArray.push([hog[key], hog])
                }
            }
        }
        //fix for weight
        sortableArray.sort((a,b)=> {
            if (a[0] < b[0]) return -1
            else if (a[0] > b[0]) return 1
            return 0
        })

        this.setState({
            displayHogs: sortableArray.map(hogInfo => hogInfo[1])
        })
    }

    render() {
        return(
        <div>
            <Form formHandler ={this.formHandler} />
            <HogList hogs={this.state.displayHogs}/>
       </div>
        )
    }
}


export default HogTileCont