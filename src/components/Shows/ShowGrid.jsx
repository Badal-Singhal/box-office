import { Reducerfun, usePersistedReducer } from '../../lib/useStarredShows';
import ShowCard from './ShowCard';



// const usePersistedReducer = (reducer, initialState, storageKey) => {
//   const [state, dispatch] = useReducer(reducer, initialState, initial => {
//     const value = localStorage.getItem(storageKey);
//     return value ? JSON.parse(value) : initial;
//   });
//   useEffect(() => {
//     localStorage.setItem(storageKey, JSON.stringify(state));
//   }, [state, storageKey]);
//   return [state, dispatch];
// };

// const Reducerfun = (starClick, action) => {
//   switch (action.type) {
//     case 'STAR':
//       return starClick.concat(action.showId);
//     case 'UNSTAR':
//       return starClick.filter(showId => showId !== action.showId);
//     default:
//       return starClick;
//   }
// };

export default function ShowGrid({ apiData }) {
  const [starClick, dispatch] = usePersistedReducer(
    Reducerfun,
    [],
    'starredShow'
  );
  // console.log(apiData);

  const onStarHandler = showId => {
    const isStarred = starClick.includes(showId);

    if (isStarred) {
      dispatch({ type: 'UNSTAR', showId });
    } else {
      dispatch({ type: 'STAR', showId });
    }
  };

  return (
    <div>
      {apiData.map(data => (
        <ShowCard
          key={data.show.id}
          data={data}
          onStarHandler={onStarHandler}
          isStarred={starClick.includes(data.show.id)}
        />
      ))}
    </div>
  );
}
