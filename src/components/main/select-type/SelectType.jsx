import React from 'react';
import './SelectType.css';

function ComponentName({handleSelection}) {
    return (
        <select onChange={handleSelection} className="select-type">
            <option value="">All</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
        </select>
    );
}

export default ComponentName;