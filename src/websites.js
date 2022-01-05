import './App.css';
import podcast from './img/podcast.png';
import resume from './img/resume.png';

function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.img} alt="Logo" />
      <div className="card-container">
        <h4><b>{props.siteName}</b></h4>
        <button className="card-button">
          <a target="_blank" href={props.buttonUrl} class="button">
            Visit
          </a>
        </button>
      </div>
    </div>

  );
}

function Websites() {
  return (
    <div className="Websites">
      <div className="websites-wrapper">
        <p className="websites-intro">Check out some the websites I've designed & coded in the past!</p>

        <Card img={podcast} siteName="Learn Korean and Korean Culture" buttonUrl="https://learnkoreanandkoreanculture.github.io/podcast"></Card>
        <Card img={resume} siteName="Personal Resume" buttonUrl="https://kellyryooresume.vercel.app/"></Card>

      </div>
    </div>
  );
}

export default Websites;
