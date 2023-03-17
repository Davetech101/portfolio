import styled from "styled-components";

const StyledForm = styled.section`
  margin-top: 15rem;
  padding: 4rem;
  position: relative;
  display: flex;
  justify-content: center;

  .part1 {
    width: 50%;
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
      transform: translateX(50rem);
      opacity: 0;
    }

    75% {
      transform: translateX(-2rem);
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

  button {
    padding: 1rem 2rem;
    font-size: 2rem;
    font-family: "Indie Flower", cursive;
    border: 1px solid #f19c0036;
    position: relative;
    overflow: hidden;
  }

  button::before {
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

  button::after {
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

  button:hover {
    border: none;
  }

  button:hover::before,
  button:hover::after {
    width: 45%;
  }

  .pawn {
    font-size: 80rem;
    color: #f19c0036;
    position: absolute;
    top: -15rem;
    right: -10rem;
  }
`;

export default StyledForm;
