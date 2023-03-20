import styled from "styled-components";

const StyledProjects = styled.div`
  margin-top: 2rem;
  padding: 10rem 15rem 0;
  position: relative;

  .po,
  .pe {
    font-family: "Permanent Marker", cursive;
    color: #f19c0036;
    font-size: 2rem;
  }

  h2 {
    font-family: "Permanent Marker", cursive;
    color: #f19c00;
    font-size: 6rem;
    // display: inline;
  }

  h2 div {
    margin-left: 5rem;
  }

  .projects {
    margin-top: 5rem;
    z-index: 10;
    position: relative;
  }

  .project {
    margin-bottom: 20rem;
    justify-content: space-between;
  }

  .images {
    display: flex;
    position: relative;
    animation: images 1s;
  }

  @keyframes images {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    50% {
      opacity: 0.5;
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  img {
    // opacity:.5;
    transition: all 0.4s;
    transform: scale(0.6);
    box-shadow: 1px 1px 10px 1px #ffffff4d;
    outline:1px solid #f19c00;
    outline-offset:1rem;
  }

  .img1 {
    position: absolute;
  }

  .img2 {
    z-index: 2;
  }

  .img3 {
    position: absolute;
    top: 6rem;
    right: -4rem;
  }

  img:hover {
    // outline:1rem solid #f19c0036;
    opacity: 1;
    z-index: 20;
    transform: scale(1.2);
    outline-offset:2rem;
  }

  .typography {
    width: 50%;
    animation: typo 4s;
  }

  @keyframes typo {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  h3 {
    font-family: "Permanent Marker", cursive;
    font-size: 3rem;
    color: #f19c00;
    margin-bottom: 2rem;
  }

  small {
    font-family: "Indie Flower", cursive;
    font-size: 2rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #f19c00;
    border-left: 1px solid #f19c00;
    display: inline-block;
    padding: 0 0.5rem;
  }

  p {
    font-family: "Sono", sans-serif;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  a {
    font-family: "Indie Flower", cursive;
    font-size: 1.5rem;
    border: 1px solid #f19c00;
    padding: 0.5rem 1rem;
    margin: 0 1rem 0 0;
    position: relative;
  }

  a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 0%;
    height: 100%;
    background: #f19c00;
    border-top-right-radius: 7rem;
    transition: all 0.5s;
  }

  a::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    width: 00%;
    height: 100%;
    background: #f19c00;
    border-bottom-left-radius: 7rem;
    transition: all 0.5s;
  }

  a:hover {
    border: none;
  }

  a:hover::before,
  a:hover::after {
    width: 45%;
  }

  .wave {
    font-size: 80rem;
    color: #f19c0036;
    position: absolute;
    top: 0rem;
    right: -10rem;
    z-index: 0;
  }

  .storm {
    font-size: 50rem;
    color: #f19c0036;
    position: absolute;
    bottom: -30rem;
    left: -5rem;
    z-index: 0;
  }

  @media only screen and (max-width: 1100px) {
    padding: 10rem 3rem;
  }

  @media only screen and (max-width: 900px) {
    padding: 10rem 1rem;

    p {
      font-size: 1.6rem;
    }
  }

  @media only screen and (max-width: 830px) {
    padding: 10rem 5rem;

    h2 div {
      margin-left: 2rem;
    }

    .project{
      flex-direction:column;
    }

    .img1 {
      position: absolute;
    }
  
    .img2 {
      z-index: 2;
    }
  
    .img3 {
      position: absolute;
      top: 6rem;
      right: -4rem;
    }
  
    img:hover {
      // outline:1rem solid #f19c0036;
      opacity: 1;
      z-index: 20;
      transform: scale(1.2);
      outline-offset:2rem;
    }
  
    .typography {
      width: 50%;
      animation: typo 4s;
    }
  }
`;

export default StyledProjects;
