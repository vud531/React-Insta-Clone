import React, { Component } from 'react';
import './App.css';

import dummyData from  './dummy-data'
import PostsPage from './components/PostsPage/PostsPage';
import withAuthenticate from './components/authentication/Authentication'

class App extends Component {
  constructor(){
    super();
  }

  componentDidMount() {
    // console.log('hi');
    this.setState({dummyData: dummyData});
  }
  render() {

    return (
    <PostsPage />
    );
  }
}



export default App;
