import styled from "styled-components";

const StyledProjects = styled.div`
  margin-top: 2rem;
  padding: 4rem 15rem;
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
    font-size: 4rem;
    // display: inline;
  }

  h2 div {
    margin-left: 5rem;
  }

  .projects {
    margin-top: 5rem;
  }

  .project {
    margin-bottom:20rem;
    justify-content:space-between;
  }

  .images {
    display: flex;
    position: relative;
  }

  img {
    // opacity:.5;
    transition:all .4s;
    transform:scale(.5);
    box-shadow:1px 1px 10px 1px #ffffff4d;
  }

  .img1 {
    position: absolute;
    
  }

  .img2{
    
    z-index:2;
  }

  .img3{
    
    position: absolute;
    top: 6rem;
    right: -4rem;
  }

  img:hover {
    // outline:1rem solid #f19c0036;
    opacity:1;
    z-index:20;
    transform:scale(1.2);
  }

  .typography{
    width:50%;
  }

  h3{
    font-family: "Permanent Marker", cursive;
    font-size: 3rem;
    color: #f19c00;
    margin-bottom:2rem;
  }

  small{
    font-family: 'Indie Flower', cursive;
    font-size: 2rem;
    margin-bottom:1rem;
    text-decoration-color:#f19c0036;
    border-bottom:1px solid #f19c00;
    display:inline-block;
  }

  p{
    font-family: "Sono", sans-serif;
    font-size: 2rem;
    margin-bottom:2rem;
  }

  a{
    font-family: 'Indie Flower', cursive;
    font-size: 1.5rem;
    border:1px solid #f19c00;
    padding:.5rem 1rem;
    margin:0 1rem 0 0;
  }
`;

export default StyledProjects;
