import styled from "styled-components";

const StyledNavbar = styled.header`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;
  }

  nav ul {
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  nav a {
    font-size:2rem;
    text-transform: capitalize;
  }

  .logo {
    font-size: 3rem;
    font-family: 'Dancing Script', cursive;
  }

  .dev {
    color: #f19c00;
  }
`;

export default StyledNavbar;
