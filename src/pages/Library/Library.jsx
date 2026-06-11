import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Library.css";

function Library({ isLoggedIn, onLogout, onLoginClick }) {
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

          <p className="library__subtitle">
            Aqui ficarão salvas as cenas de iluminação criadas pelo usuário.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Library;
