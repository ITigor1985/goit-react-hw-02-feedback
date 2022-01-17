import { Text } from "./Notification.styled";
import propTypes from "prop-types";

const Notification = ({ message }) => {
  return <Text>{message}</Text>;
};

export default Notification;

Notification.propTypes = {
  message: propTypes.string,
};
