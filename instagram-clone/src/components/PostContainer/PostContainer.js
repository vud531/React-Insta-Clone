import React, { Component } from 'react';
import './PostContainer.css';
import CommentSection from './../CommentSection/CommentSection'
const PostContainer = (props) =>  {
    // console.log(props);
    return (
        <div id={props.id} className="post-container">
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
            <div id={props.id} className="buttons-bar">
                <button onClick={props.like}>like</button>
                <button>comment</button>
            </div>
            <div className="like-count">{props.postProps.likes} likes</div>            
            <div className="time">{props.postProps.timestamp}</div>
            <CommentSection comments={props.postProps.comments} />

        </div>
        )
    };

export default PostContainer;