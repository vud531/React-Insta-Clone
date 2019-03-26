import React, { Component } from 'react';
import './PostContainer.css';

const PostContainer = (props) =>  {
    console.log(props);
    return (
        <div className="post-container">
            <div>
                <img 
                alt="profile" 
                className="photo"
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
            <div className="like-count">{props.postProps.likes}</div>            
            <div className="time">{props.postProps.timestamp}</div>

        </div>
        )
    };

export default PostContainer;