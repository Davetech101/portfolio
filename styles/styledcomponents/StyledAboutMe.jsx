import styled from "styled-components";

const StyledAboutMe = styled.section`
  margin-top: 8rem;
  padding: 4rem;
  position: relative;
  display: flex;

  h2 {
    font-family: "Permanent Marker", cursive;
    color: #f19c00;
    font-size: 3rem;
    display: inline;
  }

  h2 div {
    margin-left: 5rem;
  }

  .po,
  .pe {
    font-family: "Permanent Marker", cursive;
    color: #f19c0036;
    font-size: 2rem;
  }

  main {
    max-width: 70rem;
  }

  .text {
    margin-left: 5rem;
    animation: text 2s;
  }

  @keyframes text {
    0% {
      transform: translateX(-50rem);
      opacity: 0;
    }

    50% {
      opacity: 0.5;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .img {
    animation: img 2s;
  }

  @keyframes img {
    0% {
      transform: translateX(50rem);
      opacity: 0;
    }

    50% {
      transform: translateX(0rem);
      opacity: 0.5;
    }

    75% {
      transform: translateX(0rem);
      opacity: 0.8;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  p {
    font-size: 1.4rem;
    font-family: "Sono", sans-serif;
    margin-bottom: 1rem;
    line-height: 3rem;
    letter-spacing: 0.1rem;
  }

  a {
    font-size: 2rem;
    font-family: "Sono", sans-serif;
    display: flex;
    z-index: 2;
    position: relative;
    display: flex;
    align-items: center;
    transition: all 0.3s;
    font-family: "Permanent Marker", cursive;
  }

  a:hover {
    opacity: 0.5;
  }

  .next {
  }

  .next.active {
    color: #f19c00;
  }

  .knight {
    font-size: 80rem;
    color: #f19c0036;
    position: absolute;
    top: -2rem;
    left: 4rem;
  }

  .images {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    animation: img 2s;
  }

  .images.animate {
    opacity: 0.3;
    transition: all 0.2s;
  }

  @keyframes img1b {
    0% {
      //   transform: translate(0);
      transform: rotate(0);
      //   opacity:0;
    }

    50% {
      //   transform: translate(100%, 100%);
      transform: rotate(180deg);
      //   opacity:0.3;
    }

    100% {
      //   transform: translate(0);
      transform: rotate(0);
      //   opacity:1;
    }
  }

  @keyframes img2b {
    0% {
      //   transform: translate(0);
      transform: rotate(0);
      //   opacity:0;
    }

    50% {
      //   transform: translate(-100%, 100%);
      transform: rotate(-180deg);
      //   opacity:.3;
    }

    100% {
      //   transform: translate(0);
      transform: rotate(0);
      //   opacity:1;
    }
  }

  @keyframes img3b {
    0% {
      //   transform: translate(0);
      transform: rotate(0);
      //   opacity:0;
    }

    50% {
      //   transform: translate(100%, -100%);
      transform: rotate(180deg);
      //   opacity:.3;
    }

    100% {
      //   transform: translate(0);
      transform: rotate(0);
      //   opacity:1;
    }
  }

  @keyframes img4b {
    0% {
      //   transform: translate(0);
      transform: rotate(0);
      //   opacity:0;
    }

    50% {
      //   transform: translate(-100%, -100%);
      transform: rotate(-180deg);

      //   opacity:.3;
    }

    100% {
      //   transform: translate(0);
      transform: rotate(0);
      //   opacity:1;
    }
  }

  .images1 {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .images2 {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .img1 {
    animation: img1 1s;
    // animation-delay:2s;
  }

  .img2 {
    animation: img2 2s;
    // animation-delay:2s;
  }

  .img3 {
    animation: img3 3s;
    // animation-delay:2s;
  }

  .img4 {
    animation: img4 4s;
    // animation-delay:2s;
  }

  @keyframes img1 {
    0% {
      transform: translate(0);
      opacity: 0;
    }

    50% {
      transform: translate(100%, 100%);
      opacity: 0.3;
    }

    100% {
      transform: translate(0);
      opacity: 1;
    }
  }

  @keyframes img2 {
    0% {
      transform: translate(0);
      opacity: 0;
    }

    50% {
      transform: translate(-100%, 100%);
      opacity: 0.3;
    }

    100% {
      transform: translate(0);
      opacity: 1;
    }
  }

  @keyframes img3 {
    0% {
      transform: translate(0);
      opacity: 0;
    }

    50% {
      transform: translate(100%, -100%);
      opacity: 0.3;
    }

    100% {
      transform: translate(0);
      opacity: 1;
    }
  }

  @keyframes img4 {
    0% {
      transform: translate(0);
      opacity: 0;
    }

    50% {
      transform: translate(-100%, -100%);
      opacity: 0.3;
    }

    100% {
      transform: translate(0);
      opacity: 1;
    }
  }

  @media only screen and (max-width: 1200px) {
    main {
      max-width: 60rem;
    }

    .knight {
      font-size: 80rem;
      top: -20rem;
      left: -13rem;
    }

    img {
      width: 15rem;
    }

    p {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      line-height: 2rem;
      letter-spacing: 0.1rem;
    }

    a {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 1000px) {
    padding: 2rem;
    main {
      max-width: 55rem;
    }

    .text {
      margin-left: 2rem;
    }
  }

  h2 div {
    margin-left: 2rem;
  }

  @media only screen and (max-width: 900px) {
    padding: 2rem;
    main {
      max-width: 50rem;
    }

    .text {
      margin-left: 2rem;
    }

    h2 div {
      margin-left: 2rem;
    }

    .knight {
      display: none;
    }

    p {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
      line-height: 2rem;
      letter-spacing: -1px;
    }

    img {
      width: 12rem;
    }
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 6rem;

    img {
      width: 17rem;
    }

    .po,
    .pe {
      font-size: 1rem;
    }

    main {
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 400px) {
    padding:1rem;
    img {
      width: 12rem;
    }

    h2 {
      font-size: 2rem;
    }

    .text {
      margin-left: 1rem;
    }

    h2 div {
      margin-left: 1rem;
    }
  }
`;

export default StyledAboutMe;
