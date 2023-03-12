import styled from "styled-components";

const StyledHero = styled.section`
  margin-top: 4rem;
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  main {
    max-width: 80rem;
  }

  .fd {
    font-family: "Permanent Marker", cursive;
  }

  p {
    font-size: 3.5rem;
    z-index: 40;
    position: relative;
    background: black;
  }

  .marquee-1 {
    position: absolute;
    background: #3e3e3e;
    display: flex;
    gap:5rem;
    // padding:1rem 0;
    height:5rem;
    top: 50rem;
    left: -10rem;
    transform: rotate(15deg);
    width: 150vw;
  }

  .marquee-1 li{
    color:white;
    text-transform:capitalize;
    list-style-type:dot red;
    margin:0 4rem;
    font-size:2rem;
    display:flex;
    align-items:center;
    gap:1rem;
  }

  .marquee .overlay{
    background:red;
  }

  .marquee li::before {
    content: ""; 
    background: #f19c00; 
    font-weight: bold; 
    display: inline-block;
    width: 1rem; 
    height:1rem;
    margin-left: -1em;
    border-radius:50%;
  }
`;

export default StyledHero;
