import styled from "styled-components";

const SSection = styled.section`
  overflow: hidden;
  height: 100vh;

  @media only screen and (max-width: 1000px) {
  overflow: unset;
  overflow-x:hidden;
  }

`;
const Section = ({ children }) => {
  return <SSection>{children}</SSection>;
};

export default Section;
