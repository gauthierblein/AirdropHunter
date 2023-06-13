import { Link } from "react-scroll";
import aboutPic from "../../assets/aboutPic.JPG"
import './about.css'

const About = () => {
  return (
    <div name="me connaître" className="about">

      <div className="about-container">

          <div className="about-left">
            <h2>Me connaître</h2>
            <div className="about-img">
                <img src={aboutPic} alt="Andrea_Aguera" />
            </div>
          </div>

          <div className="about-right">
            <div className="about-container-text">
              <p>Diplômé en tant qu'instructeur de fitness, Personal Trainer, mais aussi en nutrition et en management du sport, je vous accompagne dans vos projets de fitness et de santé, qu'ils soient individuels ou en groupe.</p>
              <br />
              <p>Je m'adapte à vos objectifs et vous apporte mon expertise sur le terrain ou à distance, grâce aux outils numériques.</p>
              <br />
              <p>
                <Link className="about-link" to="contact">Contactez-moi</Link> pour m'expliquer votre projet, et travaillons ensembles à un plan d'action.
              </p>
            </div>
          </div>
          
        </div>
      </div>
  );
};

export default About;
