import React, { Component } from 'react';
import LanguageCard from './language-card/LanguageCard';
import SearchBox from './search-box/SearchBox';
import SelectType from './select-type/SelectType';
import ResultsFound from './results-found/ResultsFound';
import './Main.css';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            languages: [],
            searchBox: '',
            selectedType: ''
        };
    }

    // Contiene codice da eseguire quando il componente viene montato per la prima volta in pagina dopo il render
    componentDidMount() {
        fetch('https://6164a54609a29d0017c88e17.mockapi.io/api/programming-languages/languages')
        .then(response => response.json())
        .then(data => this.setState({languages: data}));
    }


    // Uso l'arrow function che mi setta il this sullo scope corretto per settare lo state
    handleChange = (e) => {
        this.setState({searchBox: e.target.value});
    }

    handleSelection = (e) => {
        this.setState({selectedType: e.target.value});
    }

    render() {
        const { languages, searchBox, selectedType } = this.state;
        const filteredLanguages = languages.filter(language => language.name.toLowerCase().includes(searchBox.toLowerCase()));
        const filteredTypeLanguages = filteredLanguages.filter(language => language.type === selectedType);

        return (
            <main>
                {/* Search Box */}
                <SearchBox placeholderName="Search Language" handleChange={this.handleChange} />

                {/* Select Type */}
                <SelectType handleSelection={this.handleSelection} />

                {/* Results Found */}
                <ResultsFound resultsNumber={selectedType === '' ? filteredLanguages.length : filteredTypeLanguages.length} />

                {/* Cards Container */}
                <div className="cards-wrapper">
                    {
                        selectedType === '' ? 
                        filteredLanguages.map(language => <LanguageCard key={language.id} language={language} />) :
                        filteredTypeLanguages.map(language => <LanguageCard key={language.id} language={language} />) 
                    }
                </div>
            </main>
        );
    }
}

export default Main;

