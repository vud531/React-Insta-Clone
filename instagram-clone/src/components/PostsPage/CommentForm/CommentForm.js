import React from 'react';

const CommentForm = props => {
    return(            
    <form 
    id={props.id}
    className="comment-form"
    onSubmit={props.addComment}>
        <input 
            className="comment-input"
            placeholder="Add a comment"
            value={props.newComment}
            onChange={props.onCommentInputChange}
            />

        <input type="submit" value="Enter" />
    </form>);
}

export default CommentForm;