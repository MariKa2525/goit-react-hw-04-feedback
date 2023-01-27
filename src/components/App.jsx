import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { Title } from './Title/Title';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBbad] = useState(0);

  const onLeaveFeedback = evt => {
    const name = evt.target.name;
    if (name === 'good') {
      setGood(prev => (prev += 1));
    } else if (name === 'neutral') {
      setNeutral(prev => (prev += 1));
    } else if (name === 'bad') {
      setBbad(prev => (prev += 1));
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = +Math.round((good * 100) / (good + neutral + bad)) + '%';
    return percentage;
  };

  return (
    <>
      <Title />
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
      />
      <SectionTitle />
      {countTotalFeedback() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={countTotalFeedback}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};
