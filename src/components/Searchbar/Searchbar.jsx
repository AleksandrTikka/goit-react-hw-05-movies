import { useState } from 'react';
import { Form, Input, Button } from './Searchbar.styled';

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
      <Form onSubmit={handleSubmit}>
        <Input
          name="input"
          value={input}
          onChange={handleInputChange}
          type="text"
          autoComplete="off"
          // autoFocus
          placeholder="Search movies"
        />
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
}
// export default Searchbar;
