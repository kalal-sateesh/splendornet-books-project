/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "../Input/Input.module.css";
const Input = ({ placeHolder = "", onchange, value = "" }) => {
  return (
    <input
      placeholder={placeHolder}
      onChange={(e) => onchange(e.target.value)}
      value={value}
    />
  );
};

export default Input;
