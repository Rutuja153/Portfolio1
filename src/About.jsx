import Profile from "./assets/rutuja.jpeg"

function About() {
  return <>
    <section id="about">

      <h1 className="title">About Me</h1>

      <div className="about-container">

        <div className="about-img">
          <img src={Profile} alt="Profile" />
        </div>

        <div className="about-text">

          <h2>Frontend Developer</h2>

          <p>
            Hello! My name is Rutuja Shinde.
            I am passionate about Web Development and
            enjoy creating modern websites.
          </p>

          <button className="btn">
            Read More
          </button>

        </div>

      </div>

    </section>
  </>
}

export default About;