import React from "react";
import "./portfolio.css";
import BudgetTracker from "../../assets/BudgetTracker.png";
import Store from "../../assets/Store.png";
import Server from "../../assets/Server.png";
import Auth from "../../assets/Auth.jpg";
import CAPS from "../../assets/CAPS1.jpg";
import Lamp from "../../assets/lamp.png";


const data = [
  {
    id: 1,
    image: BudgetTracker,
    title: "Budget Tracker",
    github: "https://github.com/hala277/Budget-Tracker",
    demo: "https://62ef95b89c97390008d01f03--melodious-cuchufli-6855c6.netlify.app/",
  },
  {
    id: 2,
    image: Store,
    title: "Store",
    github: "https://github.com/hala277/storefront",
    demo: "https://629726e43a82fa72d3c23e90--beautiful-conkies-11f728.netlify.app/",
  },
  {
    id: 3,
    image: Server,
    title: "api-server",
    github: "https://github.com/hala277/api-server",
    demo: "https://hala-api-server.herokuapp.com/",
  },
  {
    id: 4,
    image: Auth,
    title: "Auth api",
    github: "https://github.com/hala277/auth-api",
    demo: "https://halaauth-api.herokuapp.com/",
  },
  {
    id: 5,
    image: CAPS,
    title: "CAPS",
    github: "https://github.com/hala277/caps",
    demo: "https://github.com/hala277/caps",
  },
  {
    id: 6,
    image: Lamp,
    title: "HEADER LAMP",
    github: "https://codepen.io/hala_almasharfeh/pen/qBXQveV",
    demo: "https://codepen.io/hala_almasharfeh/full/qBXQveV",
  },

  
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Project's</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key = {id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

<article className="portfolio__item">
  <div className="portfolio__item-image">
    <img src={BudgetTracker} alt="BudgetTracker" />
  </div>
  <h3>This is a BudgetTracker </h3>
  <div className="portfolio__item-cta">
    <a
      href="https://github.com/hala277/Budget-Tracker"
      className="btn"
      target="_blank"
    >
      Github
    </a>
    <a
      href="https://62ef95b89c97390008d01f03--melodious-cuchufli-6855c6.netlify.app/"
      className="btn btn-primary"
      target="_blank"
    >
      Live Demo
    </a>
  </div>
</article>;
