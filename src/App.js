import React, {Component} from 'react';
import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component{
  constructor(){
    super()
    this.state={
      robots:robots,
      SearchField:'',
    }
  }
  onSearchChange = (event) => {
    this.setState({ SearchField: event.target.value })

  }
  render(){
    const filteredRob = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
    })
  return(

    <div className='text-center'>
    <h1>RoboFriends</h1>
    <SearchBox searchCh={this.onSearchChange}/>
  <CardList robots={filteredRob}/>
  </div>
);
}
}
export default App;
