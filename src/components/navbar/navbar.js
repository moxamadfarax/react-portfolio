// import Footer from "../footer/footer";
// import AboutMe from "../pages/aboutme";
// import Message from "../pages/message";
// import Projects from "../pages/projects";
// import Resume from "../pages/resume";

function Navbar() {
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
              <a className="nav-link " href="aboutme.html">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="projects.html">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="message.html">
                Contact Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="resume.html">
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
