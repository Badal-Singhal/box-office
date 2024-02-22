import ActorCard from "./ActorCard";
import { FlexGrid } from "../common/FlexGrid";

export default function ActorGrid({apiData}) {
  return (
    <FlexGrid>
    {apiData.map(data => (
        <ActorCard key={data.person.id} data={data}></ActorCard>
      ))}
      
    </FlexGrid>
  )
}
