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
    margin:2rem 5rem;
  }

  .input{
    width:100%;
    background:#3e3e3e;
    padding:1rem;
    font-size:2rem;
    font-family: 'Indie Flower', cursive;
    outline:none;
    // border-bottom:1px dashed #f19c00;
    caret-color:#f19c00;
    transition:all .4s;
  }

  .input:focus{
  }

  .input1:focus{
    box-shadow:1px 1px 1px #f19c0036 ;
    transform:translateY(-1rem);
  }
  

  textarea{
    min-height:5rem;
    transition:all .4s;
  }

  textarea:focus{
    min-height:15rem;
  }

  button{
    padding:1rem 2rem;
    font-size:2rem;
    font-family: 'Indie Flower', cursive;
    border:1px solid #f19c00;
    // max-width:20rem;
    position:relative;
    overflow:hidden;
  }

  button::before{
    content:"";
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
    width:0%;
    height:100%;
    background:#f19c00;
    border-top-right-radius:7rem;
    transition:all .5s;
  }

  button:hover::before{
    width:130%;
  }
`;

export default StyledForm;
