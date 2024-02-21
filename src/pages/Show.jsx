// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowurl } from '../Api/SearchForShows';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/Shows/ShowMainData';
import ShowDetail from '../components/Shows/ShowDetail';
import Seasons from '../components/Shows/Seasons';
import Cast from '../components/Shows/Cast';

// const useShowById = (showId)=> {
//   const [showData, setShowData] = useState(null);
//   const [showError, setShowError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await getShowurl(showId);
//         setShowData(response);
//       } catch (error) {
//         setShowError(error);
//       }
//     }
//     fetchData();
//   }, [showId]);

//   return [showData, showError];
// };

export default function Show() {
  const { showId } = useParams();
  // const [showData, showError] = useShowById(showId);

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowurl(showId),
  });

  if (showError) {
    return <div>we have an error: {showError.msg}</div>;
  }
  if (showData) {
    return (
      <div>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <div>
          <h2>Details</h2>
          <ShowDetail
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>

        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons}/>
        </div>
        <div>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast}/>
        </div>
      </div>
    );
  }

  return <div>Data is loading</div>;
}
