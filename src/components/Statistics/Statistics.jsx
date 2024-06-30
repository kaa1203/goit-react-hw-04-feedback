import css from "./Statistics.module.css";
import PropTypes from "prop-types";

export const Statistics = ({ good, neutral, bad, total }) => {
   return (
      <ul className={css.statList}>
         <li className={css.statItem}>
            <h3 className={css.statHeader}>good</h3>
            <p>{good}</p>
         </li>
         <li className={css.statItem}>
            <h3 className={css.statHeader}>neutral</h3>
            <p>{neutral}</p>
         </li>
         <li className={css.statItem}>
            <h3 className={css.statHeader}>bad</h3>
            <p>{bad}</p>
         </li>
         <li className={css.statItem}>
            <h3 className={css.statHeader}>total positive feedback</h3>
            <p>{total}</p>
         </li>
      </ul>
   );
}

Statistics.propTypes = {
   good: PropTypes.number.isRequired,
   neutral: PropTypes.number.isRequired,
   bad: PropTypes.number.isRequired,
   total: PropTypes.string.isRequired,
}