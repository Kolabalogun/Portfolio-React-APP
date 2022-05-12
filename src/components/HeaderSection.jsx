import Navbar from "./Navbar";
import "./Navbar.css";

const HeaderSection = () => {
  return (
    <div className="header-section">
      <Navbar />

      <div class="caption-wrapper">
        <div class="caption">
          <h1>Hi, I'm Ibrahim</h1>
          <h2>
            Front End and Software <span class="dev">Developer</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
