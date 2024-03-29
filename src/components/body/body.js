import { useState } from "react";
import AboutMe from "../pages/aboutme";
import Message from "../pages/message";
import Projects from "../pages/projects";
import Resume from "../pages/resume";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

function PageBody() {
  const [activePage, setActivePage] = useState("aboutme");

  function handlePageChange(page) {
    setActivePage(page);
  }

  let pageContent;

  if (activePage === "aboutme") {
    document.title = "About Me";
    pageContent = <AboutMe />;
  } else if (activePage === "message") {
    document.title = "Contact Me";
    pageContent = <Message />;
  } else if (activePage === "projects") {
    document.title = "Projects Page";
    pageContent = <Projects />;
  } else if (activePage === "resume") {
    document.title = "Resume Page";
    pageContent = <Resume />;
  }

  return (
    <>
      <Navbar handlePageChange={handlePageChange} activePage={activePage} />
      {pageContent}
      <Footer />
    </>
  );
}

export default PageBody;
