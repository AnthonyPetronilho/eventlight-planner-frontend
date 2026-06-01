import "./Button.css";

function Button({ text, type, onClick }) {
  return (
    <button
      className={`button button_type_${type}`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
