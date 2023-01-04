import logo from "../../assets/img/logo.svg";
import "./styles.css";

function Header() {
  return (
    <>
      <header>
        <div className="dsmeta-logo-container">
          <img src={logo} alt="DSMeta-ICSr" />
          <h1>DSMeta</h1>
          <p>
            Desenvolvido por:
            <a href="https://github.com/icsmv001/projeto-meta">
              @devsuperior.ig
            </a>
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
