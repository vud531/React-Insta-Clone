import React, { Component } from 'react';
import './PostsPage.css';
import PropTypes from 'prop-types';
import dummyData from  './../../dummy-data';

import SearchBar from './SearchBar/SearchBar';
import PostContainer from './PostContainer/PostContainer';
import CommentForm from './CommentForm/CommentForm';
import styled, { css } from 'styled-components';

class PostsPage extends Component {
  constructor(){
    super();
    this.state = {
      currentUser: JSON.parse(window.localStorage.currentUser),
      dummyData: [],
      newComments: [],
      searchKey: "",
      foundResults: []
    }
  }

  componentDidMount() {
    // console.log('hi');
    this.setState({dummyData: dummyData});
  }
  render() {

    const data = this.state.foundResults.length > 0 ? this.state.foundResults : this.state.dummyData;
    if (data === 0) {
      return <div>Stay Tuned - Fetching Data</div>;
    }
    return (
      <Page>
        <Header>
          <SearchBar
          value={this.state.searchKey}
          onSearchInputChange={this.onSearchInputChange} />
        </Header>
  
        <Board className="posts">
          {data.map((post, index) => (
            
            <PostCard className="post" key={index}>
  
              <PostContainer
              id={index}
              postProps={post}
              like={this.like} />
              
              <CommentForm 
              id={index}
              newComment={this.state.newComments[index] ? this.state.newComments[index].text : ""}
              onCommentInputChange={this.onCommentInputChange}
              addComment={this.addComment} />
            </PostCard>)
          )}
        </Board>
      </Page> 
    );
  }

  onCommentInputChange = e => {
    e.preventDefault();
    // console.log(e.target.parentElement.id);
    const index = e.target.parentElement.id;
    const text = e.target.value;
    const newComments = this.state.newComments
    newComments[index] = 
    { 
      // postId: index, 
      username: this.state.currentUser.username, 
      text: text
    }

    this.setState({newComments: newComments});
  }

  addComment = e => {
    e.preventDefault()
    const index = e.target.id;
    if (this.state.newComments[index]) {
      const newComment = this.state.newComments[index];
      const data = this.state.dummyData;
      const comments = Array.from(this.state.newComments);
      comments[index] = null;
      data[index].comments.push(newComment);
  
      this.setState(
        {
          dummyData: data,
          newComments: comments 
        });
    } else {
      return;
    }

  }

  like = e => {
    e.preventDefault()
    const index = e.target.parentElement.id;
    const data = this.state.dummyData;

    // Check to see if liked posts contain this post...
    const currentUserInfo = this.state.currentUser;
    const newLikedPosts = currentUserInfo.likedPosts.filter(postId => parseInt(postId) === index);
    if (currentUserInfo.likedPosts.length === newLikedPosts.length) // ... if user has not liked this post
    {
      currentUserInfo.likedPosts.push(index); 
      data[index].likes++;
    } else { // ... if user already liked this post
      currentUserInfo.likedPosts = newLikedPosts; 
      data[index].likes--;
    }
    console.log(currentUserInfo);
    this.setState(
      {
        dummyData: data,
        currentUser: currentUserInfo
      });

      
  }

  componentDidUpdate = props => {
    console.log("update", props);
  }

  onSearchInputChange = e => {
    // console.log(e.target.value);
    const key = e.target.value;
    let results = this.state.foundResults;
    results = this.state.dummyData.filter(post => post.username.includes(key)); 
    this.setState({
      searchKey: key,
      foundResults: results
    })
  }


}

// const PostsPage = props => {

// }

export default PostsPage

const card_spacing = 15;

export const Header = styled.header`
width: 100%;
`;

export const Post = styled.li`
width: 100%;
list-style: none;
margin: auto;
box-sizing: border-box;
padding: 0px;
background-color: #efeff1;
position: relative;
top: 50px;`;

export const PostCard = styled.li`
max-width: 400px;
background-color: #f7f7f7;
border-radius: ${card_spacing}px;
box-shadow: 0px 2px 2px 0px #f4f8fcad;
border: none;
width: 100%;
margin: 15px;
box-shadow: 0 5px 5px 1px #8080801c;
`;
export const Board = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  padding-top: 65px;
  justify-content: space-evenly;
  align-items: center;
`;
export const Page = styled.div`;

`;