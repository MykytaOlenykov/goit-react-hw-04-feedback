import { useState } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';
import * as S from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = Object.keys({ good, neutral, bad });

  const handleLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        throw new Error(`Unsupported value: ${option}`);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = total => {
    return Math.round((good * 100) / total);
  };

  const totalFeedback = countTotalFeedback();
  const positiveFeedbackPercentage =
    countPositiveFeedbackPercentage(totalFeedback);

  return (
    <S.Container>
      <GlobalStyle />
      <S.Title>Feedback App</S.Title>

      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </S.Container>
  );
};
