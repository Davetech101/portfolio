import styled from "styled-components";

const StyledHero = styled.section`
  margin-top: 10rem;
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .code {
    color: #f19c0036;
    font-size: 100rem;
    animation: rotate 80s infinite;
    position: absolute;
    top: 0;
    right: -70rem;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  main {
    max-width: 90rem;
    margin-top: 6rem;
  }

  .po,
  .pe {
    font-family: "Permanent Marker", cursive;
    color: #f19c0036;
    font-size: 2rem;
  }

  .vertical {
    animation: vertical 1s;
    top: -5rem;
    left: -1rem;
  }

  .horizontal {
    animation: horizontal 1.5s;
    left: -5rem;
    top: -1rem;
  }

  @keyframes vertical {
    0% {
      transform: translateY(4rem);
      opacity: 0;
    }

    75% {
      transform: translateY(-1rem);
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes horizontal {
    0% {
      transform: translateX(4rem);
      opacity: 0;
    }

    75% {
      transform: translateX(-1rem);
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  p {
    font-size: 3.5rem;
    z-index: 40;
    position: relative;
    font-family: "Sono", sans-serif;
    animation: p 2s;
    margin-left: 6rem;
  }

  @keyframes p {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  main > div {
    font-family: "Permanent Marker", cursive;
    color: #f19c00;
    font-size: 3rem;
    display: inline;
  }

  .cta {
    margin-left: 6rem;
  }

  a {
    font-family: "Indie Flower", cursive;
    font-size: 2rem;
    border: 1px solid #f19c00;
    padding: 1rem 1.5rem;
    margin: 0 1rem 0 0;
    position: relative;
    color: white;
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
      opacity: 0;
    }

    10% {
      transform: rotate(-10deg) translateX(-40rem);
      opacity: 0;
    }

    100% {
      transform: rotate(-10deg) translateX(0);
      opacity: 1;
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
    font-family: "Indie Flower", cursive;
    letter-spacing: 1rem;
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

  .underline {
    color: #f19c00;
    font-family: "Indie Flower", cursive;
  }

  @media only screen and (max-width: 1000px) {
    padding: 4rem 10rem;
    margin-top: 5rem;

    p {
      font-size: 3rem;
    }

    .marquee-1 {
      top: 45rem;
    }
  }

  @media only screen and (max-width: 850px) {
    padding: 4rem 3rem 4rem 8rem;

    p {
      font-size: 2.8rem;
      margin-left: 3rem;
    }

    a {
      padding: 0.5rem 1rem;
      font-size: 2rem;
    }

    .cta {
      margin-left: 3rem;
    }
  }

  @media only screen and (max-width: 715px) {
    padding: 4rem 3rem 4rem 8rem;

    p {
      font-size: 2.6rem;
    }

    main {
      max-width: 50rem;
    }
  }

  @media only screen and (max-width: 650px) {
    padding: 4rem 2rem 4rem 6rem;

    p {
      font-size: 2.4rem;
    }
  }

  @media only screen and (max-width: 550px) {
    padding: 4rem 2rem 4rem 6rem;

    p {
      font-size: 2.2rem;
    }

    .marquee-1 li {
      margin: 0 2rem;
      font-size: 1.5rem;
      letter-spacing: .5rem;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 0rem 1rem 1rem 1rem;

    p {
      margin-left: 1rem;
    }

    .cta {
      margin-left: 1rem;
    }

    .vertical {
      display:none;
    }

    .horizontal {
      display:none;
    }

    main > div {
      font-size: 2.5rem;
      display: inline;
    }
  }

  @media only screen and (max-width: 450px) {
    padding: 0rem 1rem 1rem 1rem;

    p {
      font-size: 2rem;
      margin-left: 1rem;
      word-wrap: break-word;
      letter-spacing:1px;
    }

    .cta {
      margin-top: 1rem;
      display:block;
    }

    .vertical {
      position: absolute;
      top: 1.5rem;
      display:none;
      height: 10rem;
    }

    .horizontal {
      top: 3.5rem;
      left: -3rem;
      width: 10rem;
      display:none;
    }

    main > div {
      font-size: 2rem;
      display: inline;
    }
  }
`;

export default StyledHero;
