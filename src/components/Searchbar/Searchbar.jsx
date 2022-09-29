import { useState } from 'react';

export default function Searchbar({ getSearchQuery }) {
  const [input, setInput] = useState('');

  const handleInputChange = e => {
    setInput(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    input.trim() === ''
      ? alert('Search input is empty... Please enter a new word')
      : getSearchQuery(input);
    setInput('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="input"
          value={input}
          onChange={handleInputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}
// export default Searchbar;
