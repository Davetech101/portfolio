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
  }

  .images {
    display: flex;
    position: relative;
  }

  img {
    // outline:1rem solid #f19c0036;
    opacity:.5;
    transition:all .4s;
    transform:scale(.4);
  }

  .img1 {
    position: absolute;
    top: 6rem;
    left: -6rem;
    width:20rem;
    box-shadow:1rem 1rem 1rem  #f19c0036;
  }

  .img2{
    box-shadow:1rem 1rem 1rem  #f19c0036;
    width:50rem;
    // opacity:1;
    z-index:10;
    top:0;
  }

  .img3{
    box-shadow:1rem 1rem 1rem  #f19c0036;
    width:30rem;
    position: absolute;
    top: 6rem;
    right: -6rem;
  }

  img:hover {
    // outline:1rem solid #f19c0036;
    opacity:1;
    z-index:20;
    transform:scale(1.2);
  }
`;

export default StyledProjects;
