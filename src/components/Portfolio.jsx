import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <section className="porfolio-section" id="porfolio-section">
      <div class="portfolio-wrapper">
        <div class="portfolio-header">
          <h2>Portfolio</h2>
          <div class="resources-line port"></div>
          <p class="cap portt">Here are my latest work</p>
          <div class="portfolio-buttons">
            <div class="Port-btn">ALL</div>
            <div class="Port-btn">FRONT-END</div>
            <div class="Port-btn">SOFTWARE</div>
          </div>
        </div>

        <div class="port-showcase">
          <PortfolioCard
            link={"https://engine321-cup.web.app/"}
            src={"/img/engine.png"}
            name={"ENGINE COMPETITION"}
            details="I was approached by Association of 300 level Engineering Students
            to create and design a website promoting and showcasing their
            football competitions. The purpose of the Engine 3.21 website is
            to promote the competition and direct people to check out updates,
            livescores and details about the competition, it also acts as a
            complete comprehensive break-down of all of the web features."
          />
          <PortfolioCard
            link={"https://adventourswithaisha.wordpress.com/"}
            src={"/img/aisha.png"}
            name={"AdvenTours with Aisha"}
            details="AdvenTours with Aisha is a Travel Blog for whoever is exicted
            about travelling, or at least open your mind a little bit and give
            you a bit more information about some beautiful destinations in
            Nigeria. The website was built using a custom WordPress theme
            developed specially for Travel Blog website."
          />
          <PortfolioCard
            link={"https://martina-store.web.app/"}
            src={"/img/martia.png"}
            name={"MARTINA STORE"}
            details="Martina Store is a website built using a custom Bootstrap theme
            developed specially for the Shopping Site. The Website was
            designed and developed to be fully responsive. A responsive layout
            allows the website to resize appropriately across a wide range of
            devices including desktop computers, laptops, tablets (e.g. iPad)
            and smartphones."
          />
          <PortfolioCard
            link={"https://goofy-williams-cbcb33.netlify.app/"}
            src={"/img/portfolio/web/SS.png"}
            name={"OSHOP"}
            details="This is a project I built after my first month into web
            development and by far the most challenging HTML, CSS and
            JavaScript project I've built."
          />
          <PortfolioCard
            link={"https://ibrahim-todolist.netlify.app/"}
            src={"/img/Screenshot (87).png"}
            name={"TODO LIST"}
            details=""
          />
          <PortfolioCard
            link={""}
            src={"/img/portfolio/software/stock/top.png"}
            name={"VERTEX"}
            details="This is a project I built after my first month into web
            development and by far the most challenging HTML, CSS and
            JavaScript project I've built."
          />
          <PortfolioCard
            link={""}
            src={"/img/portfolio/web/Screenshot (90).png"}
            name={"MY PORTFOLIO"}
            details="My portfolio is a website I built for myself to showcase my work
            for potential clients and employers. I use MySqli to store my
            projects for better performance and for easier update of new
            projects."
          />
          <PortfolioCard
            link={"https://o-delivery.herokuapp.com/"}
            src={"/img/portfolio/web/Odelivery/Screenshot (79).png"}
            name={"ODELIVERY"}
            details="ODELIVERY is an e-commerce site built for Food Delivery. I built
            this project from scratch with HTML, CSS, PHP and JavaScript. PHP
            is use to send email to custormer update about their order.
            Finally i use Paystack and Stripe as the payment gateway."
          />
          <PortfolioCard
            link={""}
            src={"/img/portfolio/software/Screenshot (113).png"}
            name={"Task Manager"}
            details="Task manager is my first Desktop application project that I built,
            my goal was to use it to kick start my Java GUI skills. It utilize
            MySqli to manage task which make completion, updating and deleting
            of tasks much easier to implement."
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
