import React, { Component } from 'react'
import './App.css';
import BreedImage from './components/hundar/BreedImage';
import Select from './components/select/Select';
import Menu from './components/menu/Menu';



class App extends Component {
    state= {
        dogsList: null,
        selectedDog: null,
        error: false


    }
    componentDidMount(){
        this.fetchAllDogs();
    }

    fetchAllDogs= async()=> {
        try {//Try to get data
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        if(response.ok){//check if status code is 200
            const data = await response.json();
            this.setState({
                dogsList: Object.keys(data.message)
            })

        }else{
            this.setState({
                error: true
            })
            alert('Cannot display data')
        }
        } catch (e){// code will jump here if there is a network problem
            this.setState({
                error: true
            })
            alert('Cannot display data')
        }
        }
        selectHandler =(breed)=>{
            this.setState({
                selectedDog: breed
            })
        }
    render(){
        console.log(this.state.selectedDog);
        return ( 
            <div className="App">
                <Menu/>
                <Select dogsList={this.state.dogsList}onSelect={this.selectHandler}isError={this.state.error}/>
                <BreedImage breed={this.state.selectedDog}/>

            </div>
        );
    }
}



export default App;

