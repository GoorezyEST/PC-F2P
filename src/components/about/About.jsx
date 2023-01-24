import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import img from "../../assets/about-background-placeholder.png";

function About() {
  return (
    <section className="about">
      <div className="about_backimg">
        <LazyLoadImage
          src="https://i.imgur.com/0HjOsnL.png"
          srcSet={`
https://i.imgur.com/0HjOsnL.png 2040w,
https://i.imgur.com/9odt7Al.png 700w`}
          effect="blur"
          height="100%"
          width="100%"
          placeholderSrc={img}
          alt="A background made with a couple of games thumbnails"
        />
      </div>
      <div className="about_data">
        <h2>Hello user!</h2>
        <p>
          This is PC F2P, since I have memory that I play videogames, but as a
          lot of other people I didn't has the money to spend in games.
        </p>
        <p>
          Now that I can develop websites I decided to build one where anyone
          can find Free Games for PC.
        </p>
        <p>
          Thanks to the FreeToGame API here you can find more than 300 games,
          all free.
        </p>
        <p>So don't wait more and start searching a new experiencie!</p>
        <p>
          Also, if you are interested in contacting me you can&nbsp;
          <a
            href="https://goorezy-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>
        </p>
        <Link className="about_return" to="../">
          Return home
        </Link>
      </div>
    </section>
  );
}

export default About;
