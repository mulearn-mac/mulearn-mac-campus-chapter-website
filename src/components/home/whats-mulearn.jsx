import React from "react";
import techFriends from "../../assets/img/tech-friends.webp";

function WhatsMulearn() {
  return (
    <section
      className="row justify-content-center align-items-center py-3 px-md-3 m-0"
      id="us"
    >
      <div className="col-md-7">
        <p className="display-5 fw-600 text-center">
          What's <span className="en-mulearn">μLearn</span>
        </p>
        <p className="text-md-center px-3 text-wrap">
          <span>
            <a
              href="https://mulearn.org/"
              className="en-mulearn text-decoration-none"
            >
              μlearn
            </a>
          </span>{" "}
          is an awesome space where students hangout for the purpose of learning
          and skill development. μlearn is a student driven community where
          everything is carried out by the students themselves, with the support
          of expert mentors behind the scenes. It is an amazing community
          initiated by <a href="https://gtechindia.org/">GTech</a> (Group of
          Technmology Companies), and is a synergy of the Industry, Institutions
          and the Society. With its moto as to
          <span className="mark d-inline-block">DEMOCRATICE</span>,
          <span className="mark d-inline-block">DECENTRALISE</span>
          and
          <span className="mark d-inline-block">DIGITISE</span> learning and peer learning as
          its core, μlearn enables students to learn cutting edge technologies,
          carry on projects, connect with like minded peers, seek guidence from
          experts from all over the industry and to land on their dream jobs. As
          a mulearner, what you only need is the thrive to improve and the
          courage to ask.
        </p>
      </div>
      <div className="col-md-6 d-block">
        <img
          src={techFriends}
          alt=""
          className="col-11 col-md-8 d-block m-auto img-fluid"
        />
      </div>
    </section>
  );
}

export default WhatsMulearn;
