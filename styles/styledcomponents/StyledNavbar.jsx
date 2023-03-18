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

  .mobile{
    display:none;
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
    margin-top:1rem;
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


  @media only screen and (max-width:1000px){

    .desktop{
      display:none;
    }

    .mobile{
      display:flex;
    }

    .menu{
      position:fixed;
      top:0;
      right:0;
      width:100vw;
      height:100vh;
      z-index:100;
    }

    .overlay{
      background:rgba(0,0,0,.5);
      width:100%;
      height:100%;
    }

    .mobileNav{
      background:#3e3e3e;
      width:40%;
      height:100%;
      position:absolute;
      right:0;
    }

    nav ul {
      display: flex;
      flex-direction:column;
      align-items: center;
      gap: 4rem;
      padding-top:8rem;
    }
  }
`;

export default StyledNavbar;
