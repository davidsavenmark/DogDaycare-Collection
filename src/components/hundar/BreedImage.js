import React, {Component} from "react";
import './breed-image.css';





class BreedImage extends Component{
    state ={
        imageUrl: require('../../assets/background5.png'),
        selectedDog: null
    }
    componentDidUpdate(){
        if(this.props.breed !==this.state.selectedDog){
            this.setState({
                selectedDog: this.props.breed
            });
            this.fetchImage();
        }
    }
    fetchImage=async()=>{
        const response = await fetch(`https://dog.ceo/api/breed/${this.props.breed}/images/random`);
        const data = await response.json();
        const imageUrl = data.message;
        this.setState({
            imageUrl: imageUrl
        });
    }

    render(){
        return(
            <div className="image-container">
                <img className="image-card"alt="Our dogs"src={this.state.imageUrl}/>
            </div>
        );
    }
}
export default BreedImage;