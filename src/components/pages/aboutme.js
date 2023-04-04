import img from "../../assets/img/photo.png";

function AboutMe() {
  const styles = {
    container: { paddingBottom: "83px" },
    imageWrapper: { paddingBottom: "3em" },
    image: { borderRadius: "10px", height: "55rem" },
    textWrapper: {
      textAlign: "start",
      paddingLeft: "2em",
      marginRight: "-250px",
    },
  };
  return (
    <main className="container" style={styles.container}>
      <div className="container text-center">
        <div className="row align-items-start flex-column flex-md-row">
          <div
            className="col-md-6 overflow-hidden text-wrap"
            style={styles.imageWrapper}
          >
            <img
              src={img}
              alt="boy and his aunt on a camel at the beach"
              style={styles.image}
            />
          </div>

          <div
            className="col-md-6 overflow-hidden text-wrap"
            style={styles.textWrapper}
          >
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio quod architecto sunt consequatur facilis amet? Amet
              perspiciatis aut alias quas eveniet placeat reprehenderit earum
              minima repellat, nulla dolor dolore minus. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Corporis porro molestiae,
              dolorum rem quis sed libero voluptatem, tempore unde esse atque
              voluptatum. Tenetur quis rem aperiam numquam et quisquam velit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              ipsum officia quis, voluptas ab repudiandae asperiores non quia
              voluptatem distinctio sapiente similique dolore dignissimos?
              Corporis esse ea est reprehenderit minus!
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutMe;
