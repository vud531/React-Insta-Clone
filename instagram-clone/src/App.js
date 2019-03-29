import React, { Component } from 'react';
import './App.css';

import dummyData from  './dummy-data'
import PostsPage from './components/PostsPage/PostsPage';
import withAuthenticate from './components/authentication/Authentication'
import Login from './components/Login/Login'



class App extends Component {
  constructor(){
    super();
  }

  // componentDidMount() {
  //   // console.log('hi');
  //   this.setState({dummyData: dummyData});
  // }
  render() {
    // const postsPage = () => return (<PostsPage />) 
    const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);
    return <ComponentFromWithAuthenticate />;
  }
}



export default App;
