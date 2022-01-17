import { Button, ButtonWrapper } from "./FeedbackOptions.styled";
import propTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {options.map((option) => (
        <Button
          type="button"
          onClick={onLeaveFeedback}
          name={option}
          key={option}
        >
          {option}
        </Button>
      ))}
    </ButtonWrapper>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.func.isRequired,
  options: propTypes.arrayOf(propTypes.string).isRequired,
};
