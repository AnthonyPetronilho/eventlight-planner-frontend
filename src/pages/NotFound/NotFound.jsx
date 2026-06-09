import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./NotFound.css";

function NotFound() {
  return (
    <>
      <Header />
      <main className="not-found">
        <section className="not-found__container">
          <span className="not-found__code">404</span>
          <h1 className="not-found__title">Página não encontrada</h1>
          <p className="not-found__subtitle">
            A página que você está procurando não existe ou foi movida.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
