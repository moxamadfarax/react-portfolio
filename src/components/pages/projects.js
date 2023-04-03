import cardInfo from "../../projectsData";
function Projects() {
  return (
    <main className="container">
      <div className="container text-center card-container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {cardInfo.map((card) => (
            <div className="col" key={card.name}>
              <div className="card">
                <img src={card.img} className="card-img-top" alt={card.alt} />
                <div className="card-body">
                  <h5 className="card-title">{card.name}</h5>

                  <div className="btn-container">
                    <a href={card.repo} className="btn btn-primary">
                      Code
                    </a>
                    <a href={card.website} className="btn btn-primary">
                      Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;
