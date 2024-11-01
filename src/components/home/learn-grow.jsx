import React from "react";
import { Link } from "react-router-dom";
import imgCommunity from "../../assets/img/community.png";

function LearnAndGrow() {
  return (
    <section className="my-5 text-center d-flex flex-row justify-content-around align-items-center">
      <div className="col-md-8">
        <p className="fw-600 h5">
          Learn and Grow <span className="text-orange">Together</span> as a{" "}
          <span className="text-orange">Community</span>
        </p>
        <p className="en-mulearn px-3">
          Are you ready to learn, grow and upskill yourself to the next level?
          Come, be a part of the community, and let's start learning in a new
          better way. Call in your friends as well, because things are going to
          change once you experience it and it is more effective when done with
          a group.
        </p>

        <Link
          to="/joinus"
          className="col-8 d-block mx-auto my-4 en-iceland btn btn-success fs-4"
        >
          Join Us
        </Link>
      </div>

      <img src={imgCommunity} alt="" className="d-none d-md-block" />
    </section>
  );
}

export default LearnAndGrow;
