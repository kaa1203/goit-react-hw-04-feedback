import css from "./Section.module.css";
import PropTypes from "prop-types";

export const Section = ({ children , title }) => {
   return (
      <section className={css.section}>
         <h2 className={css.title}>{title}</h2>
         {children}
      </section>
   );
}

Section.propTypes = {
   children: PropTypes.node.isRequired,
   title: PropTypes.string.isRequired
}