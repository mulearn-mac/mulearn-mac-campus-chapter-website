import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import imgInstagram from "../../assets/img/instagram.png";
import "../../styles/footer.css";

function Footer() {
  useEffect(() => {
    var footerExt = document.getElementById("footerExt");
    footerExt.style.display = "none";
  }, []);

  function expandCollapseFooter() {
    let footerExt = document.getElementById("footerExt");
    if (
      footerExt.classList ==
      "d-flex flex-row justify-content-center align-item-center flex-wrap bg-dark pb-4"
    ) {
      footerExt.classList = "";
    } else {
      footerExt.classList =
        "d-flex flex-row justify-content-center align-item-center flex-wrap bg-dark pb-4";
    }
  }

  return (
    <footer className="small w-100 text-center text-white">
      <div className="container p-4"></div>
      <div className="text-center p-3 bg-dark pb-2">
        <p className="alert alert-light px-1 py-2 small">
          <Link
            to="/social/instagram"
            className="btn border-0 btn-floating m-1 instagram"
          ></Link>
          Developed & Managed By,
          <Link
            to="/campus-chapter/execom"
            className="text-decoration-none d-inline link-violet en-iceberg text-violet"
          >
            Team <span className="en-mulearn p">μLearn</span> @ MAC
          </Link>
        </p>
        <p className="p small text-center mt-2">
          <a
            href="https://mulearn.org/termsandconditions"
            className="text-decoration-none text-info"
          >
            Terms And Conditions
          </a>
          <span className="px-1">|</span>
          <a
            href="https://mulearn.org/privacypolicy"
            className="text-decoration-none link-greenyellow"
          >
            Privacy Policy
          </a>
        </p>
        <a
          href="##"
          className="small text-decoration-none link-danger"
          onClick={expandCollapseFooter}
        >
          More Options{" "}
        </a>
      </div>

      <div className="" id="footerExt">
        <Link
          to="/joinus"
          className="small col-4 col-md-2 py-2 text-left text-decoration-none link-orange transition-03"
        >
          Join Us
        </Link>

        <Link
          to="/joinus/guide"
          className="small col-4 col-md-2 py-2 text-left text-decoration-none link-orange transition-03"
        >
          Getting Started
        </Link>

        <Link
          to="/community/tasks"
          className="small col-4 col-md-2 py-2 text-left text-decoration-none link-orange transition-03"
        >
          All Tasks List
        </Link>

        <Link
          to="/community/interest-groups"
          className="small col-4 col-md-2 py-2 text-left text-decoration-none link-orange transition-03"
        >
          Interest Groups
        </Link>

        <Link
          to="/campus-chapter/execom"
          className="small col-4 col-md-2 py-2 text-left text-decoration-none link-orange transition-03"
        >
          Our Team
        </Link>

        <Link
          to="/campus-chapter/events"
          className="small col-4 col-md-2 py-2 text-left text-decoration-none link-orange transition-03"
        >
          Events
        </Link>

        <Link
          to="/community/faq"
          className="small col-4 col-md-2 py-2 text-left text-decoration-none link-orange transition-03"
        >
          Frequently Asked Questions
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
