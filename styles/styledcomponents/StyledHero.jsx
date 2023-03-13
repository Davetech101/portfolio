import styled from "styled-components";

const StyledHero = styled.section`
  margin-top: 4rem;
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  main {
    max-width: 90rem;
    margin-top: 6rem;
  }

  .vertical {
    animation: vertical 1s;
  }

  .horizontal {
    animation: horizontal 1.5s;
  }

  @keyframes vertical {
    0% {
      transform: translateY(4rem);
      opacity:0;
    }

    75%{
      transform: translateY(-1rem);
    }

    100% {
      transform: translateY(0);
      opacity:1;
    }
  }

  @keyframes horizontal {
    0% {
      transform: translateX(4rem);
      opacity:0;
    }

    75%{
      transform: translateX(-1rem);
    }

    100% {
      transform: translateX(0);
      opacity:1;
    }
  }

  p {
    font-size: 3.5rem;
    z-index: 40;
    position: relative;
    font-family: "Sono", sans-serif;
    animation:p 2s;
    margin-left:6rem;
  }

  @keyframes p {
    0% {
      opacity:0;
    }

    100% {
      opacity:1;
    }
  }

  .marquee-1 {
    position: absolute;
    background: #3e3e3e;
    display: flex;
    gap: 5rem;
    height: 5rem;
    top: 50rem;
    left: -10rem;
    transform: rotate(-10deg);
    width: 150vw;
    animation: marquee 2s;
  }

  @keyframes marquee {
    0% {
      transform: rotate(0) translateX(-80rem);
      opacity:0;
    }

    10% {
      transform: rotate(-10deg) translateX(-40rem);
      opacity:0;
    }

    100% {
      transform: rotate(-10deg) translateX(0);
      opacity:1;
    }
  }
  .marquee-1 li {
    color: white;
    text-transform: capitalize;
    list-style-type: dot red;
    margin: 0 4rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: 'Indie Flower', cursive;
    letter-spacing:1rem;
  }

  .marquee li::before {
    content: "";
    background: #f19c00;
    font-weight: bold;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-left: -1em;
    border-radius: 50%;
  }

  main > div {
    font-family: "Permanent Marker", cursive;
    color: #f19c00;
    font-size: 3rem;
    display: inline;
  }

  .span{
    transition:all .5s;
  }

  .underline{
    color: #f19c00;
    font-family: 'Indie Flower', cursive;
  }

  .po, .pe{
    font-family: "Permanent Marker", cursive;
    color: #f19c0036;
    font-size: 2rem;
  }

  .code{
    color: #f19c0036;
    font-size:100rem;
    animation:rotate 100s infinite;
    position:absolute;
    top:0;
    right:0;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }

    100% {
      transform:rotate(360deg);
    }
  }

  .car{
    font-size:8rem;
    animation:car 1000s infinite;
    margin-bottom:50rem;
    color:#f19c0036;
    position:fixed;
    top:90%;
    left:0;
  }

  @keyframes car {
    0% {
      transform: translateX(0);
    }

    50%{
      transform: translateX(100vw);
    }

    100% {
      transform:translateX(-100vw);
    }
  }

  .wifi{
    font-size:8rem;
    color:#f19c0036;
    position:absolute;
    top:-2rem;
    left:4rem;
  }
`;

export default StyledHero;
