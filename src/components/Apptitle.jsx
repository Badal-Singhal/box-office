import styled from "styled-components";


export default function Apptitle() {
  return (
    <TitleWrapper>
      <h1>Box Office</h1>
      <p>Are you looking for a Movie or an Actor?</p>
    </TitleWrapper>
  );
}

//css component

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
  }
`;
