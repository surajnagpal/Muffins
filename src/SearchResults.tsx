import React from 'react';
import './SearchResults.css';

interface SearchResultsProps {
    results: [string | null, string | null][];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
    return (
        <div className="search-results-container">
            <div className="search-results-list">
                {results.map((result, index) => {
                    const [title, date] = result;
                    if (title && date) {
                        return (
                            <div key={index} className="search-result-item">
                                <h3>{title}</h3>
                                <p>Date: {date}</p>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default SearchResults;
