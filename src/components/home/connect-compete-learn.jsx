import React from "react";
import ImgConnect from "../../assets/img/connect.png";

function ConnectCompeteLearn() {
  return (
    <section className="last-point my-4 my-md-0 p-2">
      <div className=" text-center d-md-flex flex-row justify-content-around align-items-center">
        <img
          src={ImgConnect}
          alt=""
          className=" mx-2 col-5 col-md-1 my-5 d-block mx-auto"
        />
        <div className="">
          <p className="fs-2 text-light ts-normal-black fw-600 keyTitle">
            Connect, Compete and Learn !
          </p>
          <p className="p">
            Connect with like minded people, compete with friends and learn from
            one another
          </p>
        </div>
      </div>
    </section>
  );
}

export default ConnectCompeteLearn;
