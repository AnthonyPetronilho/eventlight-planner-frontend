import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">© {currentYear} EventLight Planner</p>

        <nav className="footer__links">
          <a
            className="footer__link"
            href="https://www.linkedin.com/in/anthonypsouza/.com/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>

          <a
            className="footer__link"
            href="https://github.com/AnthonyPetronilho"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
