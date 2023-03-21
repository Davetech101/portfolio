import Image from "next/image";
import styled from "styled-components";
import AppHead from "./Head";

const Sloader = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;
  animation:body 2.2s;

  @keyframes body {
    0% {
      opacity:1;
    }

    90%{
      opacity:1;
    }

    100% {
      opacity:0;
    }
}
  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  img {
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top-left-radius: 50%;
    border-left: 5px solid #b1b1b1;
    border-bottom: 10px solid #3e3e3e;
  }

  .line {
    height: .5rem;
    background: ;
    border: 1px solid #3e3e3e;
    border-radius: 5rem;
    width: 120%;
    position:relative;
    overflow:hidden;
  }

  .line::after{
    content:"";
    width:0%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background:#f19c00;
    animation:load 2s;
  }

  @keyframes load {
    0% {
      width:0;
    }

    100% {
      width:100%;
    }
`;

const Loader = () => {
  return (
    <Sloader>
      <AppHead/>
      <main>
        <Image
          src="/assets/dawn.jpeg"
          alt="Picture of the author"
          width={200}
          height={100}
          className="img4"
        />

        <div className="line"></div>
      </main>
    </Sloader>
  );
};

export default Loader;
