import styled from "styled-components";

const SSection = styled.section`
  overflow: hidden;
  height: 100vh;
`;
const Section = ({ children }) => {
  return <SSection>{children}</SSection>;
};

export default Section;
