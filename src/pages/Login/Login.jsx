import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Login.css";

function Login() {
  return (
    <>
      <Header />
      <main className="login">
        <section className="login__container">
          <h1 className="login__title">Área de Login</h1>
          <span className="login__badge">Em desenvolvimento</span>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Login;
