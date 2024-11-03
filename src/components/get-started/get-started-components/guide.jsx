import Section1 from "./section-1";
import Section2 from "./section-2";
import Section3 from "./section-3";
import Section4 from "./section-4";
import Section5 from "./section-5";
import Section6 from "./section-6";
import Section7 from "./section-7";
import Section8 from "./section-8";

function Guide() {
  return (
    <div className="px-md-5 px-2 py-0 my-0">
      <section className="">
        <p className="h2 text-center pb-2">
          What to do after joining discord server?
        </p>

        <p className="description">
          The First thing to do after joining the discord server is to{" "}
          <span className="mark"> introduce yourself to the community </span>{" "}
          (refer to{" "}
          <a href="/p/joinus.html#step5" className="text-decoration-none">
            step 5{" "}
          </a>{" "}
          of join us page). After that familiarise yourself with our discord
          server enviornment.
        </p>
        <hr className="text-center w-50 mx-auto" />
      </section>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </div>
  );
}

export default Guide;
