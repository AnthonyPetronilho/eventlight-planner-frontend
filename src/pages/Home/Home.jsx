import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import ModalWithForm from "../../components/ModalWithForm/ModalWithForm";

import "./Home.css";

function Home() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleGoToColors = () => {
    navigate("/colors");
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeModal = () => {
    setIsRegisterModalOpen(false);
  };

  useEffect(() => {
    if (!isRegisterModalOpen) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isRegisterModalOpen]);

  return (
    <>
      <Header />
      <main className="home">
        <section className="home__hero">
          <h1 className="home__title">
            Planeje luzes
            <br />
            Crie momentos
          </h1>
          <p className="home__subtitle">
            Organize cenas de iluminação para qualquer tipo de evento
          </p>
          <div className="home__buttons">
            <Button
              text="Criar conta"
              type="primary"
              onClick={openRegisterModal}
            />
            <Button
              text="Explorar cores"
              type="secondary"
              onClick={handleGoToColors}
            />
          </div>
        </section>

        <section className="home__features">
          <FeatureCard
            title="Biblioteca pessoal"
            description="Salve e organize suas cenas de iluminação em um só lugar"
          />
          <FeatureCard
            title="Paletas de cores"
            description="Explore combinações de cores para criar momentos mais marcantes"
          />
          <FeatureCard
            title="Para qualquer evento"
            description="Monte cenas para casamentos, festas, 15 anos e eventos corporativos"
          />
        </section>
      </main>
      <Footer />

      <ModalWithForm
        isOpen={isRegisterModalOpen}
        title="Criar conta"
        buttonText="Cadastrar"
        onClose={closeModal}
      >
        <input className="modal__input" type="text" placeholder="Nome" />
        <input className="modal__input" type="email" placeholder="E-mail" />
        <input className="modal__input" type="password" placeholder="Senha" />
      </ModalWithForm>
    </>
  );
}

export default Home;
