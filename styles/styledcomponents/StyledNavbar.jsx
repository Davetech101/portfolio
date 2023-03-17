import styled from "styled-components";

const StyledNavbar = styled.header`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    background:#3e3e3e;
    animation:header 1s;
    z-index:100;
    position:fixed;
    top:0;
    left:0;
    width:100%;
  }

  @keyframes header {
    0% {
      opacity:0;
      transform:translateY(-5rem);
    }

    100% {
      opacity:1;
      transform:translateY(0);
    }
  }

  nav ul {
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  nav a {
    font-size:2rem;
    text-transform: capitalize;
    font-family: 'Indie Flower', cursive;
    transition:all .5s;
    padding:1rem;
    position:relative;
  }

  nav a .bracket{
    display:inline;
  }

  nav a:hover .bracket{
    color:white;
  }

  nav a:hover{
    color:#f19c00;
  }

  nav a.active .bracket{
    display:inline;
    color:#f19c00;
  }

  .logo {
    font-size: 3rem;
    font-family: 'Dancing Script', cursive;
  }

  .logo h2{
    display:flex;
    transition:all .5s;
  }

  .logo:hover h2{
    flex-direction:row-reverse;
    transform:rotate(-360deg);
  }

  .dev {
    color: #f19c00;
  }
`;

export default StyledNavbar;
