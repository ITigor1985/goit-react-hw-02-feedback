import { Button, ButtonWrapper } from "./FeedbackOptions.styled";

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
