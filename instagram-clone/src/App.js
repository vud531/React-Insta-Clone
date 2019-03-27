import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentForm from './components/CommentForm/CommentForm';
import PropTypes from 'prop-types';
import dummyData from  './dummy-data'
class App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser: "duc",
      dummyData: [],
      newComments: [],
      searchKey: "",
      foundResults: []
    }

    // console.log(this.state);

  }

  componentDidMount() {
    // console.log('hi');
    this.setState({dummyData: dummyData});
  }
  render() {
    const data = this.state.foundResults.length > 0 ? this.state.foundResults : this.state.dummyData;
    if (data === 0) {
      return (
        <div>Stay Tuned - Fetching Data</div>
      )
    }
    return (
      <div>
        <SearchBar
        value={this.state.searchKey}
        onSearchInputChange={this.onSearchInputChange}
        />
        <ul className="posts">
          {data.map((post, index) => (
            
            <li className="post" key={index}>
              {/* <div className="App"> */}
              <PostContainer
              id={index}
              postProps={post}
              like={this.like} 
              />
              <CommentForm 
              id={index}
              newComment={this.state.newComments[index] ? this.state.newComments[index].text : ""}
              onCommentInputChange={this.onCommentInputChange}
              addComment={this.addComment}
              />
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
      username: this.state.currentUser, 
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
    // const newComment = this.state.newComments[index];
    const data = this.state.dummyData;
    data[index].likes++;

    this.setState(
      {
        dummyData: data,
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

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string.isRequired
  })
};

CommentForm.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })
};

export default App;
