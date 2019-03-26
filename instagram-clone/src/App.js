import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import PropTypes from 'prop-types';
import dummyData from  './dummy-data'
class App extends Component {
  constructor(){
    super();
    this.state = {
      dummyData: dummyData
    }

    console.log(this.state);

  }
  render() {
    return (
      <div>
        <SearchBar/>
        <ul className="posts">
          {this.state.dummyData.map((post, index) => (
            
            <li key={index}>
              <div className="App">
              <PostContainer postProps={post} />
              </div>
            </li>)
          )}
        </ul>
      </div>
      
    );
  }
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string.isRequired
  })
};
export default App;
