import React, { Component } from 'react'
import './App.css';
import Menu from './components/menu/Menu';
import Dogs from './components/dogs/Dogs';
import DogInfo from './components/dogInfo/DogInfo';
import { Route, HashRouter as Router, Link, Switch } from "react-router-dom"




class App extends Component {
    
    
    render(){
        
        return ( 
            <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <main>
                    <Switch>
                    <Route path="/" exact><Menu/></Route>
                    <Route path="/Dogs"><Dogs/></Route>
                    <Route exact path="/dog/:id" component={Dogs}/>
                    <Route path="/DogInfo/:chipNumber"><DogInfo/></Route>
                    
                    
                    
                    </Switch>
                    
                
                
                
                </main>

                
            </div>
            </Router>
        );
    }
}



export default App;

