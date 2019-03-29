import styled, { css } from 'styled-components';
import React from 'react';

const card_spacing = 15;

export const Header = styled.header`
width: 100%;
`;

export const Post = styled.li`
width: 100%;
list-style: none;
margin: auto;
box-sizing: border-box;
padding: 0px;
background-color: #efeff1;
position: relative;
top: 50px;`;

export const PostCard = styled.li`
max-width: 400px;
background-color: #f7f7f7;
border-radius: ${card_spacing}px;
box-shadow: 0px 2px 2px 0px #f4f8fcad;
border: none;
width: 100%;
margin: 15px;
box-shadow: 0 5px 5px 1px #8080801c;
`;
export const Board = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  padding-top: 65px;
  justify-content: space-evenly;
  align-items: center;
`;
export const Page = styled.div`;

`;