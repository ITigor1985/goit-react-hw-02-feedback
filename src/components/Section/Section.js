import { Title, SectionBlock } from "./Section.styled";
import propTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <SectionBlock>
      <Title>{title}</Title>
      {children}
    </SectionBlock>
  );
};

export default Section;

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};
