import React, { Component } from 'react';
import './CommentSection.css';

const CommentSection = (props) => {
    return (
        <div className="comment-section">
            <ul>
            {props.comments && props.comments.map((comment, index) => (
                <li className="comment" key={index}>
                    <p className="username">{comment.username}</p>
                    <p className="text">{comment.text}</p>
                </li>
            ))}
            </ul>

            <input 
            className="comment-input"
            placeholder="Add a comment"
            />
        </div>
    )

}

export default CommentSection;