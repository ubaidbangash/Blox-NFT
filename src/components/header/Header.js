import React from "react";
import "./Header.css";
import IMG from "../../assets/discord.png";
import IMG1 from "../../assets/twitter.png";
import Seas from "../../assets/openSeas.png";

function Header() {
  return (
    <div className="header" id="header">
      <ul className="ul">
        <li>
          <a className="misfits-a">Misfits</a>
        </li>
        <li>
          <a className="mint">Mint</a>
        </li>
        <li>
          <a>
            <img className="img1" src={IMG}></img>
          </a>
        </li>
        <li>
          <a>
            <img className="img2" src={IMG1}></img>
          </a>
        </li>
        <li>
          <a>
            <img className="img3" src={Seas}></img>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
