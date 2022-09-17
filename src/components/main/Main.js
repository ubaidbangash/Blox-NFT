import React, { useState } from "react";

import "./Main.css";

import Banner from "../../assets/1a. Misfits Banner.svg";
import Barry from "../../assets/2a Barry.svg";
import Intro from "../../assets/3a. Introducing Misfits.svg";
import Light from "../../assets/4a. Lightening Bolt.svg";
import Advent from "../../assets/5a. The Adventure.svg";
import Road from "../../assets/6a. Roadmap.svg";
import Lore from "../../assets/7a. The LORE.svg";
import Misfits from "../../assets/7b. Misfits from the blox New (Desktop).gif";
import Misfit2 from "../../assets/7c. Misfits Background.svg";
import Plan from "../../assets/9. Business Plan Final.svg";
import Team from "../../assets/10. Misfits Team.svg";

function Main() {
  const [userName, setUserName] = useState("");
  const teamBio = {
    Alex: {
      FullName: "Alex Lalos",
      Position: "Creative Director (Co-Founder)",
      Bio: `My whole life, I have been
              a collector from yoyo’s, tazos,
              magazines, pokemon cards, video games,
              to whisky. I became heavily obsessed
              with crypto back in 2016 and have always
              advocated for blockchain and
              decentralisation. When I finally came
              around to the world of NFT, that
              passionate collector roared within me! I
              knew that one day I would create a
              token. I’ve worked in insurance for
              15-years of my professional life
              managing risk for commercial
              enterprises. My mission is to leverage
              those skills and expand NFT to the
              world. This project is a tribute to the
              revolution of NFT, a representation of a
              time that all the early adopters will
              remember what the NFT landscape once
              was. Our purpose was to create
              characters that the NFT community
              connects and relate to on a personal
              level. I wanted to recreate that
              collectors experience and bring to life
              something original whilst introducing a
              unique style of tokenomics`,
    },
    Tom: {
      FullName: "Tom Frazer",
      Position: "Operations and Marketing Director (Co-Founder)",
      Bio: `I have been obsessed with video
              games and collecting from a young age –
              it all started in primary school when my
              friend gave me a Yu-Gi-Oh card. I led
              myself into a downward degen spiral,
              gathering hundreds of Yu-Gi-Oh and
              Pokémon cards with friends. I was first
              introduced to crypto in 2018 by a
              colleague that worked in Banking; he
              told me to buy Bitcoin… I’m sure you’ve
              heard of it. Unfortunately, I didn’t
              listen… Fast forward 3-years, and I am
              utterly obsessed with blockchain
              technology and how the utility is
              reshaping society. I’ve worked in
              corporate finance for a 5-years split
              between London and Singapore. In London,
              I worked for one of the world’s largest
              marketing and communication groups
              within their treasury department
              (helping manage a $1bn investment
              portfolio and group-wide liquidity). In
              understanding how the business operated,
              I developed a love for marketing and
              decided to obtain my master’s degree in
              management, specialising in digital
              marketing. I’m confident my treasury and
              marketing knowledge will allow us to
              build this project the right way,
              putting your money in the right places
              to ensure that we can grow the
              ImmutabloX brand into something that
              will take the NFT world by storm! The
              combined experience and knowledge of
              both Alex and I mean that you can trust
              we will do everything in our power to
              build the best community and provide
              something completely new and refreshing
              to the NFT landscape. We can’t wait for
              you to join us on this journey!`,
    },
    Haider: {
      FullName: "Ghulam Haider",
      Position: "Lead Developer",
      Bio: 'I have always been obsessed with technological trends and striving to stay on top of tech news so that I am never in the position of having to say, "I don’t know". I have worked on my own blockchain networks and several multimillion-dollar projects. My expertise includes writing large-scale desktop, mobile and web applications from the ground up. I am extremely competent in backend, frontend, DevOps, networks, and security. I have worked with many big names that are leveraging and working on the blockchain infrastructures that I have designed. I am confident that I will deliver an incredible result that the entire team and community will be proud of!',
    },
  };

  return (
    <div className="main" id="main">
      <div className="banner">
        <img src={Banner}></img>
      </div>
      <div className="row">
        <div className="col-1">
          <img src={Barry}></img>
          <div className="btns">
            <div className="btn-d">
              <p>Join Discord</p>
            </div>
            <div className="btn-t">
              <p>Follow on twitter</p>
            </div>
          </div>
        </div>

        <div className="col-2">
          <div className="paragrapg">
            <h2>Prepare for the journey</h2>
            <p>
              These misfits are about to be thrown unwillingly into a wild
              adventure to discover the truth of corruption that lies over
              Arcadia. Watch how the tale unfolds! Contribute to their story for
              survival as they navigate through the bloX! 0.05 ETH, 4k unique
              NFTs.
            </p>
          </div>
        </div>
      </div>
      <div className="intro">{/* <img src={Intro}></img> */}</div>
      <div className="light">
        <img src={Light}></img>
      </div>
      <div className="adventure">{/* <img src={Advent}></img> */}</div>
      <div className="road">
        <img src={Road}></img>
      </div>
      <div className="lore">{/* <img src={Lore}></img> */}</div>
      <div className="misfits">
        <img src={Misfits}></img>
      </div>
      <div className="misfit-b">{/* <img src={Misfit2}></img> */}</div>
      <div className="plan">
        <img src={Plan}></img>
      </div>
      <div className="team">
        <img src={Team}></img>
        <button className="btn1" onClick={(e) => setUserName("Tom")}></button>
        <button className="btn2" onClick={(e) => setUserName("Alex")}></button>
        <button
          className="btn3"
          onClick={(e) => setUserName("Haider")}
        ></button>
      </div>

      <div className="userData">
        {userName ? (
          <div className="userIntro">
            <p>
              <b>{teamBio[userName].FullName}</b> <br />
              <em>{teamBio[userName].Position}</em>
              <br /> <br />
              {teamBio[userName].Bio}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Main;
