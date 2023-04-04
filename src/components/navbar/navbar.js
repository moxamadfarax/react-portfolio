function Navbar(props) {
  const { handlePageChange, activePage } = props;

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-brand">Mohamed Farah</div>
        <hr />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto ms-auto nav-underline">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activePage === "aboutme" ? "active" : ""
                }`}
                onClick={() => handlePageChange("aboutme")}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activePage === "projects" ? "active" : ""
                }`}
                onClick={() => handlePageChange("projects")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activePage === "message" ? "active" : ""
                }`}
                onClick={() => handlePageChange("message")}
              >
                Contact Me
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activePage === "resume" ? "active" : ""
                }`}
                onClick={() => handlePageChange("resume")}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
