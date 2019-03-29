import React from 'react';
import "./CommentForm.css"
import styled, { css } from 'styled-components';

const form_spacing = 15;
export const Form = styled.form`
    display: flex;
    margin: ${form_spacing}px;
    border-radius: ${form_spacing}px;
    justify-content: space-between;
`;

export const Input = styled.input`
    border-radius: ${form_spacing}px;
    padding: ${form_spacing}px;
    border: none;

`;

export const TextInput = styled(Input)`
    width: 80%;
`;

export const Button = styled(Input)`
    background-color: #826fd7;
    color: white;
    box-shadow: 0 5px 5px 1px #826fd7a3;
    
    :hover {
        transition: all 0.2s;
        box-shadow: none;
    }

    :active {
        transform: translateY(5px);

    }
`

const CommentForm = props => {
    return(            
    <Form 
    id={props.id}
    className="comment-form"
    onSubmit={props.addComment}>
        <TextInput 
            className="comment-input"
            placeholder="Add a comment"
            value={props.newComment}
            onChange={props.onCommentInputChange}
            />

        <Button type="submit" value="Enter" />
    </Form>);
}

export default CommentForm;