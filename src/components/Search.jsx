import { useState } from 'react';

export default function Search({ onSearch }) {
  const [searchStr, setsearchStr] = useState('');
  const [searchOption, setSearchOption] = useState('shows');

  const onSubmit = async ev => {
    ev.preventDefault();

    const options = {
      searchStr,
      searchOption,
    };
    onSearch(options);
  };
  const onInputChange = ev => {
    setsearchStr(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={searchStr} onChange={onInputChange}></input>
        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            value="shows"
            checked={searchOption === 'shows'}
            onChange={onRadioChange}
          ></input>
        </label>
        <label>
          Actors
          <input
            type="radio"
            name="search-option"
            value="people"
            checked={searchOption === 'people'}
            onChange={onRadioChange}
          ></input>
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
