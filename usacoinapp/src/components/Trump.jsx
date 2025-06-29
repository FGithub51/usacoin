import React from "react";
import "../styles/index.trump.css";

const Trump = () => {
  return (
    <div className="trump-container">
      <div className="trump-sticker">
        <img src="trumpsticker.jpg" />
      </div>
      <div className="trump-content">
        <div className="trump-title">DONALD J. TRUMP</div>
        <div className="trump-description">
          Donald John Trump (born June 14, 1946) is an American politician,
          media personality, and businessman who is the 47th president of the
          United States. A member of the Republican Party, he served as the 45th
          president from 2017 to 2021. Born into a wealthy family in New York
          City, Trump graduated from the University of Pennsylvania in 1968 with
          a bachelor's degree in economics. He became the president of his
          family's real estate business in 1971, renamed it the Trump
          Organization, and began acquiring and building skyscrapers, hotels,
          casinos, and golf courses. He launched side ventures, many licensing
          the Trump name, and filed for six business bankruptcies in the 1990s
          and 2000s. From 2004 to 2015, he hosted the reality television show
          The Apprentice, bolstering his fame as a billionaire. Presenting
          himself as a political outsider, Trump won the 2016 presidential
          election against Democratic Party nominee Hillary Clinton.
        </div>
      </div>
    </div>
  );
};

export default Trump;
