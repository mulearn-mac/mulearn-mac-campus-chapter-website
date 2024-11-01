import React, { useEffect } from "react";
import "../../styles/counter-section.css";

function CounterSection() {
  useEffect(() => {
    // Function to smoothly increment numbers
    function animateNumbers(target, elementId) {
      let start = 0;
      let duration = 3000; // Animation duration in milliseconds
      let increment = target / (duration / 16); // Adjust the increment for smooth animation

      function updateCount() {
        start += increment;
        const roundedValue = Math.round(start);
        document.getElementById(elementId).innerText = roundedValue + "+";

        if (start < target) {
          requestAnimationFrame(updateCount);
        } else {
          document.getElementById(elementId).innerText = target + "+";
        }
      }
      updateCount();
    }

    // Initial update with animations
    animateNumbers(100, "registeredCount");
    animateNumbers(185000, "karmaCount"); 
    // animateNumbers(80, "activeCount");
    // animateNumbers(1, "enablersCount");
  }, []);
  return (
    <section className="counter text-light d-flex flex-row justify-content-around align-items-center">
      <div className="d-flex flex-row justify-content-start justify-content-md-center align-items-center overflow-auto no-scrollbar text-center">
        <div
          className="en-mulearn mx-3 mt-3 counter-item text-nowrap w-fit"
          id="registeredMembers"
        >
          <p className="fs-4">Registered Members</p>
          <p className="fs-4" id="registeredCount">
            0
          </p>
        </div>

        {/* {remove d-none from className to display active members and enablers } */}
        <div
          className="d-none en-mulearn mx-3 mt-3 counter-item text-nowrap w-fit"
          id="activeMembers"
        >
          <p className="fs-4">Active Members</p>
          <p className="fs-4" id="activeCount">
            0
          </p>
        </div>

        <div
          className="en-mulearn mx-3 mt-3 counter-item text-nowrap w-fit"
          id="karmaPoints"
        >
          <p className="fs-4">Karma Points</p>
          <p className="fs-4" id="karmaCount">
            0
          </p>
        </div>

        <div
          className="d-none en-mulearn mx-3 mt-3 counter-item text-nowrap w-fit"
          id="enablers"
        >
          <p className="fs-4">Enablers</p>
          <p className="fs-4" id="enablersCount">
            0
          </p>
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
