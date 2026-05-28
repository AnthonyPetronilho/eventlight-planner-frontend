import Header from "../../components/Header/Header";
import "./Home.css";
import Button from "../../components/Button/Button";

function Home() {
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
            <Button text="Criar conta" type="primary" />
            <Button text="Explorar cores" type="secondary" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
