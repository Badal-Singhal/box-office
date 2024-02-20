import ActorCard from "./ActorCard";

export default function ActorGrid({apiData}) {
  return (
    <div>
    {apiData.map(data => (
        <ActorCard key={data.person.id} data={data}></ActorCard>
      ))}
      
    </div>
  )
}
