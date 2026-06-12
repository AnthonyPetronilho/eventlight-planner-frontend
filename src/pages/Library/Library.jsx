import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SceneForm from "../../components/SceneForm/SceneForm";
import {
  createScene,
  deleteScene,
  getScenes,
  updateScene,
} from "../../utils/MainApi";
import EditSceneModal from "../../components/EditSceneModal/EditSceneModal";
import "./Library.css";

function Library({ isLoggedIn, onLogout, onLoginClick }) {
  const [scenes, setScenes] = useState([]);
  const [error, setError] = useState("");

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedScene, setSelectedScene] = useState(null);

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    if (!token) return undefined;

    getScenes(token)
      .then((data) => {
        setScenes(data);
      })
      .catch((err) => {
        setError(err.message || String(err));
      });
  }, [token]);

  const handleCreateScene = (sceneData) => {
    return createScene(sceneData, token)
      .then((newScene) => {
        setScenes([newScene, ...scenes]);
        setError("");
      })
      .catch((err) => {
        setError(err.message || String(err));
      });
  };

  const handleEditScene = (scene) => {
    setSelectedScene(scene);
    setIsEditModalOpen(true);
  };
  const handleUpdateScene = (sceneId, sceneData) => {
    return updateScene(sceneId, sceneData, token)
      .then((updatedScene) => {
        setScenes(
          scenes.map((scene) => (scene._id === sceneId ? updatedScene : scene)),
        );
        setSelectedScene(null);
        setIsEditModalOpen(false);
        setError("");
      })
      .catch((err) => {
        setError(err.message || String(err));
      });
  };

  const handleDeleteScene = (sceneId) => {
    deleteScene(sceneId, token)
      .then(() => {
        setScenes(scenes.filter((scene) => scene._id !== sceneId));
        setError("");
      })
      .catch((err) => {
        setError(err.message || String(err));
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

          <SceneForm onSubmit={handleCreateScene} submitText="Salvar cena" />

          {error && <p className="library__error">{error}</p>}

          <ul className="library__list">
            {scenes.map((scene) => (
              <li className="library__card" key={scene._id}>
                <div className="library__card-header">
                  <h2 className="library__card-title">{scene.title}</h2>

                  <div className="library__card-actions">
                    <button
                      className="library__edit-button"
                      type="button"
                      onClick={() => handleEditScene(scene)}
                    >
                      Editar
                    </button>

                    <button
                      className="library__delete-button"
                      type="button"
                      onClick={() => handleDeleteScene(scene._id)}
                    >
                      Excluir
                    </button>
                  </div>
                </div>

                <div className="library__card-content">
                  <div className="library__info-grid">
                    <div className="library__info-item">
                      <span className="library__info-label">
                        Tipo de evento
                      </span>
                      <span className="library__info-value">
                        {scene.eventType}
                      </span>
                    </div>

                    <div className="library__info-item">
                      <span className="library__info-label">Momento</span>
                      <span className="library__info-value">
                        {scene.moment}
                      </span>
                    </div>

                    <div className="library__info-item">
                      <span className="library__info-label">Movimento</span>
                      <span className="library__info-value">
                        {scene.movement}
                      </span>
                    </div>

                    <div className="library__info-item">
                      <span className="library__info-label">Intensidade</span>
                      <span className="library__info-value">
                        {scene.intensity}
                      </span>
                    </div>

                    <div className="library__info-item">
                      <span className="library__info-label">Cores</span>
                      <span className="library__info-value">
                        {scene.colors.join(", ")}
                      </span>
                    </div>

                    <div className="library__info-item">
                      <span className="library__info-label">Equipamentos</span>
                      <span className="library__info-value">
                        {scene.fixtures.join(", ")}
                      </span>
                    </div>
                  </div>

                  {scene.notes && (
                    <p className="library__notes">
                      <strong>Obs:</strong> {scene.notes}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <EditSceneModal
        isOpen={isEditModalOpen}
        scene={selectedScene}
        onClose={() => {
          setSelectedScene(null);
          setIsEditModalOpen(false);
        }}
        onUpdateScene={handleUpdateScene}
      />

      <Footer />
    </>
  );
}

export default Library;
