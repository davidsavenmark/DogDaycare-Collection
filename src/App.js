import React, { Component } from 'react'
import './App.css';
import './components/dogs/dogs.css'
import Menu from './components/menu/Menu';
import Dogs from './components/dogs/Dogs';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"




class App extends Component {
    state= {
        

    }
    
    render(){
        
        return ( 
            <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <main>
                    <Switch>
                    <Route path="/" exact><Menu/></Route>
                    <Route path="/Dogs"><Dogs/></Route>
                    <Route exact path="/dog/:id" component={Dogs}/>
                    </Switch>
                    
                
                
                
                </main>

                
            </div>
            </Router>
        );
    }
}



export default App;

