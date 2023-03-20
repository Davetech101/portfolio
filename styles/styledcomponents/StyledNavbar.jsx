import styled from "styled-components";

const StyledNavbar = styled.header`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    background: #3e3e3e;
    animation: header 1s;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  .mobile {
    display: none;
  }

  @keyframes header {
    0% {
      opacity: 0;
      transform: translateY(-5rem);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  nav ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  nav .a {
    font-size: 2rem;
    text-transform: capitalize;
    font-family: "Indie Flower", cursive;
    transition: all 0.5s;
    padding: 1rem;
    position: relative;
  }

  nav .a .bracket {
    display: inline;
  }

  nav .a:hover .bracket {
    color: white;
  }

  nav .a:hover {
    color: #f19c00;
  }

  nav .a.active .bracket {
    display: inline;
    color: #f19c00;
  }

  .logo {
    font-size: 3rem;
    font-family: "Dancing Script", cursive;
  }

  .logo h2 {
    display: flex;
    transition: all 0.5s;
  }

  .logo:hover h2 {
    flex-direction: row-reverse;
    transform: rotate(-360deg);
  }

  .dev {
    color: #f19c00;
  }

  @media only screen and (max-width: 1000px) {
    .desktop {
      display: none;
    }

    .mobile {
      display: flex;
    }

    .menu {
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      visibility:hidden;
    }

    .modal {
      background: rgba(0, 0, 0, 0.7);
      width: 100vw;
      height: 100vh;
      opacity: 0;
      visibility: hidden;
      transition: all 0.5s;
      position: absolute;
      top: 0;
      left: 0;
    }

    .modal.show {
      opacity: 1;
      visibility: visible;
      z-index: 10;
    }

    .mobileNav {
      background: #3e3e3e;
      width: 35%;
      height: 100%;
      position: absolute;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap:3rem;
      padding: 0rem 2rem 15rem;
      transition: all 0.5s;
      transform: translatex(40rem);
      opacity: 0;
      visibility: hidden;
    }

    .mobileNav.show {
      z-index: 10;
      transform: translatex(0rem);
      opacity: 1;
      visibility: visible;
    }

    nav ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;
      padding-top: 5rem;
    }

    nav a {
      font-size: 2rem;
    }

    .toggle {
      font-size: 3rem;
      z-index: 10;
      color: #f19c00;
    }
  }

  @media only screen and (max-width: 800px) {
    .mobileNav {
      width: 45%;
    }
  }

  @media only screen and (max-width: 600px) {
    .mobileNav {
      width: 55%;
    }
  }

  @media only screen and (max-width: 500px) {
    .mobileNav {
      width: 70%;
    }
  }

  @media only screen and (max-width: 375px) {
    .mobileNav {
      width: 80%;
    }
  }
`;

export default StyledNavbar;
