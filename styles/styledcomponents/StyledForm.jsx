import styled from "styled-components";

const StyledForm = styled.section`
  margin-top: 2rem;
  padding: 4rem;
  position: relative;

  .po,
  .pe {
    font-family: "Permanent Marker", cursive;
    color: #f19c0036;
    font-size: 2rem;
  }

  h2{
    font-size: 3rem;
    display: inline;
    display:flex;
    gap:1rem;
    margin-left:5rem;
    font-family: "Permanent Marker", cursive;
  }

  h2 div{
    color: #f19c00;
    font-family: "Permanent Marker", cursive;
  }

  form{
    display:flex;
    flex-direction:column;
    max-width:50rem;
    gap:1rem;
    margin-left:5rem;
  }

  .input{
    width:100%;
    background:#3e3e3e;
    padding:1rem;
    font-size:2rem;
    font-family: 'Indie Flower', cursive;
    outline:none;
  }

  textarea{
    min-height:20rem;
  }

  button{
    padding:1rem 2rem;
    font-size:2rem;
    font-family: 'Indie Flower', cursive;
  }
`;

export default StyledForm;
