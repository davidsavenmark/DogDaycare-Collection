import React, {Component} from "react";
import './breed-image.css';

class BreedImage extends Component{

    render(){
        return(
            <div className="image-container">
                <img className="imgage-card"alt="dog"/>
            </div>
        );
    }
}
export default BreedImage;