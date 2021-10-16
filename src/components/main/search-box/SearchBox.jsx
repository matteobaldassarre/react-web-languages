import React from 'react';
import './SearchBox.css';

function SearchBox({placeholderName, handleChange}) {
    return (
        <input className="search-box" type="search" placeholder={placeholderName} onChange={handleChange} />
    );
}

export default SearchBox;