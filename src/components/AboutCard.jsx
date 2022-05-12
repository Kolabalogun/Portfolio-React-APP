import "./About.css";

const AboutCard = (props) => {
  return (
    <div className="aboutCard">
      <img
        src={props.src}
        alt={props.alt}
        className="resource-logo"
      />
      <p>{props.name}</p>
    </div>
  );
};

export default AboutCard;
