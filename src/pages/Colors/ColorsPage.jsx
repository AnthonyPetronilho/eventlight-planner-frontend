import { useEffect, useState } from "react";

import "./ColorsPage.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Preloader from "../../components/Preloader/Preloader";
import SearchForm from "../../components/SearchForm/SearchForm";

import { getColor } from "../../utils/colorApi";
import {
  deleteSavedColor,
  getSavedColors,
  saveColor,
} from "../../utils/MainApi";

function ColorsPage({ isLoggedIn, onLogout, onLoginClick }) {
  const [hex, setHex] = useState("");
  const [colors, setColors] = useState([]);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [notFoundMessage, setNotFoundMessage] = useState("");

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    if (!isLoggedIn || !token) {
      setColors([]);
      return;
    }

    getSavedColors(token)
      .then((savedColors) => {
        setColors(savedColors);
      })
      .catch(() => {
        setErrorMessage("Não foi possível carregar seu histórico de cores.");
      });
  }, [isLoggedIn, token]);

  const handleInputChange = (e) => {
    setHex(e.target.value);
    setErrorMessage("");
    setNotFoundMessage("");
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!hex.trim()) {
      setErrorMessage("Por favor, insira uma cor em HEX.");
      return;
    }

    if (!isLoggedIn || !token) {
      setErrorMessage("Faça login para salvar seu histórico de cores.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const cleanHex = hex.replace("#", "");
      const data = await getColor(cleanHex);

      if (!data || !data.hex || !data.name) {
        setNotFoundMessage("Nada encontrado.");
        return;
      }

      const savedColor = await saveColor(
        {
          hex: data.hex.value,
          name: data.name.value,
        },
        token,
      );

      const filteredColors = colors.filter(
        (color) => color.hex !== savedColor.hex,
      );

      setColors([savedColor, ...filteredColors].slice(0, 20));
      setHex("");
    } catch {
      setErrorMessage(
        "Desculpe, algo deu errado durante a solicitação. Tente novamente mais tarde.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteColor = (colorId) => {
    deleteSavedColor(colorId, token)
      .then(() => {
        setColors(colors.filter((color) => color._id !== colorId));
      })
      .catch(() => {
        setErrorMessage("Não foi possível remover essa cor.");
      });
  };

  const handleClearHistory = () => {
    Promise.all(colors.map((color) => deleteSavedColor(color._id, token)))
      .then(() => {
        setColors([]);
      })
      .catch(() => {
        setErrorMessage("Não foi possível limpar o histórico.");
      });
  };

  const handleShowMore = () => {
    setVisibleCards((currentValue) => currentValue + 3);
  };

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onLogout={onLogout}
        onLoginClick={onLoginClick}
      />

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
              type="button"
              onClick={handleClearHistory}
            >
              Limpar histórico
            </button>
          )}

          {isLoading && <Preloader />}

          {notFoundMessage && (
            <p className="colors-page__not-found">{notFoundMessage}</p>
          )}

          {colors.length > 0 && (
            <section className="colors-page__grid">
              {colors.slice(0, visibleCards).map((color) => (
                <article key={color._id} className="colors-page__card">
                  <div
                    className="colors-page__preview"
                    style={{ backgroundColor: color.hex }}
                  />

                  <div className="colors-page__info">
                    <h2>{color.name}</h2>
                    <p>{color.hex}</p>
                  </div>

                  <button
                    className="colors-page__delete-button"
                    type="button"
                    onClick={() => handleDeleteColor(color._id)}
                  >
                    Remover
                  </button>
                </article>
              ))}
            </section>
          )}

          {colors.length > visibleCards && (
            <button
              className="colors-page__show-more-button"
              type="button"
              onClick={handleShowMore}
            >
              Mostrar mais
            </button>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ColorsPage;
