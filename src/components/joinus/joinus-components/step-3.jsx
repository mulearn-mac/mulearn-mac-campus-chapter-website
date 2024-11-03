import img9 from "../../../assets/img/joinus/9.jpg";

function Step3() {
  return (
    <div className="description">
      <h3 className="text-center p-4 bg-secondary text-light rounded">
        3. Accept rules and conditions.
      </h3>
      <p className="tips alert alert-info h6 my-2 py-2  font-weight-normal ">
        After joining muLearn you must accept our rules and conditions.
        muLearn's Discord Server is <strong>super strict</strong> with our
        rules. If we find out anyone violating any of our rules, they will be
        kicked out of the community for sure!
      </p>

      <div>
        <p className="px-2 py-3 stepItem h4 Sub">
          <span className="stepNumberSub">3.1</span>
          <span className="stepSub h6">
            {" "}
            In a couple of minutes after joining the server you'll get a pop-up
            like the screenshot below. Only after accepting these rules can you
            remain in the community. You can also find these same rules in the{" "}
            <code> rules-and-readme</code> channel of our server.
          </span>
        </p>
        <div className="acceptRulesImg no-scrollbar">
          <img
            className="w-100"
            src={img9}
            alt="muLearn registration form image"
          />
        </div>
        <p className="alert alert-success my-2">
          After that continue to next step.
        </p>
      </div>
    </div>
  );
}

export default Step3;
