import { Link } from 'react-router-dom';

export default function ShowCard({ data }) {
  const summaryCut = data.show.summary
    ? data.show.summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, ' ')
    : 'Not available';
    let id=data.show.id
  return (
    <div>
      <img
        src={data.show.image ? data.show.image.medium : 'image-not-found.png'}
        alt="name"
      />
      <h2>{data.show.name}</h2>
      <p>{summaryCut}</p>
      <Link to={`/shows/${id}`}>Read More</Link>
    </div>
  );
}
