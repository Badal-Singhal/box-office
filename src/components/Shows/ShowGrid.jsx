import ShowCard from "./ShowCard";

export default function ShowGrid({apiData}) {
  return (
    <div>
      
      {apiData.map(data => (
        <ShowCard key={data.show.id} data={data}/>
      ))}
    </div>
  )
}
