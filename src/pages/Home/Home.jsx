import Header from "../../components/Header/Header";
import "./Home.css";
import Button from "../../components/Button/Button";
import FeatureCard from "../../components/FeatureCard/FeatureCard";

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
    </>
  );
}

export default Home;
