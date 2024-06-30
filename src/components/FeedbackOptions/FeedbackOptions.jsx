import css from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onFeedback }) => {
   return (
      <div className={css.container}>
         {
            options.map(option => (
               <button
                  className={css.button} 
                  key={option}
                  onClick={() => {onFeedback(option)}}
               >
                  {option}
               </button>
            ))
         }
      </div>
   );
}

FeedbackOptions.propTypes = {
   options: PropTypes.arrayOf(PropTypes.oneOf(["good", "neutral", "bad"])).isRequired,
   onFeedback: PropTypes.func.isRequired,
}