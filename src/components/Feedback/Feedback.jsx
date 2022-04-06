
import {Header, Button} from './Feedback.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div>
          
        {options.map((label) => (
          <Button
            type="button"
            name={label}
            key={label}
            
            onClick={onLeaveFeedback}
          >
            {label}
          </Button>
        ))}
      </div>
    );
  };

export default FeedbackOptions