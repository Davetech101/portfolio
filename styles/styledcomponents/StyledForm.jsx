import styled from "styled-components";

const StyledForm = styled.section`
  margin-top: 8rem;
  padding: 4rem;
  position: relative;
  display: flex;
  flex-direction:column;
  justify-content: center;

  .part1 {
    width: 70%;
  }

  .po,
  .pe {
    font-family: "Permanent Marker", cursive;
    color: #f19c0036;
    font-size: 2rem;
  }

  h2 {
    font-size: 4rem;
    display: inline;
    display: flex;
    gap: 1rem;
    margin-left: 5rem;
    font-family: "Permanent Marker", cursive;
  }

  h2 div {
    color: #f19c00;
    font-family: "Permanent Marker", cursive;
  }

  .part2 {
    width: 70%;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 60rem;
    gap: 1rem;
    margin: 2rem 5rem;
    z-index: 1;
    position: relative;
    animation: form 2s;
  }

  @keyframes form {
    0% {
      transform: translateX(-50rem);
      opacity: 0;
    }

    75% {
      transform: translateX(2rem);
      opacity: 0.75;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .input {
    width: 100%;
    background: #3e3e3e6e;
    padding: 2rem;
    font-size: 2rem;
    font-family: "Indie Flower", cursive;
    outline: none;
    caret-color: #f19c00;
    transition: all 0.4s;
  }

  .input:focus {
    background: #3e3e3e;
  }

  .input1:focus {
    transform: translateY(-1rem);
  }

  textarea {
    min-height: 5rem;
    transition: all 0.4s;
  }

  textarea:focus {
    min-height: 15rem;
  }

  a {
    padding: 1rem 2rem;
    font-size: 2rem;
    font-family: "Indie Flower", cursive;
    border: 1px solid #f19c0036;
    position: relative;
    overflow: hidden;
    text-align:center;
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

  .pawn {
    font-size: 80rem;
    color: #f19c0036;
    position: absolute;
    top: -15rem;
    right: -10rem;
  }

  @media only screen and (max-width: 1000px) {
    padding: 2rem;
    align-items:center;

    form {
      margin: 2rem 2rem;
    }

    h2 {
      font-size: 3rem;
      margin-left: 5rem;
    }
  }

  @media only screen and (max-width: 900px) {
    .part1, .part2{
      width:80%;
    }

    form {
      max-width: unset;
    }
  }

  @media only screen and (max-width: 800px) {
    .part1, .part2{
      width:90%;
    }
  }

  @media only screen and (max-width: 650px) {
    .part1, .part2{
      width:100%;
    }
  }

  @media only screen and (max-width: 550px) {
    .part1, .part2{
      width:100%;
    }
  }
`;

export default StyledForm;
