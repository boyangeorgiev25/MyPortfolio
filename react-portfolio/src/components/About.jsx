import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="images/AboutMe1.png" alt="" />
      </div>

      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>
          Hi there, welcome to my website! I'm Boyan,
          a passionate web developer who enjoys learning new technologies
          and solving problems with code!
        </h3>
        <p>
          This website is my personal blog where I write about web development
          topics that interest me and inspire me.
        </p>
        <p>
          Thank you for visiting my website and getting to know me better. I hope you
          enjoyed reading my blog posts and
          found
          them useful and informative. If you want to read more of my posts, subscribe
          to my newsletter where I send
          weekly
          updates on web development trends and tips. If you have any feedback or
          suggestions, please let me know. I'd love to hear from you.
        </p>
        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  );
};

export default About;