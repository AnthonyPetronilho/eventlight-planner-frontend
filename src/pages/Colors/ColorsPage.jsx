import { useState } from "react";
import "./ColorsPage.css";

import Header from "../../components/Header/Header";
import Preloader from "../../components/Preloader/Preloader";
import SearchForm from "../../components/SearchForm/SearchForm";
import { getColor } from "../../utils/colorApi";

function ColorsPage() {
  const [hex, setHex] = useState("");
  const [colorData, setColorData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setHex(e.target.value);
    setErrorMessage("");
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!hex.trim()) {
      setErrorMessage("Por favor, insira uma cor em HEX.");
      setColorData(null);
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
    setColorData(null);

    try {
      const cleanHex = hex.replace("#", "");
      const data = await getColor(cleanHex);

      setColorData(data);
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

          {isLoading && <Preloader />}

          {colorData && (
            <article className="colors-page__card">
              <div
                className="colors-page__preview"
                style={{ backgroundColor: colorData.hex.value }}
              ></div>

              <div className="colors-page__info">
                <h2>{colorData.name.value}</h2>
                <p>{colorData.hex.value}</p>
                <p>
                  rgb({colorData.rgb.r}, {colorData.rgb.g}, {colorData.rgb.b})
                </p>
              </div>
            </article>
          )}
        </section>
      </main>
    </>
  );
}

export default ColorsPage;
