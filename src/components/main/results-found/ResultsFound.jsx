import React from 'react';
import './ResultsFound.css'

function ComponentName(props) {
    return (
        <div className="results-found">
            <span>Found {props.resultsNumber} Results</span>
        </div>
    );
}

export default ComponentName;