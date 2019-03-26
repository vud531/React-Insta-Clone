import React, { Component } from 'react';
import './CommentSection.css';

const CommentSection = (props) => {
    return (
    <ul className="comment-section">
    {props.comments && props.comments.map((comment, index) => (
        <li className="comment" key={index}>
            <p className="username">{comment.username}</p>
            <p className="text">{comment.text}</p>
        </li>
    ))}
    </ul>)

}

export default CommentSection;