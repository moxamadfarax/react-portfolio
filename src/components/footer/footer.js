import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="container footer-container text-center">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <a href="https://www.linkedin.com/in/mohamed-farah-77309b256/">
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </a>
          </div>
          <div className="col">
            <a href="https://github.com/moxamadfarax">
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
          </div>
          <div className="col">
            <a href="mailto: mohamedfarah0508@gmail.com">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
            </a>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
