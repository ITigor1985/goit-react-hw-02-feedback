

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
          {options.map((option) => (
            <button
              type="button"
              onClick={onLeaveFeedback}
              name={option}
              key={option}
            >
              {option}
            </button>
          ))}
        </>
      );
}
export default FeedbackOptions;