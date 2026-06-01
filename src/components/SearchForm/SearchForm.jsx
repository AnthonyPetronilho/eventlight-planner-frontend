import "./SearchForm.css";

function SearchForm({ value, onChange, onSubmit, error }) {
  return (
    <form className="search-form" onSubmit={onSubmit} noValidate>
      <div className="search-form__content">
        <input
          className="search-form__input"
          type="text"
          placeholder="Ex: 00FFFF"
          value={value}
          onChange={onChange}
        />

        <button className="search-form__button" type="submit">
          Buscar
        </button>
      </div>

      {error && <span className="search-form__error">{error}</span>}
    </form>
  );
}

export default SearchForm;
