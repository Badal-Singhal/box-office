import { useState } from 'react';
import { SearchForShows } from '../Api/SearchForShows';

export default function Home() {
  const [searchStr, setsearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiError, setApiError] = useState(null);

  const onInputChange = ev => {
    setsearchStr(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();

    try {
      const result = await SearchForShows(searchStr);
      setApiData(result);
    } catch (error) {
      setApiError(error);
    }
  };

  const showData = () => {
    if (apiError) {
      return <div>{`something bad happended:${apiError}`}</div>;
    }
    if (apiData) {
      return apiData.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }
    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onInputChange}></input>
        <button type="submit">Search</button>
      </form>
      <div>{showData()}</div>
    </div>
  );
}
