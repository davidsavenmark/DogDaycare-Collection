import React, { Component } from 'react';
import './dogInfo.css';
import { Link, withRouter} from "react-router-dom";

class DogInfo extends Component {
  
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
      const chipNumber  = this.props.match.params.chipNumber;
      console.log(chipNumber)
  
      return(
        <div className="container">
          <div className="jumbotron">
          <h1 className="display-1">Dailydog </h1>
          </div>
          <div className="users">

          {names .filter((user) => {
              if(user.chipNumber.toLowerCase() === chipNumber.toLowerCase())
              {return user} 
              else {
              return null}
            })
      
            .map((user) => (
              <div className="card" key={user.chipNumber}>
              <img src={user.img} className="card-img-top" alt={`${user.name} img`} />
              <div className="card-body">
                <h5 className="card-Name">Name: {user.name}</h5>
                <h5 className="card-DogsAge">Age: {user.age}</h5>
                <h5 className="card-Sex">Sex: {user.sex}</h5>
                <h5 className="card-Breed">Breed: {user.breed} </h5>
                <p className="card-OwnersName">Owners name is: {user.owner.name} {user.owner.lastName}</p>
                <p className="card-OwnersPhones">{user.owner.name}s Number: {user.owner.phoneNumber}</p>

              </div>
              </div>
  
            ))}
                </div>
            </div>
      )
    }
   
  }
  export default withRouter(DogInfo);

 


