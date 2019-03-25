import React, { Component } from 'react';
import './SearchBar.css';

const SearchBar = () =>  {
    return (
    <nav>
        <span>
            Logo
        </span>

        <input
        type="search"
        placeholder="search"
        />

        <span>
            <button>Feed</button>
            <button>Likes</button>
            <button>Profile</button>
        </span>
    </nav>
)};

export default SearchBar;