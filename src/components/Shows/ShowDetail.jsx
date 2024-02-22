import styled from "styled-components";


export default function ShowDetail(props) {
  const {status,premiered, network}=props;
  return (
    <DetailsWrapper>
      <p>Status: {status}</p>
      <p>
        Premiered: {premiered}{!!network && ` on ${network.name}`}
      </p>
    
    </DetailsWrapper>
  )
}

//css component

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;
