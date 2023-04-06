import PropTypes from 'prop-types';
import { toCapitalLetter } from 'utils';
import { ListButton, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ListButton>
    {options.map(option => {
      const optionLabel = toCapitalLetter(option);

      return (
        <li key={option}>
          <Button type="button" onClick={() => onLeaveFeedback(option)}>
            {optionLabel}
          </Button>
        </li>
      );
    })}
  </ListButton>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
