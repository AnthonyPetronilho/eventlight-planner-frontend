import { useEffect, useState } from "react";
import "./ColorsPage.css";

import Header from "../../components/Header/Header";
import Preloader from "../../components/Preloader/Preloader";
import SearchForm from "../../components/SearchForm/SearchForm";
import { getColor } from "../../utils/colorApi";

function ColorsPage() {
  const [hex, setHex] = useState("");
  const [colors, setColors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const savedColors = localStorage.getItem("colors");

    if (savedColors) {
      setColors(JSON.parse(savedColors));
    }
  }, []);

  const handleInputChange = (e) => {
    setHex(e.target.value);
    setErrorMessage("");
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!hex.trim()) {
      setErrorMessage("Por favor, insira uma cor em HEX.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const cleanHex = hex.replace("#", "");
      const data = await getColor(cleanHex);

      const filteredColors = colors.filter(
        (color) => color.hex.value !== data.hex.value,
      );

      const updatedColors = [data, ...colors].slice(0, 20);

      setColors(updatedColors);
      localStorage.setItem("colors", JSON.stringify(updatedColors));

      setHex("");
    } catch {
      setErrorMessage(
        "Desculpe, algo deu errado durante a solicitação. Pode haver um problema de conexão ou o servidor pode estar inativo. Por favor, tente novamente mais tarde.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />

      <main className="colors-page">
        <section className="colors-page__hero">
          <h1 className="colors-page__title">Explorar cores</h1>

          <p className="colors-page__subtitle">
            Descubra paletas e combinações para seus eventos.
          </p>

          <SearchForm
            value={hex}
            onChange={handleInputChange}
            onSubmit={handleSearch}
            error={errorMessage}
          />

          {colors.length > 0 && (
            <button
              className="colors-page__clear-button"
              onClick={() => {
                setColors([]);
                localStorage.removeItem("colors");
              }}
            >
              Limpar histórico
            </button>
          )}

          {isLoading && <Preloader />}

          {colors.length > 0 && (
            <section className="colors-page__grid">
              {colors.map((color, index) => (
                <article
                  key={`${color.hex.value}-${index}`}
                  className="colors-page__card"
                >
                  <div
                    className="colors-page__preview"
                    style={{ backgroundColor: color.hex.value }}
                  ></div>

                  <div className="colors-page__info">
                    <h2>{color.name.value}</h2>
                    <p>{color.hex.value}</p>
                    <p>
                      rgb({color.rgb.r}, {color.rgb.g}, {color.rgb.b})
                    </p>
                  </div>
                </article>
              ))}
            </section>
          )}
        </section>
      </main>
    </>
  );
}

export default ColorsPage;
