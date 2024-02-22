import styled from "styled-components";

export default function Seasons({seasons}) {
  return (
    
      
      <SeasonsWrapper>
      <b>Total number of Seasons: {seasons.length}</b>
        {seasons.map(data=>(<>
            <SeasonList>
            <p className="season-item" key={data.id}>Number of Episodes in Season{data.number}: {data.episodeOrder}</p>
            <i key={data.id}>Period: {data.premiereDate} to {data.endDate}</i>
            </SeasonList>
            </>
        ))}
      </SeasonsWrapper>
    
  )
}

//css component

const SeasonsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;

const SeasonList = styled.div`
  display: flex;
  flex-direction: column;
  .season-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;