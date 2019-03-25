import React, { Component } from 'react';
import './PostContainer.css';

const PostContainer = () =>  {
    return (
        <div class="post-container">
            <div>
                <img className="photo"></img>
                <span className="username"></span>
            </div>
        </div>
        )
    };

export default PostContainer;