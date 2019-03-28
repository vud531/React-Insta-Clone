import React, { Component } from 'react';
import './PostsPage.css';
import PropTypes from 'prop-types';
import dummyData from  './../../dummy-data'


import SearchBar from './SearchBar/SearchBar';

// import CommentSection from './CommentSection/CommentSection';
import PostContainer from './PostContainer/PostContainer';
import CommentForm from './CommentForm/CommentForm';

class PostsPage extends Component {
  constructor(){
    super();
    this.state = {
      currentUser: { username: "duc", likedPosts: [] },
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
      <div>
        <SearchBar
        value={this.state.searchKey}
        onSearchInputChange={this.onSearchInputChange} />
  
        <ul className="posts">
          {data.map((post, index) => (
            
            <li className="post" key={index}>
  
              <PostContainer
              id={index}
              postProps={post}
              like={this.like} />
              
              <CommentForm 
              id={index}
              newComment={this.state.newComments[index] ? this.state.newComments[index].text : ""}
              onCommentInputChange={this.onCommentInputChange}
              addComment={this.addComment} />
            </li>)
          )}
        </ul>
      </div> 
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

// PostContainer.propTypes = {
//   post: PropTypes.shape({
//     username: PropTypes.string.isRequired,
//     thumbnailUrl: PropTypes.string.isRequired,
//     imageUrl: PropTypes.string,
//     likes: PropTypes.number,
//     timestamp: PropTypes.string.isRequired
//   })
// };

// CommentForm.propTypes = {
//   comment: PropTypes.shape({
//     username: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
//   })
// };
