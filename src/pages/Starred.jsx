
import { getShowByIds } from "../Api/SearchForShows";
import ShowGrid from "../components/Shows/ShowGrid";
import { TextCenter } from "../components/common/TextCenter";
import useStarredShows from "../lib/useStarredShows";
import { useQuery } from '@tanstack/react-query';


export default function Starred() {

  const [starredShowIds]=useStarredShows();

  const { data: starredShow, error: starredError } = useQuery({
    queryKey: ['starredShow', starredShowIds],
    queryFn: () => getShowByIds(starredShowIds).then(result => result.map(show => ({show})))
  });

  

  if(starredError){
    return <TextCenter>we have an error: {starredError.msg}</TextCenter>;
  }
  if(starredShow?.length===0){
    return <TextCenter> No shows were starred</TextCenter>;
  }


  if(starredShow?.length>0){
    return <ShowGrid apiData={starredShow}/>
  }

  return <TextCenter> Shows are loading</TextCenter>;

}
