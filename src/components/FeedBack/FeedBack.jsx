import { useState } from "react";
import s from "./FeedBack.module.css";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";
import { Notification } from "./Notification";

function FeedBack() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = bad + neutral + good;
  function countPositiveFeedbackPercentage() {
    const sum = bad + neutral + good;
    const positivePercentage = (good / sum) * 100;
    return sum ? Math.round(positivePercentage) + "%" : 0;
  }

  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveGoodFeedback={() => {
            setGood((prevState) => prevState + 1);
          }}
          onLeaveNeutralFeedback={() => {
            setNeutral((prevState) => prevState + 1);
          }}
          onLeaveBadFeedback={() => {
            setBad((prevState) => prevState + 1);
          }}
        />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export { FeedBack };
