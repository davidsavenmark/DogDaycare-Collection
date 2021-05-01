import './dogs.css';
import React, { Component } from 'react'
import { Link } from "react-router-dom";



class Dogs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      names: []
    
      
    }

  }
  componentDidMount() {
    const url = "https://api.jsonbin.io/b/60882ce55210f622be3b4768";
   
    fetch(url) 
      .then(data => data.json())
      .then(data => this.setState({ names: data.dogs}))
    }
  
  render() {
    const { names } = this.state;

    return(
      <div className="dog-container">
        <div className="jumbotron">
        <h1 className="our-dogs">Our Dogs</h1>
        </div>
        <div className="users">
          {names.map((user) => (
            <Link className="card-dogs" key={user.chipNumber}>
            <img src={user.img} className="image-card" alt={`${user.name} img`} />
            <div className="card-body">
              <div className="dog-title">{user.name} </div>
              <Link href="#" className="about-button" to={"/DogInfo/"+user.chipNumber}>About this dog</Link>
              
            </div>
            </Link>

          ))}
              </div>
          </div>
    )
  }
 
}

export default Dogs;