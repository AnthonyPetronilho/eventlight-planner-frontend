import "./Button.css";

function Button({ text, type }) {
  return <button className={`button button_type_${type}`}>{text}</button>;
}

export default Button;
