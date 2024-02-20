import { useState } from 'react';
import { SearchForShows } from '../Api/SearchForShows';
import Search from '../components/Search';
import ShowGrid from '../components/Shows/ShowGrid';
import ActorGrid from '../components/Actors/ActorGrid';




export default function Home() {
  const [apiData, setApiData] = useState(null);
  const [apiError, setApiError] = useState(null);

  const onSearch = async ({ searchStr, searchOption }) => {
    try {
      const result = await SearchForShows(searchStr, searchOption);
      setApiData(result);
    } catch (error) {
      setApiError(error);
    }
  };

  const showData = () => {
    if (apiError) {
      return <div>{`something bad happended:${apiError}`}</div>;
    }
    if(apiData?.length===0){
      return <div>Nothing to show</div>
    }
    
    if (apiData && apiData[0].show) {
      return (<ShowGrid apiData={apiData}/>);
    }
    if (apiData && apiData[0].person) {
      return (<ActorGrid apiData={apiData}/>);
    }

    return null;
  };

  return (
    <div>
      <Search onSearch={onSearch} />
      <div>{showData()}</div>
    </div>
  );
}
