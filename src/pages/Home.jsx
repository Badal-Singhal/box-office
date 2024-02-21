import { useState,useReducer} from 'react';
import { SearchForShows } from '../Api/SearchForShows';
import Search from '../components/Search';
import ShowGrid from '../components/Shows/ShowGrid';
import ActorGrid from '../components/Actors/ActorGrid';
import { useQuery } from '@tanstack/react-query';

// const reducerfun=(counter,action)=>{
//   switch(action.type){
//     case"Increment": return counter+1;
//     case"Decrement": return counter-1;
//     case"Reset": return 0;
//   }
//   return 0;
// }

export default function Home() {
  const [filter, setFilter] = useState(null);


  // const [counter,dispatch]=useReducer(reducerfun,0);

  // const onIncrement=()=>{
  //   dispatch({type:"Increment"})
  // }
  // const onDecrement=()=>{
  //   dispatch({type:"Decrement"})
  // }
  // const onReset=()=>{
  //   dispatch({type:"Reset"})
  // }


  const { data: apiData, error: apiError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () => SearchForShows(filter.searchStr, filter.searchOption),

    enabled: !!filter,
  });

  const onSearch = async ({ searchStr, searchOption }) => {
    setFilter({ searchStr, searchOption });
  };

  const showData = () => {
    if (apiError) {
      return <div>{`something bad happended:${apiError}`}</div>;
    }
    if (apiData?.length === 0) {
      return <div>Nothing to show</div>;
    }

    if (apiData && apiData[0].show) {
      return <ShowGrid apiData={apiData} />;
    }
    if (apiData && apiData[0].person) {
      return <ActorGrid apiData={apiData} />;
    }

    return null;
  };

  return (
    <div>
      <Search onSearch={onSearch} />
      {/* <p>{counter}</p>
      <button type="button" onClick={onIncrement}>Increment</button>
      <button type="button" onClick={onDecrement}>Decrement</button>
      <button type="button" onClick={onReset}>Reset</button> */}

      <div>{showData()}</div>
    </div>
  );
}
