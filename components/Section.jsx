import styled from "styled-components";

const Section = ({ type, children }) => {
  const SSection = styled.section`
    overflow: hidden;
  height: 100vh;

    @media only screen and (max-width: 1000px) {
    overflow: unset;
    overflow-x: hidden;
    
    overflow: ${props => (type === "home" ? `hidden` : `auto`)};
  }
`
  return <SSection>{children}</SSection>
}

export default Section;
