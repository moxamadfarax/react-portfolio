import pdf from "../../assets/resume.pdf";
import resume from "../../assets/img/resume.png";

function Resume() {
  const styles = {
    resume: { height: "50em" },
  };
  return (
    <main class="container">
      <div class="containerr">
        <div class="row">
          <div class="col">
            <header>
              <h1>Resume</h1>
            </header>
            <br />
            <div class="col front-end">
              <h2>Front End Profencies</h2>
              <ul>
                <li>- HTML</li>
                <li>- CSS</li>
                <li>- Javascript</li>
                <li>- Handlebars JS</li>
                <li>- Bulma (CSS Framework)</li>
                <li>- Bootstrap (CSS Framework)</li>
                <li>- React JS</li>
              </ul>
            </div>
            <br />
            <div class="col back-end">
              <h2>Back End Profencies</h2>
              <ul>
                <li>- JavaScript</li>
                <li>- Node JS/li</li>
                <li>- MySQL</li>
                <li>- Mongo DB</li>
                <li>- Express</li>
                <li>- GraphQL</li>
                <li>- API's</li>
              </ul>
            </div>
            <br />
            <h3>Click the resume to download it</h3>
          </div>
          <div class="col">
            <a href={pdf} download="">
              <img src={resume} alt="resume photo" style={styles.resume} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Resume;
