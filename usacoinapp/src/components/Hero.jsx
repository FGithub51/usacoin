import React from "react";
import "../styles/index.hero.css";
import CopyButton from "./CopyButton";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-background">
        <img src="background.jpg" />
      </div>
      <div className="hero-content">
        <h1 className="title">Welcome to USACOIN</h1>
        <div className="description">
          USAcoin is a solana based meme coin that is aimed to celebrate United
          States Independence Day.
          <br></br>
          In 1870 the U.S. Congress made Independence Day an unpaid holiday for
          federal workers, and in 1938 it became a paid federal holiday. Also
          called the Fourth of July, the holiday is celebrated across the United
          States with parades, fireworks shows, picnics, concerts, and other
          festivities.
        </div>
        <div className="ca">
          <CopyButton text="dfjgkdngjdkgdfj" />
        </div>
        <a href="">
          <div className="button">Get Started</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
