import React, { Component } from 'react';
import './SearchBar.css';
import styled, { css } from 'styled-components';

export const Navigation = styled.nav`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: whitesmoke;
    position: fixed;
    height: 50px;
    border: solid #d8d7d7 1px;
    z-index: 1;
    top: 0px;
    `
const SearchBar = props =>  {
    // console.log(props)
    return (
    <Navigation>
        <span>
            Logo
        </span>

        <input
        className="search-bar"
        type="search"
        placeholder="search"
        onChange={props.onSearchInputChange}
        />

        <span>
            <button>F</button>
            <button>L</button>
            <button>P</button>
        </span>
    </Navigation>
)};

export default SearchBar;