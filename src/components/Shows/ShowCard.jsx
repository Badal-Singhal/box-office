import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
import { StarIcon } from '../common/StarIcon';

export default function ShowCard({ data, onStarHandler, isStarred }) {
  const summaryCut = data.show.summary
    ? data.show.summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, ' ')+ '...'
    : 'Not available';
  let id = data.show.id;
  return (
    
      <SearchCard>
        <SearchImgWrapper>
          <img
            src={
              data.show.image ? data.show.image.medium : 'image-not-found.png'
            }
            alt="name"
          />
        </SearchImgWrapper>

        <h2>{data.show.name}</h2>
        <p>{summaryCut}</p>
        <ActionSection>
          
          <Link to={`/shows/${id}`} target="_blank">
            Read More
          </Link>
        
        
        <StarBtn onClick={() => onStarHandler(data.show.id)} type="button">
        <StarIcon active={isStarred}/>
        </StarBtn>
        </ActionSection>
      </SearchCard>
    
  );
}

//css component

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
