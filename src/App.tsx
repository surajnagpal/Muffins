import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import videoBG from './videoBG.mp4';
import logo from './logo_youni.png';
import './App.css';
import { useState } from 'react';

function App() {
    const [searchResults, setSearchResults] = useState<[string | null, string | null][]>([]);
    const [showBlur, setShowBlur] = useState(false); // State to control blur effect

    const handleSearch = async (eventName: string) => {
        try {
            const response = await fetch(`https://lobster-app-4nsxz.ondigitalocean.app/search?search=` + eventName);
            const data = await response.json();
            console.log(data);
            setSearchResults(data);
            setShowBlur(true); // Show blur effect when search results are set
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <div className="App">
            <div className={`overlay ${showBlur ? 'blur' : ''}`}></div> {/* Apply blur effect to overlay */}
            <video src={videoBG} autoPlay loop muted className={showBlur ? 'blur' : ''}></video> {/* Apply blur effect to video */}
            <nav>
                <div className="logo-container">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <ul className="Menu">
                    <li><a href="/get-listed" className="tab">Get Listed</a></li>
                </ul>
            </nav>
            <header className="App-header">
                <h1>Search London</h1>
            </header>
            <div className="content">
                <SearchBar onSearch={handleSearch} />
                <SearchResults results={searchResults} />
            </div>
        </div>
    );
}

export default App;
