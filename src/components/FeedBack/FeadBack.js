import React, {Component} from "react";

class FeedBack extends Component{

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
    
        countGood = () =>{
            this.setState(prevState => ({
                good: prevState.good + 1,
            }));
        }
        countNeutral = () =>{
            this.setState(prevState => ({
            neutral: prevState.neutral + 1,
            }));
        }
        countBad = () =>{
            this.setState(prevState => ({
            bad: prevState.bad + 1,
            }));
        }

        countTotalFeedback = () => {
            return Object.values(this.state).reduce((total, state) => total + state, 0);
          };
          countFeedbackPercentage = (feedbackCount) => {
              if(!feedbackCount){
                  return feedbackCount = 0;
              }
            return Math.floor((feedbackCount * 100) / this.countTotalFeedback());
            
          };

    render(){
        const { good, neutral, bad } = this.state;
        const totalStatsFeedback = this.countTotalFeedback();
        const positiveFeedback = this.countFeedbackPercentage(good);        
        return (
            <div>
                <h1>Please leave feedback</h1>
            <button type="button" onClick={this.countGood}>good</button>
            <button type="button" onClick={this.countNeutral}>neutral</button>
            <button type="button" onClick={this.countBad}>bad</button>
            <h1>Statistics</h1>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {totalStatsFeedback}</p>
                <p>Positive feedback: {positiveFeedback}%</p>
            </div>
        )
    }
}

export default FeedBack;