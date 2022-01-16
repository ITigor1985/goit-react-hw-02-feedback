import { GlobalStyle } from "../../GlobalStyled/GlobalStyled.styled";
import { Container } from "./App.styled";
import { Component } from "react";

import Section from "../Section";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics";
import Notification from "../Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (e) => {
    const key = e.target.name;
    this.setState((prevState) => {
      return { [key]: (prevState[key] += 1) };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, state) => total + state, 0);
  };
  countFeedbackPercentage = (feedbackCount) => {
    if (!feedbackCount) {
      return (feedbackCount = 0);
    }
    return Math.floor((feedbackCount * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalStatsFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countFeedbackPercentage(good);

    return (
      <>
        <Container>
          <Section title={"Please leave feedback"}>
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          <Section title={"Statistics"}>
            {totalStatsFeedback ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalStatsFeedback}
                positivePercentage={positiveFeedback}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </Container>
        <GlobalStyle />
      </>
    );
  }
}

export default App;
