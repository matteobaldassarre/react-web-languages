import React from 'react';
import './Loading.css';

function Loading() {
    return (
        <div className="loader">
            <div>
                <i className="loading-circle fas fa-spinner"></i>
            </div>
        </div>
    );
}

export default Loading;