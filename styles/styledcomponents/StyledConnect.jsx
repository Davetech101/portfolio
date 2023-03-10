import styled from "styled-components";

const StyledConnect = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  align-items: center;

  a{
    font-size:2rem;
    background:#67676770;
    border-radius:50%;
    padding:.6rem;
    transition:all .5s;
  }

  a:hover{
    transform:rotate(360deg);
    color:#f19c00;
  }
`;

export default StyledConnect;
