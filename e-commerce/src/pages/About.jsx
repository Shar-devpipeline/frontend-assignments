import React from "react";
import "../style/pages/about.scss";

const About = () => {
  return (
    <div className="about-page">
      <section className="capstone-section">
        <h2>Capstone Project:</h2>
        <p>
          My capstone project revolved around building a fully functional
          e-commerce platform. This included integrating the{" "}
          <a
            href="https://fakestoreapi.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fake Store API
          </a>{" "}
          to fetch and display products dynamically.
        </p>
        <p>
          The process began with whiteboarding and reading the API
          documentation.
        </p>
      </section>

      <section className="struggles-section">
        <h2>Challenges During the Frontend Course</h2>
        <p>
          I think the biggest struggle I had was trying to balance both work and
          the frontend course. I wanted to spend all of my time working because
          it felt more productive. However I quickly learned that the further
          along I got in the course the more comfortable I was at work. So I was
          able to overcome the desire to put one or the other off and learn from
          both.
        </p>
        <p>
          Another one of the major struggles I faced was managing{" "}
          <strong>props</strong>, especially when passing them down through
          multiple components. As the component tree grew, it became challenging
          to keep track of which props were being passed where and to ensure
          consistency across the applications. I plan to continue to work on
          overcoming this with online courses and experience in the dev shop.
        </p>
      </section>

      <section className="favorites-section">
        <h2>My Favorite Languages</h2>
        <p>
          My favorite language is undoubtedly <strong>Python</strong>. Its
          simplicity, readability, and extensive libraries make it my favorite.
          Python allows me to focus on solving problems without getting bogged
          down in syntax.{" "}
        </p>
        <p>
          However, for this course and project, I’ve thoroughly enjoyed working
          with the <strong>React Framework</strong>. React's component-based
          architecture is both fun and powerful, enabling me to break down
          complex UIs into manageable pieces.
        </p>

        <p>
          Exploring React has been a great experience, and it has taught me how
          modern frontend frameworks streamline the development process. It's
          safe to say React has found a spot among my favorite tools to use in
          future projects.
        </p>
      </section>
    </div>
  );
};

export default About;
