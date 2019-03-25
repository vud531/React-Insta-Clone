import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import PropTypes from 'prop-types';
import DummyData from  './dummy-data'
import dummyData from './dummy-data';
class App extends Component {
  constructor(){
    super();
    this.state = {
      dummyDate: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <PostContainer/>
      </div>
    );
  }
}

export default App;
