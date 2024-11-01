import React from "react";

function OfficialLinks() {
  return (
    <section className="redirects my-4 d-flex flex-row justify-content center align-items-center">
      <a
        href="https://gtechindia.org/"
        className="d-block m-auto col-3 btn text-orange fs-4 hover-scale-11 transition-05 hover-blue"
      >
        GTech
      </a>
      <a
        href="https://mulearn.org/"
        className="d-block m-auto col-3 btn text-orange fs-4 hover-scale-11 transition-05 hover-blue"
      >
        μlearn
      </a>
      <a
        href="https://mac.edu.in/"
        className="d-block m-auto col-3 btn text-orange fs-4 hover-scale-11 transition-05 hover-blue"
      >
        MAC
      </a>
    </section>
  );
}

export default OfficialLinks;
