import { Link } from "react-router-dom";

export default function ActorCard({ data }) {
  
  return (
    <div>
      <img
        src={
          data.person.image ? data.person.image.medium : 'image-not-found.png'
        }
      />
      <h2>{data.person.name} ({data.person.gender})</h2>
      <p>Country belongs to: <b> {data.person.country.name}</b></p>
      <p>{data.person.birthday?data.person.birthday:"NA"} - {data.person.deathday?data.person.deathday:"Alive"}</p>
      
    </div>
  );
}
