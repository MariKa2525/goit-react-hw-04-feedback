import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div className={css.container}>
      <p className={css.text}>Good: {good} </p>
      <p className={css.text}>Neutral: {neutral} </p>
      <p className={css.text}>Bad: {bad} </p>
      <p className={css.text}>Total: {countTotalFeedback()} </p>
      <p className={css.text}>
        Positive feedback: {countPositiveFeedbackPercentage()}
      </p>
    </div>
  );
};

Statistics.propTypes = {
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
