import { SearchCard, SearchImgWrapper } from '../common/SearchCard';

export default function ActorCard({ data }) {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img
          src={
            data.person.image ? data.person.image.medium : 'image-not-found.png'
          }
        />
      </SearchImgWrapper>

      <h1>
        {data.person.name} ({data.person.gender})
      </h1>
      <p>
        Country belongs to:{' '}
        <b> {data.person.country ? data.person.country.name : 'NA'}</b>
      </p>
      <p>
        {data.person.birthday ? data.person.birthday : 'NA'} -{' '}
        {data.person.deathday ? data.person.deathday : 'Alive'}
      </p>
    </SearchCard>
  );
}
