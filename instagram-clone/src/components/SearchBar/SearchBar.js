import React, { Component } from 'react';
import './SearchBar.css';

const SearchBar = () =>  {
    return (
    <nav>
        <span>
            Logo
        </span>

        <input
        className="search-bar"
        type="search"
        placeholder="search"
        />

        <span>
            <button>F</button>
            <button>L</button>
            <button>P</button>
        </span>
    </nav>
)};

export default SearchBar;