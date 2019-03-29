import React, { Component } from 'react';
import './PostContainer.css';
import CommentSection from './CommentSection/CommentSection'
import styled, { css } from 'styled-components';

const card_spacing = 15;


export const CardHead = styled.div`
box-sizing: content-box;
padding: ${card_spacing}px;
height: 50px;
color: rgb(100, 100, 100);
display: flex;
justify-content: flex-start;
align-items: flex-start;
`
export const ThumbnailPhoto = styled.img`
height: 100%;
border-radius:50%;
`;

export const Username = styled.span`
color:gray;
box-sizing: content-box;
padding: ${card_spacing}px;
`;
export const ImgContent = styled.img`
width: 100%;
margin: auto;
padding: ${card_spacing}px;
`;

const PostContainer = (props) =>  {
    console.log(props);
    return (
        <div id={props.id} className="post-container">
            <CardHead className="container-head">
                <ThumbnailPhoto 
                alt="profile" 
                className="profile"
                src={props.postProps.thumbnailUrl}/>
                <Username className="username">{props.postProps.username}</Username>
            </CardHead>
            <ImgContent 
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