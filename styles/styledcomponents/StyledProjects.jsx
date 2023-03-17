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
    // opacity:.5;
    transition:all .4s;
    transform:scale(.4);
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
`;

export default StyledProjects;
