import Header from "../../components/Header/Header";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />

      <main className="home">
        <section className="home__hero">
          <h1 className="home__title">
            Planeje luzes.
            <br />
            Crie momentos.
          </h1>

          <p className="home__subtitle">
            Organize cenas de iluminação para qualquer tipo de evento.
          </p>
        </section>
      </main>
    </>
  );
}

export default Home;
