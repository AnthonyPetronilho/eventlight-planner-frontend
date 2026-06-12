import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SceneForm from "../../components/SceneForm/SceneForm";

import { createScene, deleteScene, getScenes } from "../../utils/MainApi";

import "./Library.css";

function Library({ isLoggedIn, onLogout, onLoginClick }) {
  const [scenes, setScenes] = useState([]);
  const [error, setError] = useState("");

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    if (!token) return undefined;

    getScenes(token)
      .then((data) => {
        setScenes(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [token]);

  const handleCreateScene = (sceneData) => {
    return createScene(sceneData, token)
      .then((newScene) => {
        setScenes([newScene, ...scenes]);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const handleDeleteScene = (sceneId) => {
    deleteScene(sceneId, token)
      .then(() => {
        setScenes(scenes.filter((scene) => scene._id !== sceneId));
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onLogout={onLogout}
        onLoginClick={onLoginClick}
      />

      <main className="library">
        <section className="library__container">
          <h1 className="library__title">Biblioteca pessoal</h1>

          <p className="library__subtitle">Aqui ficarão salvas suas cenas.</p>

          <SceneForm onCreateScene={handleCreateScene} />

          {error && <p className="library__error">{error}</p>}

          <ul className="library__list">
            {scenes.map((scene) => (
              <li className="library__card" key={scene._id}>
                <div>
                  <h2 className="library__card-title">{scene.title}</h2>
                  <p>Evento: {scene.eventType}</p>
                  <p>Momento: {scene.moment}</p>
                  <p>Cores: {scene.colors.join(", ")}</p>
                  <p>Equipamentos: {scene.fixtures.join(", ")}</p>
                  <p>Movimento: {scene.movement}</p>
                  <p>Intensidade: {scene.intensity}</p>
                  {scene.notes && <p>Observações: {scene.notes}</p>}
                </div>

                <button
                  className="library__delete-button"
                  type="button"
                  onClick={() => handleDeleteScene(scene._id)}
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Library;
