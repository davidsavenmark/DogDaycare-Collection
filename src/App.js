import React, { Component } from 'react'
import './App.css';
import Menu from './components/menu/Menu';



class App extends Component {
    state= {
        

    }
    
    render(){
        console.log(this.state.selectedDog);
        return ( 
            <div className="App">
                <Menu/>
            </div>
        );
    }
}

export default App;