import PropTypes from "prop-types";

export const Notification = ({message}) => {
   return (
      <div style={{
         textAlign: "center",
         fontSize: "20px",
         fontWeight: "600"
      }}>
         {message}
      </div>
   );
}

Notification.propTypes = {
   message: PropTypes.string.isRequired
}