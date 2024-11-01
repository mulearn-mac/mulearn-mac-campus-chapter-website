import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import "../../styles/hero-section.css";
import mulearnLogoorange from "../../assets/img/mulearn-logo-orange.svg";

function Hero() {
  return (
    <div
      className="d-flex flex-column justify-content-evenly align-items-center"
      id="hero"
    >
      <img
        className="img-fluid w-50"
        src={mulearnLogoorange}
        alt="Mulearn Logo Orange"
      />

      <div id="hero-title">
        <h1 className="display-6 en-sirin text-center title" id="">
          <span className="mac text-nowrap">Mar Augusthinose College </span>{" "}
          <span className="cc text-nowrap">Campus Chapter</span>{" "}
        </h1>

        <p className="en-mulearn fs-4 text-center hero-caption" id="">
          Let's Learn and Grow Together!
        </p>
      </div>

      <Link to="/joinus">
        <Button className="btn-info">Wanna Join Us!</Button>
      </Link>
    </div>
  );
}

export default Hero;
