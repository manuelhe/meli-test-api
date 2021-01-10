import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ searchCallback }) => {
  const [searchString, setSearchString] = useState('');
  const onSubmitSearch = (ev) => {
    ev.preventDefault();
    const string = searchString.trim();
    if (string.length < 2) {
      return;
    }
    searchCallback(searchString);
  }
  return (
    <form className="SearchBar" onSubmit={onSubmitSearch}>
      <input type="search" value={searchString} placeholder="Nunca dejes de buscar" onChange={(ev)=> setSearchString(ev.target.value)} />
      <button type="submit" alt="Buscar"></button>
    </form>
  );
};

export default SearchBar;
