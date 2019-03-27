import React, { Component } from 'react';
import './PostContainer.css';
import CommentSection from './../CommentSection/CommentSection'
const PostContainer = (props) =>  {
    console.log(props);
    return (
        <div className="post-container">
            <div className="container-head">
                <img 
                alt="profile" 
                className="profile"
                src={props.postProps.thumbnailUrl}/>
                <span className="username">{props.postProps.username}</span>
            </div>
            <img 
            alt="content" 
            className="post-content"
            src={props.postProps.imageUrl} />
            <div className="buttons-bar">
                <button>like</button>
                <button>comment</button>
            </div>
            <div className="like-count">{props.postProps.likes} likes</div>            
            <div className="time">{props.postProps.timestamp}</div>
            <CommentSection comments={props.postProps.comments} />
            <form>
            <input 
                className="comment-input"
                placeholder="Add a comment"
                value={props.newComment.text}
                onChange={props.onCommentInputChange}
                />
            </form>
        </div>
        )
    };

export default PostContainer;