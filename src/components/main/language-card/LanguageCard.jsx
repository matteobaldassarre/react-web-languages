import React, { Component } from 'react';
import './LanguageCard.css';

class LanguageCard extends Component {
    render() {
        return (
            <div className="language-card">
                <h1>{this.props.language.name}</h1>
                <p>{this.props.language.description}</p>
                <img src={require(`./img/` + this.props.language.logo).default} alt="language-logo" />
            </div>
        )
    }
}

export default LanguageCard;