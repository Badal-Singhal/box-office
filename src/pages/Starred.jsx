
import { getShowByIds } from "../Api/SearchForShows";
import ShowGrid from "../components/Shows/ShowGrid";
import useStarredShows from "../lib/useStarredShows";
import { useQuery } from '@tanstack/react-query';


export default function Starred() {

  const [starredShowIds]=useStarredShows();

  const { data: starredShow, error: starredError } = useQuery({
    queryKey: ['starredShow', starredShowIds],
    queryFn: () => getShowByIds(starredShowIds).then(result => result.map(show => ({show})))
  });

  

  if(starredError){
    return <div>we have an error: {starredError.msg}</div>;
  }
  if(starredShow?.length===0){
    return <div> No shows were starred</div>;
  }


  if(starredShow?.length>0){
    return <ShowGrid apiData={starredShow}/>
  }

  return <div> Shows are loading</div>;

}
