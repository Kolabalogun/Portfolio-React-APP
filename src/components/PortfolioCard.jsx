import "./Portfolio.css";

const PortfolioCard = (props) => {
  return (
    <div className="show">
      <a href={props.link}>
        <img src={props.src} alt={props.name} />
      </a>
      <h2>{props.name}</h2>
      <p>
        {props.details}
      </p>
      <a href={props.link} className="about-btn portfolio">
        Preview
      </a>
    </div>
  );
};

export default PortfolioCard;
