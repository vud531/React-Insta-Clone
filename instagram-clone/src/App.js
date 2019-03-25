import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import PropTypes from 'prop-types';
import DummyData from  './dummy-data'
class App extends Component {
  constructor(){
    super();
    this.state = {
      dummyDate: DummyData.dummyData
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

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string
  })
};
export default App;
