import { useState } from 'react';
import { SearchForShows } from '../Api/SearchForShows';

export default function Home() {
  const [searchStr, setsearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const onInputChange = ev => {
    setsearchStr(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();

    try {
      const result = await SearchForShows(searchStr,searchOption);
      setApiData(result);
    } catch (error) {
      setApiError(error);
    }
  };


  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const showData = () => {
    if (apiError) {
      return <div>{`something bad happended:${apiError}`}</div>;
    }
    if (apiData && searchOption==='shows') {
      return apiData.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }
    if (apiData && searchOption==='people') {
      return apiData.map(data => (
        <div key={data.person.id}>{data.person.name}</div>
      ));
    }


    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
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
      <div>{showData()}</div>
    </div>
  );
}
