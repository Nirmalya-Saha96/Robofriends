import React, {Component} from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';


class App extends Component{
    constructor(){
        super()
        this.state={
            robots: [],
            searchfeild: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> {
           return response.json();
        })
        .then(users=>{
            this.setState({robots: users})
        });        
    }

    onSearchChange = (event) => {
        this.setState({searchfeild: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1 className='tc'>Loading</h1>
        }else{
            console.log(filteredRobots);
            return(
                <div className='tc'>
                    <h1>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                       <CardList robots={filteredRobots}/>
                    </Scroll>
                    
                 </div>
              );
        }
       
    }
    
}

export default App;