import { useState } from "react";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  
  const options = ["good", "neutral", "bad"];

  const { good, neutral, bad } = feedbacks;
  
  const onFeedback = type => {
    setFeedbacks(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  }

  const countTotalFeedbacks = () => {
    return good + neutral + bad;
  }

  const total = countTotalFeedbacks();
  
  const countPositiveFeedbackPercentage = () => {
    return Math.round(feedbacks.good/total * 100) + "%";
  }
  const positiveFeedbacksTotal = countPositiveFeedbackPercentage();
  
  return (
    <>
      <Section title="Please leave a feedback">
        <FeedbackOptions
          options={options}
          onFeedback={onFeedback}
        />
      </Section>
      <Section title="Statistics">
        {
          total === 0 
          ?
            <Notification message="There is no feedback yet"/>
          :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={positiveFeedbacksTotal}
            />
        }
      </Section>
    </>
  );
}