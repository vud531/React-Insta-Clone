import React, { Component } from 'react';
import './SearchBar.css';

const SearchBar = props =>  {
    // console.log(props)
    return (
    <nav>
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
    </nav>
)};

export default SearchBar;