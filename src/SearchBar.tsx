import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (eventName: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [startDate /*tStartDate*/] = useState<Date | null>(null);
  const [eventName, setEventName] = useState('');
  const [location, setLocation] = useState('');
  const [secondSearchValue, setSecondSearchValue] = useState('');

  const handleEventNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventName(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(e.target.value);
  };

  const handleSecondSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondSearchValue(e.target.value);
  };

  const handleSearch = () => {
    // const formattedDate = startDate ? startDate.toISOString().slice(0, 10) : '';
    onSearch(eventName);
  };

  const handleSecondSearch = () => {
    onSearch(secondSearchValue);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bars">
        <div className="search-bar">
          <DatePicker
            selected={startDate}
            // onChange={(date: Date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="When?"
            className="search-bar-input"
          />
          <input
            type="text"
            placeholder="What's the vibe?"
            value={eventName}
            onChange={handleEventNameChange}
            className="search-bar-input"
          />
          <div className="search-bar-dropdown">
            <select
              value={location}
              onChange={handleLocationChange}
              className={`search-bar-dropdown-select ${location ? 'has-value' : ''}`}
            >
              <option disabled value=""></option>
              <option value="South London">South London</option>
              <option value="North London">North London</option>
              <option value="East London">East London</option>
              <option value="West London">West London</option>
            </select>
            {!location && <span className="dropdown-placeholder">Where?</span>}
          </div>
          <button onClick={handleSearch} className="search-bar-button">Search</button>
        </div>
        <div className="or-maybe">
          <br></br><span>or maybe?</span>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="What's on your mind 💜"
            value={secondSearchValue}
            onChange={handleSecondSearchChange}
            className="search-bar-input"
          />
          <button onClick={handleSecondSearch} className="search-bar-button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;