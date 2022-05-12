import "./About.css";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section className="about-section" id="about-section">
      <div className="about-wrapper">
        <div className="about-image">
          <img src="/img/about/003.jpg" alt="" />
        </div>
        <div className="about-text">
          <h3>About Me</h3>
          <div className="line"></div>
          <p>
            I'm Ibrahim, a Front End and Software Developer. I'm passionate
            about designing and building web and software applications. I enjoy
            the entire development process from design to completion. If I can't
            do what you want, I'll surely figure it out. My interest in
            programming has led me to learn both front-end and software
            technologies such as HTML5, CSS3, PHP, JavaScript, and Java. I've
            worked alongside senior designers and developers who have raised my
            standards for whats expected of any web and software application.
            Please scroll down to see some more information and don't forget to
            get in touch.
          </p>
          <a
            href="/folder/my_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="about-btn">DOWNLOAD RESUME</button>
          </a>
        </div>
      </div>

      <div className="resources">
        <h2>My Resources</h2>
        <div className="resources-line"></div>
        <p className="cap">
          Here are all the skills I've learnt and use to develop web
          applications and software
        </p>
        <div className="resources-list">
          <AboutCard 
           src={"/img/svg/html5-brands.svg"}
           alt={"HTML"}
           name={"HTML"}
          />
          <AboutCard 
           src={"/img/svg/css3-alt-brands.svg"}
           alt={"CSS"}
           name={"CSS"}
          />
          <AboutCard 
           src={"/img/svg/js-brands.svg"}
           alt={"JS"}
           name={"JS"}
          />
          <AboutCard 
           src={"/img/svg/php-brands.svg"}
           alt={"PHP"}
           name={"PHP"}
          />
          <AboutCard 
           src={"/img/svg/java-brands.svg"}
           alt={"JAVA"}
           name={"JAVA"}
          />
          <AboutCard 
           src={"/img/svg/bootstrap-brands.svg"}
           alt={"Bootstrap"}
           name={"BOOTSTRAP"}
          />
          <AboutCard 
           src={"/img/svg/github-brands.svg"}
           alt={"GitHub"}
           name={"GitHub"}
          />
          <AboutCard 
           src={"/img/svg/firebase-seeklogo.com.svg"}
           alt={"firebase"}
           name={"Firebase"}
          />
       
        </div>
      </div>
    </section>
  );
};

export default About;
