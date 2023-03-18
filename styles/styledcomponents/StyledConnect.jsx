import styled from "styled-components";

const StyledConnect = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  align-items: center;
  max-width: 25rem;

  a {
    font-size: 2rem;
    background: #67676770;
    border-radius: 50%;
    padding: 0.6rem;
    transition: all 0.5s;
  }

  a:hover {
    transform: rotate(360deg);
    color: #f19c00;
  }

  @media only screen and (max-width: 850px) {
    max-width: 20rem;
  }
`;

export default StyledConnect;
