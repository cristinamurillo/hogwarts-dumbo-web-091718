import React from 'react'
import HogDetails from './HogDetails'


class HogTile extends React.Component {
    
    state = {
        detailsShow: false
    }

    clickHandler = event => {       
        this.setState({
            detailsShow: !this.state.detailsShow
        })
    }
    
    
    render(){
        
        return(
            <div onClick ={this.clickHandler} id={this.props.hog.name} className="card">
                <div className="image">
                    <img src = {require(`../hog-imgs/${this.props.hog.image_name}`)} alt="hog pic"/>
                </div>
                <div className="content">
                    <h4>{this.props.hog.name}</h4>
                    {this.state.detailsShow ? <HogDetails hog={this.props.hog} /> : null}
                </div>
            </div>
            
        )
    }
}

export default HogTile