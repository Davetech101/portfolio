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
    gap:2rem;
  }

  @media only screen and (max-width: 600px) {
    gap:1rem;

    a {
      font-size: 1.5rem;
      padding: 0.6rem;
    }
  }

  @media only screen and (max-width: 470px) {
    a {
      font-size: 1.5rem;
      padding: 0.4rem;
    }
  }
`;

export default StyledConnect;
