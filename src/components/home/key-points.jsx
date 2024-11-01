import React from "react";
import imgInvolve from "../../assets/img/involve.webp";
import imgInteract from "../../assets/img/interact.png";
import imgInnovate from "../../assets/img/innovate.webp";

function KeyPoints() {
  return (
    <section className="d-md-flex flex-row justify-content-start align-items-center overflow-auto no-scrollbar">
      <div className="col-12 col-md-4  my-2 keyItem text-center">
        <img
          src={imgInvolve}
          alt=""
          className="w-25 my-4 d-block m-auto keyImg"
        />
        <p className="fs-2 text-secondary fw-600 keyTitle">Involve</p>
        <p className="px-1 px-md-3">
          µLearn is a place for everyone. A place where one could involve and
          evolve the most. Be a part of our interesting events like Inspiration
          Radio, Salt mango tree and many more to make the most out of it.
        </p>
      </div>

      <div className="col-12 col-md-4 my-2 keyItem text-center">
        <img
          src={imgInteract}
          alt=""
          className="w-25 my-4 d-block m-auto keyImg"
        />
        <p className="fs-2 text-secondary fw-600 keyTitle">Interact</p>
        <p className="px-1 px-md-3">
          An Interactive setting where each one of you could connect with folks
          and mentors having a remarkable mindset. Your involvements, and
          dedication to the community can even get you an internship
          opportunity.
        </p>
      </div>

      <div className="col-12 col-md-4 my-2 keyItem text-center">
        <img
          src={imgInnovate}
          alt=""
          className="w-25 my-4 d-block m-auto keyImg"
        />
        <p className="fs-2 text-secondary fw-600 keyTitle">Innovate</p>
        <p className="px-1 px-md-3">
          A place brimming with possibilities for innovation and astonishing
          creations. A perfect spot to display your works. Here you always
          advance and invent yourself!
        </p>
      </div>
    </section>
  );
}

export default KeyPoints;
